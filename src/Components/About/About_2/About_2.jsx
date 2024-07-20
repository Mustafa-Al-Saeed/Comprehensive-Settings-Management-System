import { Data_About_2 } from "./Data_About_2";

const About_2 = () => {
  return (
    <div className=" pt-20 container mx-auto grid grid-cols-12 text-center gap-3 text-white ">
      {Data_About_2.map((part, index) => {
        return (
          <div
            key={index}
            className=" col-span-12 md:col-span-3 bg-customBlue mx-4 py-7 "
          >
            <part.icon className=" text-5xl mx-auto mb-5" />
            <div className=" text-3xl mb-5">{part.number}</div>
            <div className="text-custom_ML_Gray ">{part.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default About_2;
