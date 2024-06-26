import { Link } from "react-router-dom";
import autoIndustry from "../../assets/automotive/auto_industry.png";
import aeroIndustry from "../../assets/aerospace/aero_industry.png";
import generalIndustry from "../../assets/generalIndustry/general_industry.png";
import IndustryCard from "./IndustryCard";
import { AERO_SERVICES, AUTO_SERVICES, GENERAL_SERVICES } from "../util/util";

export default function IndustriesSection() {
  return (
    <div className="px-0 py-10 bg-gray-300 bg-opacity-30 md:px-20">
      <h1 className="text-center text-3xl py-5 text-gray-600 md:text-5xl">
        Industries we serve
      </h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-0 grid-container justify-center items-center my-10 ">
        <IndustryCard
          title="Automotive"
          img={autoIndustry}
          services={AUTO_SERVICES}
          link="/systems"
        />
        <IndustryCard
          title="Aerospace"
          img={aeroIndustry}
          services={AERO_SERVICES}
          link="/systems/aerospace"
        />
        <IndustryCard
          title="General Industry"
          img={generalIndustry}
          services={GENERAL_SERVICES}
          link="/systems/general-industry"
        />
      </div>
    </div>
  );
}
