import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data_6 } from "./Data/Data_6";

const Sec_6 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel className=" container mx-auto pt-20" responsive={responsive}>
      {Data_6.map((card, index) => {
        return (

          <div
            key={index}
            className=" flex flex-col items-center text-center px-3 "
          >
            <div
              className="w-28 h-28 bg-cover relative before:absolute before:-left-6 before:-z-10  before:top-[-16px] before:w-20  before:h-36  before:bg-customBlue"
              style={{ backgroundImage: `url('${card.image}')` }}
            ></div>

            <p className=" select-none text-custom_D_Gray py-4 max-w-[350px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className=" select-none text-customBlue py-2">Roger Scott</div>

            <div className=" select-none  text-custom_M_Gray py-2">
              UI Designer
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Sec_6;


