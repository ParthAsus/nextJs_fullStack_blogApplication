"use client"
import FormPost from "@/components/formPost"
import { FormInputPost } from "@/types"
import { SubmitHandler } from "react-hook-form"

const EditPage = () => {
    const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
      console.log(data);
    }
    return (
      <div className="w-full flex flex-col justify-center  h-full gap-10 p-10 bg-white text-black ">
        <h1 className="flex items-center justify-center">Edit Post</h1>
        <FormPost submit={handleEditPost} isEditing={true}/>
      </div>
    )
}

export default EditPage
