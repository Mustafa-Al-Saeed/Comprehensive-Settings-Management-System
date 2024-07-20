import { useField } from "formik";
const WebsiteInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        id="Website"
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

export default WebsiteInput;
