import AnimalsCard from '@/components/AnimalsCard';
import React from 'react';
import animals from '../../../public/data.json'

const AllAnimalsPage = async() => {
    // const res=await fetch("http://localhost:3000/data.json", {next: { revalidate: 10 }})
    // const animals=await res.json()
    // console.log(animals)
  
    return (
          <div>
             <h1 className='text-center text-white my-10 font-bold text-3xl'>This is Animas details</h1>
       <div className='container mx-auto grid grid-cols-1 m-4 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
              
             
            {
             animals.map(animal => <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>) 
                
            }
            
        </div>
       
          </div>
    );
};

export default AllAnimalsPage;