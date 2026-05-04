"use client";
















import { authClient } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@heroui/react";

import { usePathname } from "next/navigation";

const Nav = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathName = usePathname();
  if (isPending) {
    return (
      <h1 className="text-center flex justify-center items-center mx-auto mt-2">
        <Spinner></Spinner>
      </h1>
    );
  }

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathName === "/" ? "text-[#ce20b9] border-b border-b-[#ce20b9]" : ""
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/all-animals"
          className={
            pathName === "/all-animals"
              ? "text-[#ce20b9] border-b border-b-[#ce20b9]"
              : ""
          }
        >
          All Animals
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={
            pathName === "/profile"
              ? "text-[#ce20b9] border-b   border-b-[#ce20b9]"
              : ""
          }
        >
          Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#230D41FF] text-white border border-black shadow-sm px-4 sticky z-50 top-0">
      {/* 🔹 Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

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

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user.image}
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <span className="hidden lg:block">{user.name}</span>
            </div>

            <Link href="/logout">
              <Button variant="danger" className="mr-4">
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <Button variant="primary" className="mr-4">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
