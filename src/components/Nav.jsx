"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@heroui/react";

const Nav = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return null;

  // 🔥 reusable links
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/all-animals">All Animals</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#230D41FF] text-white border border-black shadow-sm px-4">
      {/* 🔹 Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          {/* 📱 Mobile menu */}
          <ul className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        <Image
          src="/assets/logo.jpg"
          width={80}
          height={80}
          alt="logo"
          className=" pl-5 rounded-full object-cover"
        ></Image>
      </div>

      {/* 🔹 Center (desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* 🔹 Right */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* 👤 Avatar */}
            <div className="flex items-center gap-2">
              <Image
                src={user.image || Avatar}
                alt="avatar"
                className="rounded-full border"
                width={40}
                height={40}
              />
              <span className="hidden lg:block">{user.name}</span>
            </div>

            {/* 🚪 Logout */}
            <Link href="/logout">
              <Button variant="danger" className="mr-4">Logout</Button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <Button variant="primary" className="mr-4">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
