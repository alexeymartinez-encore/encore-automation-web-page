import SystemDescription from "../SystemDescription";
import AerospaceProcessHeader from "./AerospaceProcessHeader";

import uvSealingImg from "../../../assets/aerospace/uvSealer3.jpeg";

export default function AerospaceSealingTest() {
  return (
    <div className="mx-0 flex my-20 gap-20 justify-around">
      <img
        src={uvSealingImg}
        className=" rounded-md md:h-[30rem] h-[30rem] 2xl:h-[40rem] shadow-lg"
      />
      <div className="flex flex-col md:w-[40rem] lg:w-[45rem] justify-center items-center rounded-sm  transform duration-300 ">
        <h1 className="text-5xl 2xl:text-6xl text-blue-500 font-light py-5 mb-3 ">
          Sealing
        </h1>
        <div className="relative  overflow-auto scrollbar-custom pr-3 pt-5 text-2xl 2xl:text-4xl">
          <p className="font-thin text-center">
            Encore quality measurement systems use proven off-the-shelf
            technology to measure thickness, wave scan, and color of vehicle
            exteriors and components, accommodating various configurations and
            requirements. Our fully robotic systems offer multiple
            configurations for required measurements, with both contact and
            non-contact capabilities. We provide single-layer and multi-layer
            film thickness measurements.
          </p>
          <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
        </div>
        <button className="shadow-xl bg-blue-500 text-white py-3 2xl:py-5 px-20 rounded-md mt-3 hover:bg-blue-400 transform duration-300 text-xl 2xl:text-4xl font-thin">
          Learn More
        </button>
      </div>
    </div>
  );
}
