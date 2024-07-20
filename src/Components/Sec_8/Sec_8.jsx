import { Data_8 } from "./Data/Data_8";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { useState } from "react";

const Sec_8 = () => {
  const [partOne, setPartOne] = useState(Data_8[0]);

  return (
    <div className="container mx-auto">
      <h1 className="py-10 md:py-20 font-bold px-2 text-4xl md:text-5xl text-center">
        Conference Speakers
      </h1>

      <div className="grid grid-cols-12 gap-8   md:mx-8">
        <div
          className={`text-customBlue  relative hidden md:block col-span-6 bg-top bg-cover `}
          style={{ backgroundImage: `url('${partOne.image}')` }}
        >
          <div className=" p-2 absolute top-[25%] right-0 lg:right-[5%] ma">
            <h2 className="lg:text-xl md:text-lg font-bold ">{partOne.name}</h2>
            <div className=" text-custom_M_Gray text-sm ">
              {partOne.jopTitle}
            </div>
            <ul className="flex  mt-3">
              <li>
                <a href={partOne.twitterLink}>
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="mx-2 ">
                <a href={partOne.facebookLink}>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href={partOne.instagramLink}>
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-10 md:col-span-6 flex flex-col px-5">
          {Data_8.map((part, index) => {
            if (index > 0) {
              return (
                <div className="flex mb-5  " key={index}>
                  <div
                    className={`mr-6  overflow-hidden bg-top bg-cover w-[180px] `}
                    style={{ backgroundImage: `url('${part.image}')` }}
                  ></div>
                  <div>
                    <h2 className=" text-xl text-customBlue font-bold mb-2 ">
                      {part.name}
                    </h2>
                    <div className=" text-custom_M_Gray mb-2">
                      {part.jopTitle}
                    </div>
                    <p className="text-custom_M_Gray mb-5">
                      {part.briefDefinition}
                    </p>
                    <ul className="flex  mt-3 text-customBlue">
                      <li>
                        <a href={part.twitterLink}>
                          <AiOutlineTwitter />
                        </a>
                      </li>
                      <li className="mx-2">
                        <a href={part.facebookLink}>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href={part.instagramLink}>
                          <AiOutlineInstagram />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Sec_8;
