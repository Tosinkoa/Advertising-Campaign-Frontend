import { useField } from "formik";

export default function MyInput({ label, type, labelClassName, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="mylabel">{label}</label>
      <input type={type} {...field} {...props} />
      <p className="input_error">{meta.touched && meta.error ? meta.error : ""}</p>
    </>
  );
}
