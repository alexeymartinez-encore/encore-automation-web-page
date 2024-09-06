import autoIndustry from "../../assets/automotive/auto_industry.png";
// import aeroIndustry from "../../assets/aerospace/aero_industry.png";
import aeroIndustry from "../../assets/aerospace/honda-plane.png";

import generalIndustry from "../../assets/generalIndustry/general_industry.png";
import IndustryCard from "./IndustryCard";
import { AERO_SERVICES, AUTO_SERVICES, GENERAL_SERVICES } from "../util/util";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function IndustriesSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="px-0 py-10 bg-gray-300 bg-opacity-30 md:px-20">
      <motion.h1
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="text-center text-3xl text-gray-600 md:text-7xl"
      >
        Industries We Serve
      </motion.h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-0 grid-container justify-center items-center my-0 ">
        <IndustryCard
          title="Automotive"
          img={autoIndustry}
          services={AUTO_SERVICES}
          animationDirection={-200}
          link="/systems"
        />
        <IndustryCard
          title="Aerospace"
          img={aeroIndustry}
          services={AERO_SERVICES}
          animationDirection={200}
          link="/systems/aerospace"
        />
        <IndustryCard
          title="General Industry"
          img={generalIndustry}
          services={GENERAL_SERVICES}
          animationDirection={-200}
          link="/systems/general-industry"
        />
      </div>
    </div>
  );
}
