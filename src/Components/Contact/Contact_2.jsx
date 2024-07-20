import { Formik, Form } from "formik";
import { advancedSchema } from "../../schemas/schemas_contact";
import NameInput from "./Custom_Input/NameInput";
import CustomEmail from "./Custom_Input/CustomEmail";
import SubjectInput from "./Custom_Input/SubjectInput";
import TextArea from "./Custom_Input/TextArea";

const Contact_2 = () => {
  return (
    <div className=" container py-20 mx-auto">
      <div className=" mb-10 px-3">
        <h1 className="text-3xl font-bold pb-10">Contact Information</h1>
        <div className="grid grid-cols-12 gap-3 text-custom_M_Gray">
          <div className=" col-span-12 md:col-span-3">
            Address: 198 West 21th Street, Suite 721 New York NY 10016
          </div>
          <div className=" col-span-12 md:col-span-3">
            Phone: + 1235 2355 98
          </div>
          <div className=" col-span-12 md:col-span-3">
            Email: info@yoursite.com
          </div>
          <div className=" col-span-12 md:col-span-3">Website yoursite.com</div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 px-3">
        <div className="col-span-12 md:col-span-6 w-full lg:w-[450px] md:w-[100%] h-[490px] md:h-[560px] mx-auto bg-custom_L_Gray p-10   ">
          <Formik
            initialValues={{
              username: "",
              email: "",
              subject: "",
              textArea: "",
            }}
            validationSchema={advancedSchema}
            onSubmit={async (values) => {
              // login(values);
              console.log(values);
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

                <SubjectInput
                  name="subject"
                  type="text"
                  placeholder="Enter Your Subject"
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
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.620244378159!2d-38.4819695!3d-12.89774905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610297c13c12d%3A0xbd5eaae4ea5e96ca!2zUGxhdGFmb3JtYSwg2LPYp9mE2YHYp9iv2YjYsSAtINio2KfZh9mK2KfYjCDYp9mE2KjYsdin2LLZitmE!5e0!3m2!1sar!2seg!4v1689669354943!5m2!1sar!2seg"
          className=" col-span-12 md:col-span-6 w-full lg:w-[450px] md:w-[100%] h-[300px] md:h-[560px] mx-auto"
          //   allowfullscreen=""
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact_2;
