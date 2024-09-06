import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export default function JumpArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        translateY: [0, 2, 0, -2, 0, 2, 0, -2, 0],
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.5,
        repeat: Infinity, // Repeat the animation infinitely
        // repeatType: "reverse", // Reverse the animation after each iteration
        duration: 2, // Animation duration per iteration
        // type: "spring",
        // stiffness: 25,
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

// initial={{ opacity: 0, x: -200 }}
// animate={{ opacity: 1, x: 0 }}
// transition={{
//   delay: 1,
//   duration: 0.7,
//   type: "spring",
//   stiffness: 25,
// }}
