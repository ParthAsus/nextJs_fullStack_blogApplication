"use client"
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";


const BackButton = () => {
  const router = useRouter();
  console.log(router);
  return (
    <button className="btn" onClick={() => router.back()}>
      <Undo2 />
      BACK
    </button>
  )
}

export default BackButton;
