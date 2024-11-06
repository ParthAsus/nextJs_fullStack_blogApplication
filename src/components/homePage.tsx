'use client'
import PostCard from "@/components/postCard";
import { Post } from "@prisma/client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const [posts, setPosts] = useState<Post []>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const endpoint = searchTerm
        ? `/api/posts/search?search=${encodeURIComponent(searchTerm)}`
        : `/api/posts`;

      try {
        const { data } = await axios.get(endpoint);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [searchTerm]);
  
  return (
    <>
    <main className="pt-36 grid md:grid-cols-3 lg:grid-cols-4 justify-center  w-full gap-10 p-10 bg-white h-[100%]">
      {posts?.map(post => (
        <PostCard key={post.id} post={post}/>
      ))}
    </main>
    </>
  );
}
