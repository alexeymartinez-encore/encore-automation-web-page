import { Link } from "react-router-dom";
import autoIndustry from "../../assets/automotive/auto_industry.png";
import aeroIndustry from "../../assets/aerospace/aero_industry.png";
import generalIndustry from "../../assets/generalIndustry/general_industry.png";

export default function IndustriesSection() {
  return (
    <div className="px-20 py-10 bg-gray-200 bg-opacity-30">
      <h1 className="text-center text-5xl py-5 text-gray-600">
        Industries we serve
      </h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-0 grid-container justify-center items-center my-10 ">
        <div className="relative group flex flex-col items-center justify-center mx-60 my-10 shadow-xl ">
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
        <div className="group relative flex flex-col justify-center mx-60 my-10 shadow-xl">
          <Link to="/systems/aerospace" className="">
            <img src={aeroIndustry} className="shadow-lg rounded" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded transform duration-300">
              <h1 className="text-white text-center text-3xl border-b-4 border-red-600">
                Services
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 text-white p-10">
                <p className="m-5 text-2xl text-center">Aerospace Painting</p>
                <p className="m-5 text-2xl text-center">Aerospace Sealing</p>
                <p className="m-5 text-2xl text-center col-span-2">
                  Aerospace Surface Preparation
                </p>
              </div>
              <div className="bg-blue-500  hover:bg-blue-500 md:text-xl text-white font-light hover:text-white md:my-5 py-2 md:py-4 px-6 md:px-10 border border-blue-500 hover:border-transparent rounded transition duration-300">
                Learn More
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-10 opacity-100 group-hover:opacity-0   rounded transform duration-300">
              <h1 className="text-white text-center text-5xl border-b-4 border-red-600 bg-gray-700 bg-opacity-35 p-5 ">
                Aerospace
              </h1>
            </div>
          </Link>
        </div>
        <div className="group relative flex justify-center  mx-60 my-10 shadow-xl">
          <Link to="/systems/general-industry" className="">
            <img src={generalIndustry} className="shadow-lg rounded" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded transform duration-300">
              <h1 className="text-white text-center text-3xl border-b-4 border-red-600">
                Services
              </h1>
              <div className="grid grid-cols-2 grid-rows-2 text-white p-10">
                <p className="m-5 text-2xl text-center">Inspection & Marking</p>
                <p className="m-5 text-2xl text-center">Painting</p>
                <p className="m-5 text-2xl text-center">Sealing</p>
                <p className="m-5 text-2xl text-center">Finish Inspection</p>
              </div>
              <div className="bg-blue-500  hover:bg-blue-500 md:text-xl text-white font-light hover:text-white md:my-5 py-2 md:py-4 px-6 md:px-10 border border-blue-500 hover:border-transparent rounded transition duration-300">
                Learn More
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-10 opacity-100 group-hover:opacity-0   rounded transform duration-300">
              <h1 className="text-white text-center text-5xl border-b-4 border-red-600 bg-gray-700 bg-opacity-35 p-5 ">
                General Industry
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
