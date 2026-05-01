import Image from "next/image";
import React from "react";

const AnimalsCard = ({ animal }) => {
  console.log("animal data", animal);
  const {
     type,
     price,
     name,
     location,
    image,
    description,
    category,
     breed,
     age,
  } = animal;
  return (
    <div className="my-10 ">
     
       <div className="card bg-[#230D41FF]shadow-2xs text-white border border-black mx-4  shadow-md shadow-black/20
  transition-all duration-300
  hover:shadow-purple-400/50 scale-105
">
  <figure>
    <Image
      src={image}
      width={300}
      height={300}
      className="object-fill rounded-lg"
      alt="all animals photo" />
  </figure>
  <div className="card-body text-left p-2 ">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{type}</div>
    </h2>
     <div className="flex gap-4">
         <div>{description}</div>
        <div>age:{age}</div>
    
     </div>
    <div className="flex gap-4">
         <p>{price} BDT</p>
    {location}
    </div>
    <div className="card-actions flex gap-4">
      <div className="badge badge-info">{category}</div>
      <div className="badge badge-dash">{breed}</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AnimalsCard;