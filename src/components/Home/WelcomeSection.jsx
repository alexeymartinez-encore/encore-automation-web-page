import powderCoating from "../../assets/video/PowderCoating.mov";
import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import JumpArrow from "./JumpArrow";
import WelcomeSectionText from "./WelcomeSectionText";

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
        <WelcomeSectionText />
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            type: "spring",
            stiffness: 40,
          }}
          className="flex flex-col md:flex-row z-50 md:my-5 md:gap-5 2xl:my-10"
        >
          <LinkButton link="/about">Company</LinkButton>
          <LinkButton link="/systems/automotive">Systems</LinkButton>
          <LinkButton link="/support">Support</LinkButton>
        </motion.div>
        <JumpArrow />
      </div>
    </div>
  );
}
