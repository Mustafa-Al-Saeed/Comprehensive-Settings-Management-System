import Header from "../Components/Header/Header";
import Sec_11 from "../Components/Sec_11/Sec_11";
import Sec_10 from "../Components/Sec-10/Sec_10";
import Sec_4 from "../Components/Sec-4/Sec_4";
import Schedule_1 from "../Components/Schedule/Schedule_1";

const Schedule = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Schedule_1 />
      <Sec_4 />
      <Sec_10 />
      <Sec_11 />
    </div>
  );
};

export default Schedule;
