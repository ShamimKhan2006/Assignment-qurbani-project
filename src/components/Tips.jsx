import React from "react";
import tips from "../../public/tips.json";
import { Chip } from "@heroui/react";
const TipsPage = () => {
  return (
  <div>
      <h1 className="mx-auto text-center text-2xl text-white  ">Qurbani Tips and Tricks</h1>
      <div className="container mx-auto  grid grid-cols-4 gap-2 my-5 bg-[#230D41FF] animate__animated animate__bounce animate__delay-2s">
        
      {tips.map((tip) => (
        <div key={tip.id}>
           
          <div className="card  bg-[#230D41FF] text-white border border-black p-7 m-4 shadow-sm">
            <div className="card-body f">
              <h2 className="card-title text-[#ce20b9]">{tip.title}</h2>
              <p>
                {tip.description}
              </p>
              <Chip color="success">{tip.badge}</Chip>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TipsPage;
