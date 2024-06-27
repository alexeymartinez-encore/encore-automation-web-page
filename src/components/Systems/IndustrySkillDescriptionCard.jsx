export default function IndustrySkillDescriptionCard({ title, description }) {
  return (
    <div className="flex flex-col md:w-[20rem] justify-center  rounded-sm  transform duration-300 ">
      <h1 className="text-2xl text-blue-500 font-light py-5 mb-3 text-center bg-gray-200 ">
        {title}
      </h1>
      <div className="relative  overflow-auto scrollbar-custom pr-3 pt-5 text-md  font-thin">
        <p className=" text-center h-[10rem]">{description}</p>
        {/* <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div> */}
      </div>

      <button className="shadow-xl bg-blue-500 text-white py-3 px-10 rounded-sm mt-3 hover:bg-blue-400 transform duration-300 text-lg">
        Learn More
      </button>
    </div>
  );
}
