import Sec_1_Details from "./Sec_1_Details";
import Sec_1_Login from "./Sec_1_Login";

const Sec_1 = () => {
  return (
    <>
      <div
        id="secOne"
        className="bg-fixed bg-center bg-cover bg-[url('https://preview.colorlib.com/theme/plataforma/images/bg_1.jpg.webp')]  "
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center min-h-screen   py-3">
          <Sec_1_Details />
          <Sec_1_Login />
        </div>
      </div>
    </>
  );
};

export default Sec_1;
