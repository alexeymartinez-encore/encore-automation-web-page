export default function SystemDescription({ img, title, desc }) {
  return (
    <div
      className="flex flex-col bg-white hover:shadow-lg justify-between
                p-5 rounded-md transform duration-300 w-[25rem] my-5"
    >
      <img src={img} className="h-40 rounded-sm object-cover" />

      <h1 className="text-2xl py-5 px-0 mb-0 text-left text-blue-500  my-0">
        {title}
      </h1>
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3">
        <p className="font-thin">{desc}</p>
        <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
      </div>

      <button className="bg-blue-500 font-light text-white py-3 px-10 rounded-sm my-3 hover:bg-blue-400 transform duration-300">
        Learn More
      </button>
    </div>
  );
}
