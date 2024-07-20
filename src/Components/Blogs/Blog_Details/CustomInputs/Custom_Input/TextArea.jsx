import { useField } from "formik";
const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        rows={7}
        id="area"
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "text-red-500" : ""
        } w-full outline-none border-custom_L_Gray   p-2 border-b-[1px] mb-3 `}
      />
      {meta.touched && meta.error && (
        <div className="text-red-500">{meta.error}</div>
      )}
    </>
  );
};

export default TextArea;
