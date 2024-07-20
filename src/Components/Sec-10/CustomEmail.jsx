import { useField } from "formik";
const CustomEmail = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col w-[68%] relative">
      {/* <label htmlFor="email">{label}</label> */}
      <input
        id="email"
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "text-red-500" : ""
        }  outline-none border-custom_L_Gray p-2 border-b-[1px] mb-3 `}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 absolute left-0 top-[100%] ">
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default CustomEmail;
