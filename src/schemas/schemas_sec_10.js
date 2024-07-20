import * as yup from "yup";
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// Email Pattern
const egyptPhonePattern = /^(?:\+?20|0)?1[0-9]{9}$/;
// Phone Pattern For Egypt Numbers

export const advancedSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailPattern, { message: "Please Enter A Valid Email" })
    .required("Required"),
});
