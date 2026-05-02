 'use client'
import React from 'react';
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation';
const Logout = () => {

    const router=useRouter()
     authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
});
    return (
        <div>
       

        </div>
    );
}; 

export default Logout