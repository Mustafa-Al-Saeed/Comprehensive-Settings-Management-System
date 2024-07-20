import { AiFillHeart } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Sec_11 = () => {
  return (
    <div className="py-20 bg-black text-custom_M_Gray">
      <div className=" container mx-auto ">
        <div className="flex flex-wrap pb-10">
          <div className="w-full  md:w-1/4 px-2 ">
            <h1 className="mb-10 font-bold text-xl text-custum_L_White  ">
              Plataforma.
            </h1>
            <p className=" max-w-[90%] mb-10">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="flex text-custum_L_White text-2xl pb-10">
              <li>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="mx-2">
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full  md:w-1/4 px-2 ">
            <h1 className="mb-10 font-bold text-xl text-custum_L_White  ">
              Useful Links
            </h1>
            <ul className="pb-10">
              <li className="py-2">
                <a href="#">Speakers</a>
              </li>
              <li className="py-2">
                <a href="#">Speakers</a>
              </li>
              <li className="py-2">
                <a href="#">Events</a>
              </li>
              <li className="py-2">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="w-full  md:w-1/4 px-2 ">
            <h1 className="mb-10 font-bold text-xl text-custum_L_White  ">
              Privacy
            </h1>
            <ul className="pb-10">
              <li className="py-2">
                <a href="#">Career</a>
              </li>
              <li className="py-2">
                <a href="#">About Us</a>
              </li>
              <li className="py-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="py-2">
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className="w-full  md:w-1/4 px-2 ">
            <h1 className="mb-10 font-bold text-xl text-custum_L_White  ">
              Have a Questions?
            </h1>
            <div className=" py-2 items-center flex flex-wrap">
              <FaLocationDot className=" text-xl w-[15%]  " />
              <p className="w-[85%] pl-2">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>

            <div className="flex flex-wrap py-2 items-center">
              <BsFillTelephoneFill className="text-xl w-[15%]" />
              <span className="w-[85%] pl-2">+2 392 3929 210</span>
            </div>

            <div className="flex flex-wrap py-2 items-center">
              <GrMail className="text-xl w-[15%]" />
              <span className="w-[85%] pl-2">info@yourdomain.com</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          Copyright ©2023 All rights reserved | This template is made with
          <AiFillHeart className=" inline-block mx-1" /> by Colorlib
        </div>
      </div>
    </div>
  );
};

export default Sec_11;
