"use client";
import BackButton from "@/components/backButton";
import FormPost from "@/components/formPost";
import { FormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const page = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    mutate(data);
  };

  const {mutate, isLoading} = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post('/api/posts/create', newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
       router.push('/');
       router.refresh();
    }
  })
  return (
    <div className="w-full gap-10 p-10 bg-white text-black h-full flex flex-col justify-center">
      <div>
        <BackButton />
      </div>
      <h1 className="flex items-center justify-center">Add New Post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default page;
