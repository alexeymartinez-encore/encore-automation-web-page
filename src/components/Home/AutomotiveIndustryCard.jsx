import { Link } from "react-router-dom";
import autoIndustry from "../../assets/automotive/auto_industry.png";

export default function AutomotiveIndustryCard() {
  return (
    <div className="relative group flex flex-col items-center justify-center mx-0 my-10 shadow-xl ">
      <Link to="/systems" className="relative text-white border-gray-500 ">
        <img
          src={autoIndustry}
          className="shadow-lg rounded group:hover:bg-black z-10"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded transform duration-300">
          <h1 className="text-white text-center text-3xl border-b-4 border-red-600">
            Services
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 text-white p-10">
            <p className="m-5 text-2xl text-center">Surface Preparation</p>
            <p className="m-5 text-2xl text-center">Painting</p>
            <p className="m-5 text-2xl text-center">Sealing</p>
            <p className="m-5 text-2xl text-center">Finish Inspection</p>
          </div>
          <div className="bg-blue-500  hover:bg-blue-500 md:text-xl text-white font-light hover:text-white md:my-5 py-2 md:py-4 px-6 md:px-10 border border-blue-500 hover:border-transparent rounded transition duration-300">
            Learn More
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-10 opacity-100 group-hover:opacity-0   rounded transform duration-300">
          <h1 className="text-white text-center text-5xl border-b-4 border-red-600 bg-gray-700 bg-opacity-55 p-5 ">
            Automotive
          </h1>
        </div>
      </Link>
    </div>
  );
}
