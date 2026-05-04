"use client"
import { useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData=useSession()
    const user=userData.data?.data
    console.log(user)

    return (
        <div className='w-8/12 mx-auto'>
             <Avatar className='h-40'>
                            <Avatar.Image
                              alt="John Doe"
                              src={user?.image}
                            />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                          </Avatar>
                          <span className="hidden lg:block">{user?.name}</span>
                        </div>
            

    );
}
export default ProfilePage;