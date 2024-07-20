import Sec_11 from "../../Sec_11/Sec_11";
import { Link } from "react-router-dom";
import { headerData } from "../../Header/HeaderData";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import { Data_9 } from "../../Sec_9/Data_9/Data_9";
import { BiSolidCommentDetail } from "react-icons/bi";
import NameInput from "./CustomInputs/Custom_Input/NameInput";
import WebsiteInput from "./CustomInputs/Custom_Input/websiteInput";
import CustomEmail from "./CustomInputs/Custom_Input/CustomEmail";
import TextArea from "./CustomInputs/Custom_Input/TextArea";
import { Formik, Form } from "formik";
import { advancedSchema } from "../../../schemas/schemasBlog";

const Blog_Details = () => {
  const [links, setLinks] = useState(headerData);
  const { blogID } = useParams();

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
      <Header />
      <div className=" bg-fixed bg-center bg-cover bg-[url('https://preview.colorlib.com/theme/plataforma/images/bg_2.jpg.webp')]  ">
        <div className=" relative min-h-screen container mx-auto">
          <div className=" absolute left-[5%] bottom-[5%] text-white bg-opacity-[0.5] rounded-xl  bg-black    py-3 px-6">
            <h3 className=" mb-3 text-2xl">Blog Details</h3>
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
              <Link
                to="/blogs"
                className=" text-xl mr-1 hover:text-customBlue duration-300"
                onClick={(ele) => {
                  clear(4);
                }}
              >
                Blogs &gt;
              </Link>
              <span className="text-xl">Blog Details &gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 py-10 md:py-20 px-5">
        <section className="col-span-12 md:col-span-8">
          <div>
            <h2 className=" text-3xl my-5">
              {Data_9[blogID].details.partOne.title}
            </h2>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partOne.fPara}
            </p>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partOne.sPara}
            </p>
          </div>
          <div>
            <h2 className=" text-3xl my-5">
              {Data_9[blogID].details.partTwo.title}
            </h2>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partTwo.firstPara}
            </p>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partTwo.secondPara}
            </p>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partTwo.thirdPara}
            </p>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partTwo.fourthPara}
            </p>
            <p className=" text-custom_M_Gray mb-7">
              {Data_9[blogID].details.partTwo.fifthPara}
            </p>
          </div>
          <ul className="flex">
            <li className="mr-3 border border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
              <a href="#">LIFE</a>
            </li>
            <li className="mr-3 border border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
              <a href="#">SPORT</a>
            </li>
            <li className="mr-3 border border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
              <a href="#">TECH</a>
            </li>
            <li className="mr-3 border border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
              <a href="#">TRAVEL</a>
            </li>
          </ul>
          <div>
            <div className="flex flex-wrap mt-7 p-7 bg-custom_L_Gray">
              <div className="bg-hero-pattern bg-cover min-h-[250px] w-[100%] lg:w-[25%] bg-center"></div>
              <div className="w-[100%] lg:w-[75%] pl-7 py-8">
                <h3 className=" text-2xl mb-5">
                  {Data_9[blogID].details.partThree.author}
                </h3>
                <p
                  className=" text-lg text-custom_M_Gray"
                  style={{ lineHeight: "1.9" }}
                >
                  {Data_9[blogID].details.partThree.News}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 className="mb-10 mt-20 text-xl text-custom_M_Gray">
              6 Comments
            </h5>
            {Data_9[blogID].comment.map((comm, index) => {
              return (
                <div key={index} className="flex flex-wrap mb-8">
                  <div
                    className={` w-10  h-10 rounded-[50%] bg-center bg-cover bg-[url('https://preview.colorlib.com/theme/plataforma/images/person_1.jpg.webp')] `}
                  ></div>
                  <div className="pl-5 w-[calc(100%-40px)]">
                    <div className=" text-xl mb-2">{comm.name}</div>
                    <div className="text-custom_M_Gray ">
                      <span>{comm.date}</span>
                      <span> {comm.time}</span>
                    </div>
                    <div>{comm.comment}</div>
                    <button className=" my-6 bg-custom_ML_Gray px-4 py-2 rounded-lg duration-300 hover:bg-black hover:text-white font-bold">
                      REPLY
                    </button>
                    {comm.reply.map((rep, index) => {
                      console.log(comm.reply[0]);
                      if (comm.reply.length == 1) {
                        return (
                          <div key={index} className="pl-9 flex flex-wrap mb-8">
                            <div
                              className={` w-10  h-10 rounded-[50%] bg-center bg-cover bg-[url('https://preview.colorlib.com/theme/plataforma/images/person_1.jpg.webp')] `}
                            ></div>
                            <div className="pl-5 w-[calc(100%-40px)]">
                              <div className=" text-xl mb-2">{rep.name}</div>
                              <div className="text-custom_M_Gray ">
                                <span>{rep.date}</span>
                                <span> {rep.time}</span>
                              </div>
                              <div>{rep.rep_1}</div>
                              <button className=" my-6 bg-custom_ML_Gray px-4 py-2 rounded-lg duration-300 hover:bg-black hover:text-white font-bold">
                                REPLY
                              </button>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h5 className="mb-10 mt-20 text-xl text-custom_M_Gray">
              Leave a comment
            </h5>
            <div className=" mx-auto p-10 bg-custom_L_Gray max-w-[600px]">
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  website: "",
                  textArea: "",
                }}
                validationSchema={advancedSchema}
                onSubmit={async (values) => {
                  // login(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <NameInput
                      name="username"
                      type="text"
                      placeholder="Enter Your Username"
                    />

                    <CustomEmail
                      name="email"
                      type="email"
                      placeholder="Please Enter Your Email"
                    />

                    <WebsiteInput
                      name="website"
                      type="text"
                      placeholder="Enter Your Website"
                    />

                    <TextArea
                      name="textArea"
                      type="text"
                      placeholder="Write Your Message"
                    />

                    <button
                      className="text-white bg-customBlue  w-full py-3"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      Post Comment
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
        <aside className=" col-span-12 md:col-span-4 p-7">
          <div className="partOne mb-10">
            <h5 className="text-xl py-4">Categories</h5>
            <ul>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Jobs
                  <span className=" text-custom_M_Gray">( 12 )</span>
                </a>
              </li>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Visual Assistant
                  <span className=" text-custom_M_Gray">( 22 )</span>
                </a>
              </li>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Coffee
                  <span className=" text-custom_M_Gray">( 37 )</span>
                </a>
              </li>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Drinks
                  <span className=" text-custom_M_Gray">( 42 )</span>
                </a>
              </li>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Foods
                  <span className=" text-custom_M_Gray">( 14 )</span>
                </a>
              </li>
              <li className=" border-b-2 ">
                <a
                  className="py-3 block flex items-center justify-between"
                  href="#"
                >
                  Travel
                  <span className=" text-custom_M_Gray">( 140 )</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="partTwo mb-10">
            <h5 className="text-xl py-4">Recent Blog</h5>
            <div>
              {Data_9.map((blog, index) => {
                if (index < 3) {
                  return (
                    <div key={index} className="flex flex-wrap mb-7">
                      <Link
                        to={`/blogs/${blog.id}`}
                        onClick={(ele) => {
                          clear(4);
                        }}
                        className="w-[100%] lg:w-[25%]"
                      >
                        <img className="mb-7" src={blog.image} alt="" />
                      </Link>
                      <div className="w-[100%] lg:w-[75%] pl-5">
                        <p className="text-custom_M_Gray">{blog.desc}</p>
                        <div className="flex items-center flex-wrap mt-4  ">
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
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="partThree mb-10">
            <ul className="flex flex-wrap">
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">DISH</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">menu</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">food</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">sweet</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">tasty</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">delicious</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">desserts</a>
              </li>
              <li className="mr-3 border mb-3 border-custom_ML_Gray px-3 py-1 rounded-md hover:border-black duration-300  ">
                <a href="#">drinks</a>
              </li>
            </ul>
          </div>

          <div className="partFour">
            <h5 className="text-xl py-4">
              {Data_9[blogID].details.aSide.paraTitle}
            </h5>
            <p className=" text-custom_M_Gray">
              {Data_9[blogID].details.aSide.para}
            </p>
          </div>
        </aside>
      </div>
      <Sec_11 />
    </div>
  );
};

export default Blog_Details;
