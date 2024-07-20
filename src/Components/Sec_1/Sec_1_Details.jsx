import { useEffect, useState } from "react";
import { BsCalendar3 } from "react-icons/bs";

const Sec_1_Details = () => {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countdownDate = new Date("July 31, 2023 23:59:59").getTime();
  
  useEffect(() => {
    const magdy = function () {
    
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;
  

      if (timeRemaining < 0 ) {
        console.log(timeRemaining , "dddddddd")
        
        clearInterval(countdownTimer)
  
      }else{
        setDay(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
      }
    }

    const countdownTimer = setInterval( magdy, 1000);
  }, [])
  

  // clearInterval(countdownTimer)

  // const countdownDate = new Date("July 31, 2023 23:59:59").getTime();
  
  // const countdownTimer = setInterval(function () {
    
  //   const now = new Date().getTime();
  //   const timeRemaining = countdownDate - now;

  //   setDay(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  //   setHours(
  //     Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //   );
  //   setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
  //   setSeconds(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    
  //   if (timeRemaining < 0 ) {
      
  //     // clearInterval(countdownTimer)
  //     // // setDay(0)
  //     // // setHours(0)
  //     // // setMinutes(0)
  //     // // setSeconds(0)

  //   }
  // }, 1000);

  // clearInterval(countdownTimer)

  return (
    <div className="w-full md:w-[49%] px-4 flex justify-center my-8 ">
      <div>
        <div className=" text-custom_M_Gray text-2xl mb-2">
          Business Leaders
        </div>
        <h1 className="text-customBlue font-bold text-5xl ">CONFERENCE 2019</h1>
        <div className="address flex items-center text-custom_M_Gray text-xl my-5">
          <BsCalendar3 className="mr-2" />
          20-23 November 2019 - Los Angeles CA
        </div>
        <div className="flex">
          <div className="day border-r-[1px]  border-custom_L_Gray pr-4 flex flex-col text-center">
            <span className=" text-3xl text-customBlue">{day}</span>
            <span className="text-xs   ">DAYS</span>
          </div>
          <div className="hours border-r-[1px]  border-custom_L_Gray px-4 flex flex-col text-center">
            <span className=" text-3xl text-customBlue">{hours}</span>
            <span className="text-xs   ">HOURS</span>
          </div>
          <div className="minutes border-r-[1px]  border-custom_L_Gray px-4 flex flex-col text-center">
            <span className=" text-3xl text-customBlue">{minutes}</span>
            <span className="text-xs   ">MINUTES</span>
          </div>
          <div className="seconds border-r-[1px]  border-custom_L_Gray px-4 flex flex-col text-center">
            <span className=" text-3xl text-customBlue">{seconds}</span>
            <span className="text-xs   ">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec_1_Details;
