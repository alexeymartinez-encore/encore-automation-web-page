import { motion } from "framer-motion";

export default function WelcomeSectionText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 25 }}
      className="z-50 "
    >
      <h1
        className="z-10 text-white text-3xl font-medium text-center 
                md:text-start md:text-6xl 2xl:text-8xl "
      >
        Turn-key Robotic Automation System Supplier Integrator.
      </h1>
      <p
        className="z-50 text-white text-lg font-thin my-5 text-center
                md:text-2xl 2xl:text-4xl md:text-start"
      >
        Supplying robotic systems in the Automotive, Aerospace and General
        industry markets.
      </p>
    </motion.div>
  );
}
