export default function CareerInput({
  placeholder,
  onChange,
  value,
  type,
  label,
}) {
  return (
    <input
      className="border border-blue-500 w-[15rem]  h-[3rem] py-2 rounded-sm text-center my-1 bg-transparentn text-gray-400 "
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required
    />
  );
}
