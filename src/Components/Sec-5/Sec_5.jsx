import React from "react";
import { data_5 } from "./Data";

const Sec_5 = () => {
  return (
    <div className=" container mx-auto px-6">
      <h1 className=" py-10 md:py-20 font-bold px-2 text-4xl md:text-5xl text-center ">
        Conference Gallery
      </h1>
      <div className="grid grid-cols-12 md:gap-4">
        {data_5.map((e, index) => {
          return (
            <div key={index} className="col-span-12 md:col-span-3">
              <img src={e.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sec_5;
