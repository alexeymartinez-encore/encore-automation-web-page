export default function CareerInput({
  placeholder,
  onChange,
  value,
  type,
  label,
}) {
  return (
    <div className="flex flex-col w-[20rem]   py-2 rounded-md text-start px-2 my-1 border border-gray-200 text-gray-600  ">
      <label>
        {placeholder}
        <span className="text-red-500">*</span>
      </label>
      <input
        value={value}
        onChange={onChange}
        // placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}
