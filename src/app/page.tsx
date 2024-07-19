import TypeWriterText from "@/components/TypeWriterText";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession()
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-5">
      <h1 className="font-bold text-2xl flex gap-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hello, <TypeWriterText/></h1>
      <h3 className="text-xl text-slate-500">Developed By <Link className="italic" href={'https://instagram.com/fjribptra'}>@fjribptra</Link></h3>
      <Link href={"/products"} className="bg-blue-500 text-white px-10 py-3 w-fit rounded-md">See all Products</Link>
    </div>
  );
}
