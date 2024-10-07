import BackButton from "@/components/backButton";
import ButtonAction from "@/components/buttonAction";
import { db } from "@/lib/db";

interface PageProps{
  params: {
    id: string
  }
}

async function getPosts(id: string){
  const respone = await db.post.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      content: true,
      title: true,
      tag: true
    }
  });
  return respone;
};

const page = async ({params}: PageProps) => {
  const posts = await getPosts(params.id);
  return (
    <div className="w-full h-full bg-black pt-36 -full gap-10 p-10 font-medium text-2xl flex flex-col">
      <BackButton />
      <div className="">
        <h1 className="text-white">{posts?.title}</h1>
      </div>
      <ButtonAction id={params.id}/>
      <span className="badge badge-primary p-4">{posts?.tag.name}</span>
      <p>{posts?.content}</p>
    </div>
  );
};

export default page;
