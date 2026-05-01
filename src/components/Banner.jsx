import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
         <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 p-6 rounded-2xl   gap-4  bg-[#230D41FF] my-10 text-white shadow-sm border border-black">
        <div className="space-y-3">
          <h1 className="font-bold text-4xl">Eid al-Adha Mubarak</h1>
           <h2 className="font-semibold w-full">A Time for Sacrifice and Faith</h2>
          <p>
            May this blessed Eid bring peace to your heart And happiness to your
            home Let your sacrifices be accepted And your prayers be answered On
            this holy occasion Remember the true meaning of Qurbani Faith,
            devotion, and sincerity May Allah shower His endless blessings upon
            you And guide you on the right path Fill your life with joy and
            success And your days with prosperity Share your happiness with
            others Spread love and kindness everywhere Let this Eid bring people
            closer And strengthen the bond of humanity May your home be filled
            with laughter And your heart with gratitude Wishing you and your
            family a joyful Eid Eid-ul-Adha Kareem 🌙
          </p>
 
            <Chip color="accent" className='mr-4'>Get Start</Chip>
    
          <Chip color="accent">Accent</Chip>
         
        </div>

        <div>
          <Image
            src='/assets/pici.png'
            width={4200}
            height={4200}
            
            alt="banner pic"
            className="rounded-lg shadow-sm"
          />
        </div>
        </div>
        
    );
};

export default Banner;