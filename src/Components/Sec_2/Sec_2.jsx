import { useState } from "react";
import { data } from "./data";

const Sec_2 = () => {
  const [info, setInfo] = useState(data);
  return (
    <div className="bg-customBlue py-10  md:py-28 ">
      <div className="container mx-auto px-4  grid md:grid-cols-4 gap-4 text-white">
        {info.map((e, index) => {
          return (
            <div key={index} className="py-6">
              <e.icon className="text-7xl " />
              <h3 className=" text-lg font-bold py-4">{e.title}</h3>
              <p className=" leading-7  ">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sec_2;
