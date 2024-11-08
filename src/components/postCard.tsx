'use client'
import { Tag } from "@prisma/client";
import { Slice } from "lucide-react";
import Link from "next/link";

interface PostCardProps{
  post: {
    id: string,
    content: string, 
    title: string
    tag: Tag
  }
}

const PostCard = ({post}: PostCardProps) => {

  const truncatedContent = post.content.split(" ");
  const shouldTruncated = truncatedContent.length > 20;
  return (
    <div className="card bg-base-100 shadow-xl h-52">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>
          {shouldTruncated
          ? truncatedContent.slice(0, 20).join(" ") + "..."
          : post.content
          }
        </p>
        <div className="card-actions justify-end">
          <span className="badge badge-primary">{post.tag?.name}</span>
          <Link href={`/blog/${post.id}`}className="text-blue-500 cursor-pointer">Read More....</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
