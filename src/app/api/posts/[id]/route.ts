import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ParamsProps {
  params: {
    id: string
  }
}

export async function DELETE(req: Request, {params}: ParamsProps){
  const url = new URL(req.url);
  // console.log(params);
  const id = url.pathname.split("/").pop();

  // console.log(id);
  try{
    await db.post.delete({
      where: {
        id: id
      }
    })
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });

  }
  catch (error){
    console.log(error);
    // console.log("mfme", params.id);
    return NextResponse.json({message: "Could not delete Post"}, {status: 500});
  }
}

// export async function PATCH(req: Request, {params}: ParamsProps){
//   try{
//     const body = await req.json();
//     await db.post.update({
//       where: {
//         id: params.id
//       },
//       data: {
//         title: body.title,
//         content: body.content,
//         tagId: body.tagId,
//       }
//     })
//     return NextResponse.json({message: 'Update Successfully'},  {status: 200})

//   }
//   catch (error){
//     return NextResponse.json({message: "Could not Update Post"}, {status: 500});
//   }
// }