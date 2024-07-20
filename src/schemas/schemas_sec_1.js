import * as yup from "yup";
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// Email Pattern
const egyptPhonePattern = /^(?:\+?20|0)?1[0-9]{9}$/;
// Phone Pattern For Egypt Numbers

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  email: yup
    .string()
    .matches(emailPattern, { message: "Please Enter A Valid Email" })
    .required("Required"),
  phone: yup
    .string()
    .matches(egyptPhonePattern, {
      message: "Please Enter A Valid Phone Number Pattern",
    })
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
