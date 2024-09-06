import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";
import { motion, spring, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ExperienceSection() {
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
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      id="experience"
      className="grid grid-cols-3 grid-rows-1 py-5
                                    md:py-20 md:px-20"
    >
      <ExperienceCard title="5+" desc="Countries of operations" />
      <ExperienceCard title="20+" desc="Years of industry experience" />
      <ExperienceCard title="50+" desc="Companies Served" />
    </motion.div>
  );
}
