// 'use client'
import Navbar from "@/components/navbar";
import PostCard from "@/components/postCard";
import { db } from "@/lib/db";
// import { useEffect, useState } from "react";

async function getPosts(){
  const respone = db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  return respone;
}

// interface HomePageProps{
//   search: string
// }
// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   tag: {
//       id: string;
//       name: string;
//   };
// };
export default async function HomePage() {
  const posts = await getPosts();

  
  return (
    <>
    {/* <Navbar setSearch={setSearch}/> */}
    <main className="pt-36 grid md:grid-cols-3 lg:grid-cols-4 justify-center  w-full gap-10 p-10 bg-white h-[100%]">
      {posts?.map(post => (
        <PostCard key={post.id} post={post}/>
      ))}
    </main>
    </>
  );
}
