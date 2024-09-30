"use client";
import BackButton from "@/components/backButton";
import FormPost from "@/components/formPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const page = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };
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
