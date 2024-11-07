"use client";
import FormPost from "@/components/formPost";
import { FormInputPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface EditPostProps {
  params: {
    id: string;
  };
}

const EditPage = ({ params }: EditPostProps) => {
  const { id } = params;
  const router = useRouter();
  const { data: dataPosts, isLoading: isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const {mutate: updatePost, isLoading: isLoadingSubmit} = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
       router.push('/');
       router.refresh();
    }
  })

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    updatePost(data);
  };


  return (
    <div className="w-full flex flex-col justify-center  h-full gap-10 p-10 bg-white text-black ">
      <h1 className="flex items-center justify-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing={true} initialValue={dataPosts} isLoading={isLoading} isLoadingSubmit={isLoadingSubmit}/>
    </div>
  );
};

export default EditPage;
