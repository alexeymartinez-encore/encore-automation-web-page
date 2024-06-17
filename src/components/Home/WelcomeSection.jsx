import powderCoating from "../../assets/video/PowderCoating.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="top-0 -z-30 w-full h-full">
      <video
        className="absolute top-0 w-full h-full object-cover "
        autoPlay
        loop
        muted
      >
        <source src={powderCoating} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 flex flex-col items-center md:items-start justify-center bg-black bg-opacity-20 h-full w-full "></div>
      <div
        className="flex flex-col items-start justify-center -mt-20 md:ml-20 z-50"
        style={{ height: "100vh", width: "60rem" }}
      >
        <h1 className="z-50 text-white text-4xl md:text-7xl font-light text-center md:text-start">
          Turn-key Robotic Automation System Supplier Integrator.
        </h1>
        <p className="z-50 text-white md:text-3xl font-thin my-5 text-center md:text-start">
          Supplying robotic systems in the Automotive, Aerospace and General
          industry markets.
        </p>
        <div className="flex flex-col md:flex-row z-50  ">
          <Link
            to="/about"
            className="bg-blue-500 md:bg-transparent hover:bg-blue-500 md:text-xl text-white font-light hover:text-white md:my-5 py-2 md:py-4 px-6 md:px-10 border border-white hover:border-transparent rounded transition duration-300"
          >
            Company
          </Link>
          <Link
            to="/systems"
            className="bg-blue-500 md:bg-transparent hover:bg-blue-500 md:text-xl text-white font-light hover:text-white my-5 md:mx-10 py-2 md:py-4 px-6 md:px-10 border border-white hover:border-transparent rounded transition duration-300"
          >
            Systems
          </Link>
          <Link
            to="/support"
            className="bg-blue-500 md:bg-transparent hover:bg-blue-500 md:text-xl text-white font-light hover:text-white md:my-5 py-2 md:py-4 px-6 md:px-10 border border-white hover:border-transparent rounded transition duration-300"
          >
            Support
          </Link>
        </div>

        <motion.div
          animate={{
            translateY: [0, 2, 0, -2, 0, 2, 0, -2, 0],
          }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            // repeatType: "reverse", // Reverse the animation after each iteration
            duration: 2, // Animation duration per iteration
          }}
          className="absolute flex bottom-0 left-0 z-50 w-full justify-center"
        >
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className=" hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faAngleDown} className="h-10 text-white " />
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
}
