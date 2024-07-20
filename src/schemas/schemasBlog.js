import * as yup from "yup";
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// Email Pattern

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  email: yup
    .string()
    .matches(emailPattern, { message: "Please Enter A Valid Email" })
    .required("Required"),
  website: yup
    .string()
    .min(3, "Subject must be at least 3 characters long")
    .required("Required"),
  textArea: yup
    .string()
    .min(20, "Text Area must be at least 20 characters long")
    .required("Required"),
});
