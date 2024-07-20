import { Data_9 } from "./Data_9/Data_9";
import { Link } from "react-router-dom";
import { BiSolidCommentDetail } from "react-icons/bi";
import { headerData } from "../Header/HeaderData";
import { useState } from "react";

const Sec_9 = () => {
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
    <div className="container mx-auto">
      <h1 className="py-10 md:py-20 font-bold px-2 text-4xl md:text-5xl text-center">
        Recent Blog
      </h1>
      <div className=" grid grid-cols-12 gap-5 mx-3">
        {Data_9.map((blog, index) => {
          if (index < 3) {
            return (
              <div key={index} className=" col-span-12 md:col-span-4">
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
    </div>
  );
};

export default Sec_9;
