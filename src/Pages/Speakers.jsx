import Speakers_1 from "../Components/Speakers/Speakers_1";
import Header from "../Components/Header/Header";
import Sec_8 from "../Components/Sec_8/Sec_8";
import Sec_11 from "../Components/Sec_11/Sec_11";
import Sec_10 from "../Components/Sec-10/Sec_10";

const Speakers = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Speakers_1 />
      <Sec_8 />
      <Sec_10 />
      <Sec_11 />
    </div>
  );
};

export default Speakers;
