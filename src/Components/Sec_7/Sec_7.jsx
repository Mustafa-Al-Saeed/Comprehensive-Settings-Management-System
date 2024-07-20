import { useState } from "react";
import { Data_Price } from "./Data/Data_Price";

const Sec_7 = () => {
  const [price, setPrice] = useState(Data_Price);
  return (
    <div className=" py-10 md:py-20">
      <h1 className="py-10 md:py-20 font-bold px-2 text-4xl md:text-5xl text-center ">
        Conference Ticket Pricing
      </h1>

      <div className=" container mx-auto grid grid-cols-12 gap-4 ">
        {price.map((part, index) => {
          return (
            <div
              key={index}
              className=" text-center mx-5 col-span-12 md:col-span-4 p-7 odd:bg-white odd:text-custom_M_Gray  odd:border-[1px] odd:border-custom_ML_Gray     even:bg-customBlue even:text-custum_L_White "
            >
              <div className=" font-bold text-lg py-2 ">{part.title}</div>
              <div
                className={` w-fit mx-auto relative text-3xl py-2 font-bold ${
                  index % 2 ? "text-white" : " text-customBlue"
                }`}
              >
                {part.price}
                <span className=" text-lg  absolute top-0 left-[-15px]">$</span>
              </div>
              <div className=" text-sm py-2">{part.Duration}</div>
              <div
                className={`font-bold text-xs py-2 ${
                  index % 2 ? "text-white" : " text-customBlue"
                }`}
              >
                {part.features}
              </div>
              <div className="py-2">{part.feat_1}</div>
              <div className="py-2">{part.feat_2}</div>
              <div className="py-2">{part.feat_3}</div>
              <div className="py-2">{part.feat_4}</div>
              <div className="py-2">{part.feat_5}</div>
              <div className="py-2">{part.feat_6}</div>
              <div className="py-2">{part.feat_7}</div>
              <button
                className={`py-2 ${
                  index % 2
                    ? "text-customBlue bg-white w-full py-3 "
                    : " text-white bg-customBlue w-full py-3"
                }`}
              >
                {part.buy}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sec_7;
