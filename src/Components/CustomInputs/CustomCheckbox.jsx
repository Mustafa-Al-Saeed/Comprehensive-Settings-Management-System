import { useField } from "formik";
const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox flex items-center">
        <input
          id="check"
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error ? "text-red-500" : ""
          } mr-3 mb-6`}
        />
        <label className="text-customBlue mb-6 inline-block" htmlFor="check">
          I have read and accept the terms and conditions
        </label>
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500">{meta.error}</div>
      )}
    </>
  );
};

export default CustomCheckbox;
