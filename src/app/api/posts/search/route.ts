
import { db } from "@/lib/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request){
  console.log(req.url);
  const {searchParams} = new URL(req.url);
  const search = searchParams.get('search');
  if (!search) {
    return NextResponse.json({ error: 'No search term provided' }, { status: 400 });
  }
  try{
    const posts = await db.post.findMany({
      where: {
        title: {
          contains: search,
          mode: 'insensitive'
        },
      },
    });
    return NextResponse.json(posts, {status: 200});
  }
  catch (error){
    return NextResponse.json({message: "Error in Fetching"}, {status: 500});
  }
}

