import powderCoating from "../../assets/video/PowderCoating.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import JumpArrow from "./JumpArrow";

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
      <div className="absolute top-0 flex flex-col items-center justify-center bg-black bg-opacity-20 h-full w-full "></div>
      <div
        className="flex flex-col items-center justify-center -mt-20 z-50 px-5
                   md:items-start md:mx-10"
        style={{ height: "95vh" }}
      >
        <h1
          className="z-10 text-white text-3xl font-medium text-center 
                      md:text-start md:text-6xl 2xl:text-8xl "
        >
          Turn-key Robotic Automation System Supplier Integrator.
        </h1>
        <p
          className="z-50 text-white text-lg font-thin my-5 text-center
                      md:text-2xl 2xl:text-4xl "
        >
          Supplying robotic systems in the Automotive, Aerospace and General
          industry markets.
        </p>
        <div className="flex flex-col md:flex-row z-50 md:my-5 md:gap-5 2xl:my-10">
          <LinkButton link="/about">Company</LinkButton>
          <LinkButton link="/systems">Systems</LinkButton>
          <LinkButton link="/support">Support</LinkButton>
        </div>
        <JumpArrow />
      </div>
    </div>
  );
}
