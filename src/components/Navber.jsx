 'use client'
import React from 'react';
import Link from 'next/link';


import { Button } from '@heroui/react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
const Navber = () => {
const { data: session } = authClient.useSession();
const user = session?.user;
    return (
         <div>
        <div className="navbar bg-[#230D41FF] shadow-sm border border-black text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={"/"}>Home</Link></li>
        <li>
         <Link href={"/all-animals"}>All animals</Link>
         
        </li>
        <li><a>Item</a></li>
      </ul>
    </div>
     <Image src='/assets/logo.jpg' width={80} height={80} alt='logo' className=' pl-5 rounded-full object-cover'></Image>
  </div>
  <div className="navbar-center hidden lg:flex cursor-pointer ">
    <ul className="flex gap-4 mr-40">
       <li><Link href={"/"} className='hover: scale-90
   '>Home</Link></li>
      <li>
        
          <Link href={"/all-animals"}>All animals</Link>
        
    
      </li>
      <li><a>Profile</a></li>
    </ul>
  </div>
 <div className='flex ml-40 items-center gap-4'>
       {user?(<div className='flex flex-col'>
     <div className=''>{user.name}</div>
   
    <Link href={"/logout"}> <Button variant='danger'>Logout</Button></Link>
     </div>):
  ( <div className='ml-110'>
      <Link href={"/login"}> <Button variant='primary'>Login</Button></Link>
   </div>

   )}
   </div>
</div>

      </div>
    );
};

export default Navber;