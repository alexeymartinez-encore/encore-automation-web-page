import { Link } from "react-router-dom";

export default function SectionDescription({ title, desc, img, path }) {
  return (
    <div className="flex flex-col p-5 rounded-sm text-center hover:shadow-md transform duration-300 mb-5">
      <h1 className="text-4xl text-blue-500 font-light py-5 my-3 bg-gray-100">
        {title}
      </h1>

      <img src={img} className="h-40 rounded-sm object-cover pb-3" />
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3 pt-5">
        <p className="font-thin">{desc}</p>
        <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
      </div>

      <Link
        to={path}
        className="bg-blue-500 text-white py-3 px-10 rounded-sm my-3 hover:bg-blue-400 transform duration-300"
      >
        Learn More
      </Link>
    </div>
  );
}
