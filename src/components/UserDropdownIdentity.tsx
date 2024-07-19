"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Dropdown() {
  return (
    <div className="absolute py-3 mt-3 px-2 bg-slate-200 text-black rounded-md flex flex-col gap-4 items-start">
      <Link href="/dashboard">Dashboard</Link>
      <button id="logoutButton" onClick={async () => await signOut()}>Logout</button>
    </div>
  );
}

export default function UserDropdownIdentity({ session }: { session: any }) {
  const [show, setShow] = useState<boolean>(false);

  function handleShowDropdown(e: React.FormEvent) {
    setShow(true)
  }

  if (show) {
    document.body.addEventListener('click', function(e) {
      const target = e.target as HTMLElement
      if(target.id != "logoutButton") {
        setShow(false)
      }
    })
  }

  return (
    <div className="relative">
      <button onClick={(e) => handleShowDropdown(e)} className="flex gap-2 justify-center items-center">
        <Image className="rounded-full" src={session?.user?.image} alt='' width={30} height={30} />
        <p>{session?.user?.name}</p>
      </button>
      {show && <Dropdown />}
    </div>
  );
}
