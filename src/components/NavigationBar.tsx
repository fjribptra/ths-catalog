import { getServerSession } from "next-auth";
import UserDropdownIdentity from "./UserDropdownIdentity";
import LoginButton from "./LoginButton";
import Link from "next/link";

export default async function NavigationBar() {
  const session = await getServerSession();
  console.log(session);
  return (
    <nav className="bg-blue-600 text-white py-5 px-7 fixed top-0 right-0 left-0 flex justify-between z-50">
      <Link href={"/"} className="font-bold">
        Fake Commerce
      </Link>
      <div className="flex gap-5 items-center">
        <Link href={"/products"} className="hidden">Products</Link>
        {session ? <UserDropdownIdentity session={session} /> : <LoginButton />}
      </div>
    </nav>
  );
}
