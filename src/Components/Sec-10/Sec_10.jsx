import { Formik, Form } from "formik";
import { advancedSchema } from "../../schemas/schemas_sec_10";
import CustomEmail from "./CustomEmail";

const Sec_10 = () => {
  const login = (values) => {
    return console.log(values);
  };

  return (
    <div className=" container mx-auto py-20">
      <div className=" px-3 md:w-[600px] mx-auto text-center">
        <h1 className=" text-3xl font-bold pb-5">Subcribe to our Newsletter</h1>
        <p className=" text-custom_M_Gray pb-5">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={advancedSchema}
          onSubmit={async (values) => {
            // login(values);
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-wrap justify-between ">
              <CustomEmail
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
              />
              <button
                className="text-white bg-customBlue py-3 w-[28%]"
                disabled={isSubmitting}
                type="submit"
              >
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sec_10;
