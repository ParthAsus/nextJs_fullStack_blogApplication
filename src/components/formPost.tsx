"use client";
import { FormInputPost } from "@/types";
import { Tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValue?: FormInputPost;
  isLoading?: boolean
  isLoadingSubmit?: boolean
}

const FormPost = ({ submit, isEditing, initialValue, isLoading, isLoadingSubmit }: FormPostProps) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const respone = await axios.get("/api/tags");
      return respone.data;
    },
  });

  if(isLoading){
    return (
      <div className="text-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    )
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Post Title"
        className="input input-bordered w-full max-w-lg text-blue-500"
      />

      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg text-white"
        placeholder="Post Content"
      ></textarea>

      {isLoadingTags ? (
        <span className="loading loading-bars loading-md"></span>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg text-white"
          defaultValue=""
        >
          <option disabled value="">
            Select Tags
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button
        type="submit"
        className="btn bg-blue-500 text-white w-full max-w-lg"
      >
        {isLoadingSubmit && <span className="loading loading-infinity loading-lg"></span>}
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
