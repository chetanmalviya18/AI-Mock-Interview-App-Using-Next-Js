"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const path = usePathname();

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/prepview.png"} width={100} height={50} alt="logo" />

      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-darkBlue hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-darkBlue font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-darkBlue hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" && "text-darkBlue font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-darkBlue hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/upgrade" && "text-darkBlue font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-darkBlue hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/how" && "text-darkBlue font-bold"
          }`}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
