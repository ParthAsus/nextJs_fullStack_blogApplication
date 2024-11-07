"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
  id: string;
}

const ButtonAction = ({ id }: ButtonActionProps) => {
  const router = useRouter();
  const { mutate: deletePost } = useMutation({
    mutationFn: () => {
      console.log(id);
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn mr-2">
        Edit
      </Link>
      <button className="btn btn-error" onClick={() => deletePost()}>
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
