export default function AerospaceSectionHeader({ title, desc, img }) {
  return (
    <div className="flex flex-col  p-5 rounded-sm text-center bg-gray-100 transform duration-300 mb-5">
      <h1 className="text-2xl text-blue-500 font-light py-3">{title}</h1>
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3">
        <p className="font-thin">{desc}</p>
        <div className=" pointer-events-none"></div>
      </div>
    </div>
  );
}
