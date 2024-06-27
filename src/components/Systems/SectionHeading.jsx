export default function SectionHeading({ title, desc }) {
  return (
    <div className="flex flex-col p-5 rounded-sm text-center bg-gray-100 transform duration-300 mb-0">
      <h1 className="text-4xl text-blue-500 font-light py-3">{title}</h1>
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3">
        <p className="font-thin text-xl">{desc}</p>
        <div className=" pointer-events-none"></div>
      </div>
    </div>
  );
}
