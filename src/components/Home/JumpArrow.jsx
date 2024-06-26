import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export default function JumpArrow() {
  return (
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
  );
}
