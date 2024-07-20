import Blogs_1 from "../Components/Blogs/Blogs_1";
import Header from "../Components/Header/Header";
import Sec_11 from "../Components/Sec_11/Sec_11";
import { Data_9 } from "../Components/Sec_9/Data_9/Data_9";
import { Link } from "react-router-dom";
import { headerData } from "../Components/Header/HeaderData";
import { useState } from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Blogs = () => {
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
    <div className="flex flex-col">
      <Header />
      <Blogs_1 />
      <div className="container mx-auto pt-20 grid grid-cols-12 gap-5 ">
        {Data_9.map((blog, index) => {
          if (index < 6) {
            return (
              <div
                key={index}
                className=" col-span-12 md:col-span-4 mb-10 mx-3"
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  onClick={(ele) => {
                    clear(4);
                  }}
                >
                  <img className="mb-7" src={blog.image} alt="" />
                </Link>
                <div className="flex items-center flex-wrap ">
                  <span className=" duration-300 text-custom_M_Gray hover:text-black cursor-pointer ">
                    {blog.date}
                  </span>
                  <span className="mx-2 duration-300 text-custom_M_Gray hover:text-black cursor-pointer ">
                    {blog.admin}
                  </span>
                  <span className="flex flex-wrap items-center duration-300 text-custom_M_Gray hover:text-black cursor-pointer">
                    <BiSolidCommentDetail className="mr-2" />
                    {blog.comment.length}
                  </span>
                </div>
                <Link
                  to={`/blogs/${blog.id}`}
                  className=" hover:text-customBlue duration-300 text-xl my-5 block"
                >
                  {blog.title}
                </Link>
                <p className="text-custom_M_Gray">{blog.desc}</p>
              </div>
            );
          }
        })}
      </div>
      <ul className="flex justify-center pt-10 pb-20 text-customBlue">
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1">
          <a href="#">
            <BsFillCaretLeftFill />
          </a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 text-white bg-customBlue ">
          <a href="#">1</a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 ">
          <a href="#">2</a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 ">
          <a href="#">3</a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 ">
          <a href="#">4</a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 ">
          <a href="#">5</a>
        </li>
        <li className=" border w-10 h-10 flex justify-center items-center rounded-[50%] mx-1 ">
          <a href="#">
            <BsFillCaretRightFill />
          </a>
        </li>
      </ul>
      <Sec_11 />
    </div>
  );
};

export default Blogs;
