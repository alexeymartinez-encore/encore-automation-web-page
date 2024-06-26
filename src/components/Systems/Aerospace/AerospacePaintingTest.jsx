import SystemDescription from "../SystemDescription";
import AerospaceProcessHeader from "./AerospaceProcessHeader";

import aeroPainting from "../../../assets/aerospace/aero-painting2.png";

export default function AerospacePaintingTest() {
  return (
    <div className="mx-0 flex my-20 gap-20 justify-around items-center flex-col md:flex-row">
      <div className="flex flex-col md:w-[30rem]  justify-center rounded-sm  transform duration-300 ">
        <h1 className="text-3xl text-blue-500 font-light py-5 mb-3 text-center bg-gray-200 ">
          Painting
        </h1>
        <div className="relative  overflow-auto scrollbar-custom pr-3 pt-5 text-lg  font-thin">
          <p className="font-thin text-center">
            Encore Automation offers expert aerospace painting solutions,
            specializing in primers, basecoats, clearcoats, and multi-component
            paints. We use advanced methods like electrostatic guns and rotary
            atomizers, integrating vision systems for precision. Our services
            ensure optimal performance from design to commissioning and
            training.
          </p>
          <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
        </div>
        <button className=" shadow-xl bg-blue-500 text-white py-3 px-10 rounded-md mt-3 hover:bg-blue-400 transform duration-300 text-xl  font-thin">
          Learn More
        </button>
      </div>
      <img
        src={aeroPainting}
        className=" rounded-md h-[25rem] w-[24rem] shadow-lg object-cover"
      />
    </div>
  );
}
