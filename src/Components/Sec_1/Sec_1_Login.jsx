import { Formik, Form } from "formik";
import { advancedSchema } from "../../schemas/schemas_sec_1";
import NameInput from "../CustomInputs/NameInput";
import CustomCheckbox from "../CustomInputs/CustomCheckbox";
import CustomEmail from "../CustomInputs/CustomEmail";
import CustomPhone from "../CustomInputs/CustomPhone";
// import useRequest from "../../Hooks/API’s/UseRequest";

const Sec_1_Login = () => {
  // const { login } = useRequest();

  return (
    <div className="w-full md:w-[49%] flex flex-wrap justify-center  ">
      <div className=" w-4/5 bg-white px-5 py-7 ">
        <h1 className=" text-3xl mr-auto pb-6 "> Join Conference </h1>
        <Formik
          initialValues={{
            username: "",
            jobType: "",
            email: "",
            phone: "",
            acceptedTos: false,
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
                // label={"username"}
                name="username"
                type="text"
                placeholder="Enter Your Username"
              />

              <CustomEmail
                // label={"Email"}
                name="email"
                type="email"
                placeholder="Please Enter Your Email"
              />
              <CustomPhone
                // label={"Phone"}
                name="phone"
                type="text"
                placeholder="Please Enter Your Phone"
              />

              <CustomCheckbox type="checkbox" name="acceptedTos" />
              <button
                className="text-white bg-customBlue  w-full py-3"
                disabled={isSubmitting}
                type="submit"
              >
                Jion Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sec_1_Login;
