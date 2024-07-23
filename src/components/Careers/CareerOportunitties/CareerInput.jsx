export default function CareerInput({
  placeholder,
  onChange,
  value,
  type,
  label,
}) {
  return (
    <input
      className=" w-[15rem]  h-[3rem] py-2 rounded-sm text-center my-1 bg-transparentn text-gray-400 shadow-sm "
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required
    />
  );
}
