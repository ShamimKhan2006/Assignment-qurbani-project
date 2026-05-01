import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='m-45 flex flex-col'>
            <h1 className='font-bold text-6xl  text-center text-white'>This page is not found</h1>
           <Button className="mx-auto mt-5"> <Link href={"/"}>Back to Home</Link></Button>
        </div>
    );
};

export default NotFoundPage;