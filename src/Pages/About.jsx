import About_1 from "../Components/About/About_1";
import About_2 from "../Components/About/About_2/About_2";
import Header from "../Components/Header/Header";
import Sec_11 from "../Components/Sec_11/Sec_11";
import Sec_3 from "../Components/Sec_3/Sec_3";
import Sec_5 from "../Components/Sec-5/Sec_5";
import Sec_6 from "../Components/Sec-6/Sec_6";
import Sec_10 from "../Components/Sec-10/Sec_10";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <About_1 />
      <Sec_3 />
      <About_2 />
      <Sec_5 />
      <Sec_6 />
      <Sec_10 />
      <Sec_11 />
      <Outlet />
    </div>
  );
};

export default About;
