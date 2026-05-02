import React from "react";
import breeds from "../../public/breed.json";
const Breed = () => {
  return (
    <div>
      <h1 className="mx-auto text-center text-2xl text-white">
        Top Breeds
      </h1>
      <div className="mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-5 bg-[#230D41FF]">
        {breeds.map((breed) => (
          <div key={breed.id}>
            <div className="card  bg-[#230D41FF] text-white border border-black p-7 m-4 shadow-sm">
              <div className="card-body f">
                <h2 className="card-title">{breed.name}</h2>
                <div>
                  <div className="badge badge-outline badge-info">
                    {breed.origin}
                  </div>

                  <div className="text-green-400 mt-4">{breed.price_range}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breed;
