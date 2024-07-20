import { Link } from "react-router-dom";
import { headerData } from "../Header/HeaderData";
import { useState } from "react";

const Schedule_1 = () => {
  const [links, setLinks] = useState(headerData);

  const clear = (index) => {
    const finish = headerData.map((act) => {
      act.active = false;
      return act;
    });

    finish[index].active = true;
    setLinks(finish);
  };

  return (
    <div>
      <div className="bg-fixed bg-center bg-cover bg-[url('https://preview.colorlib.com/theme/plataforma/images/bg_2.jpg.webp')]  ">
        <div className=" relative min-h-screen container mx-auto">
          <div className=" absolute left-[5%] bottom-[5%] text-white bg-opacity-[0.5] rounded-xl  bg-black    py-3 px-6">
            <h3 className=" mb-3 text-2xl">Schedule</h3>
            <div>
              <Link
                to="/"
                className=" text-xl mr-1 hover:text-customBlue duration-300"
                onClick={(ele) => {
                  clear(0);
                }}
              >
                Home &gt;
              </Link>
              <span className="text-xl">Schedule &gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule_1;
