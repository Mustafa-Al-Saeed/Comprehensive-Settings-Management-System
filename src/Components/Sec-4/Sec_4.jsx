import { DataDays } from "./Data/DataDays";
import { DataOurTeam } from "./Data/DataOurTeam";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { AiOutlineMinus } from "react-icons/ai";

const Sec_4 = () => {
  const [day, setday] = useState(DataDays);
  const [team, setTeam] = useState(DataOurTeam);

  const clear = (index) => {
    const finish = DataDays.map((act) => {
      act.active = false;
      return act;
    });

    finish[index].active = true;
    setday(finish);
  };

  const clearTeam = (index) => {
    team.map((oneteam) => {
      return oneteam.map((act) => {
        act.active = false;
      });
    });

    team[index].map((ele) => {
      ele.active = true;
    });
  };

  return (
    <div>
      <h1 className=" py-10 md:py-20 font-bold px-2 text-4xl md:text-5xl text-center">
        Conference Schedule
      </h1>
      <div className="container px-4 mx-auto flex flex-col md:grid md:grid-cols-12">
        <div className="col-span-2">
          {day.map((oneDay, index) => {
            return (
              <div
                onClick={() => {
                  clear(index);
                  clearTeam(index);
                }}
                className={` before:duration-500 relative bg-customBlue text-white px-3 py-5 text-center mb-4 before:absolute before:right-[-24px] before:top-[calc(50%-12px)] before:border before:border-solid before:opacity-0 before:border-l-customBlue  before:border-r-transparent before:border-t-transparent before:border-b-transparent before:border-[12px] md:w-[100%] w-[95%] mx-auto ${
                  oneDay.active ? "before:opacity-100" : null
                }`}
                key={index}
              >
                <div className=" border-b-2 white-black border-solid mb-2 text-xl py-4">
                  {oneDay.day}
                </div>
                <div className=" text-xl mb-4">{oneDay.date}</div>
              </div>
            );
          })}
        </div>
        <div className=" relative col-span-10   ">
          {team.map((oneteam, index) => {
            return (
              <div key={index} className=" md:ml-6  ">
                {oneteam.map((loopOneTeam, index) => {
                  return (
                    <div
                      className={` flex flex-col md:flex-row absolute transition-all top-[-100%]  left-0  pb-7 mb-7 border-b-2 opacity-0 duration-[1s] ${
                        loopOneTeam.active ? "opacity-100 relative top-0" : null
                      }`}
                      key={index}
                    >
                      <div className=" w-full overflow-hidden max-h-[450px]  mb-5 md:w-[180px] bg-fixed ">
                        <img
                          className=""
                          src={loopOneTeam.image}
                          alt={loopOneTeam.title}
                        />
                      </div>

                      <div className=" max-w-[73%] ml-6 ">
                        <h3 className=" text-xl font-bold text-customBlue mb-4">
                          {loopOneTeam.title}
                        </h3>
                        <p className=" text-custom_M_Gray mb-4">
                          {loopOneTeam.phara_1}
                        </p>
                        <div className=" text-customBlue font-bold mb-4">
                          {loopOneTeam.time}
                        </div>
                        <div className=" flex text-lg mb-4">
                          <SlCalender className="mr-2 mt-1  " />
                          {loopOneTeam.date}
                        </div>
                        <p className="text-custom_M_Gray mb-4">
                          {loopOneTeam.phara_2}
                        </p>
                        <span className="flex flex-wrap items-center text-customBlue font-bold text-lg">
                          <AiOutlineMinus className="mr-2 text-custom_M_Gray  " />
                          {loopOneTeam.name}
                          <span className="ml-2 text-custom_M_Gray">
                            {loopOneTeam.jop}
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sec_4;
