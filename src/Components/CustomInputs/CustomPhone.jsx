import { useField } from "formik";
const CustomPhone = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {/* <label htmlFor="phone">{label}</label> */}
      <input
        id="phone"
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "text-red-500" : ""
        } w-full outline-none border-custom_L_Gray   p-2 border-b-[1px] `}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500 ">{meta.error}</div>
      )}
      <span className=" block text-customBlue mb-3">
        Please stick to this pattern +201234567890
      </span>
    </>
  );
};

export default CustomPhone;
