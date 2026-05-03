import React from "react";
import animalisData from "../../../../public/data.json";
import Image from "next/image";
import {
  Chip,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import BookingForm from "@/components/BookingForm";
const AnimalsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = animalisData.find((animal) => animal.id === Number(id));
  const {
    details,
    category,
    image,
    description,
    location,
    age,
    weight,
    price,
    breed,
    name,
    type,
  } = animals;

  return (
    <div>
      <h1 className="text-center mx-auto text-4xl font-bold text-white my-6 ">
        Animals details
      </h1>
     <div className="grid grid-cols-2 gap-8">
       <div >
        <div
          className="card  shadow-sm max-w-10/12 my-15 mx-auto border border-black text-white transition-all duration-300
  hover:shadow-purple-400/50 scale-105"
        >
          <figure className="">
            <Image
              src={animals.image}
              width={500}
              height={200}
              alt="details"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-purple-500">{name}</h2>
            <p>{description}</p>
            <div className="flex justify-between items-center gap-3">
              <p className="font-bold text-purple-200">{type}</p>
              <p>Age:{age}</p>
              <Chip color="danger">{price}BDT</Chip>
            </div>
            <div className="flex gap-2">
              <Chip color="success" variant="primary">
                {category}
              </Chip>

              <Chip color="accent">Location:{location}</Chip>
              <p>{breed}</p>
              <p>Weight:{weight}</p>
            </div>
            <div className="card-actions flex flex-col text-left mr-30 text-[#24abbf]">
              {animals.details.map((item, ind) => (
                <li key={ind}>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookingForm></BookingForm>
     </div>
    </div>
  );
};

export default AnimalsDetailsPage;
