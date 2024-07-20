import { useEffect, useState } from "react";
import { BiLogoShopify } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "./HeaderData";

const Header = () => {
  const menu = () => {
    let ele = document.getElementsByTagName("ul")[0];
    ele.classList.toggle("top-[72px]");
    ele.classList.toggle("top-[-408px]");
  };

  window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;


    if (scrollPosition > 150 && scrollPosition < windowHeight) {
      header.classList.add("-top-full");
      header.classList.remove("top-0");
      if (scrollPosition > 300 && scrollPosition < windowHeight) {
        header.classList.remove("-top-full");
        header.classList.add("top-0");
      }
    }
  });

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
    <>
      <nav className=" z-50 md:before:w-0  md:before:h-0 md:before:bg-transparent before:bg-black before:z-[-2] before:left-0 before:top-0  before:w-full before:h-full before:absolute relative px-4 backdrop-blur-2xl py-5  bg-black md:bg-transparent shadow duration-500 sticky">
        <div className=" z-20 container mx-auto  md:flex md:items-center md:justify-between ">
          <div className="flex justify-between items-center cursor-pointer">
            <Link
              to="/"
              className="text-2xl text-customBlue font-bold flex items-center"
            >
              <BiLogoShopify className="text-3xl " />
              LOGO
            </Link>

            <span
              onClick={() => {
                menu();
              }}
              id="change"
              reaction="show"
              className="flex text-2xl font-bold items-center  md:hidden cursor-pointer text-custom_D_Gray"
            >
              <TfiMenuAlt id="iconMenu" className="text-2xl block mx-2 " />
              MENU
            </span>
          </div>

          <ul className="text-white md:text-black md:flex md:items-center z-[-3] md:z-auto md:static absolute bg-black md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  transition-all ease-in duration-300 top-[-408px]  ">
            {links.map((link, index) => {
              return (
                <li key={index} className="mx-2 md:my-0 my-4">
                  <NavLink
                    to={link.href}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-custom_M_Gray w-full block "
                        : "w-full block hover:text-customBlue duration-300"
                    }
                  >
                    {link.content}
                  </NavLink>
                </li>
              );
            })}

            <button className="text-white bg-customBlueLight  duration-500 px-4 py-2 mx-2 hover:bg-customBlue rounded w-[calc(100%-48px)]">
              Get Started
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
