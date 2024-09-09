import { useAnimation, motion } from "framer-motion";
import aboutImg from "../../assets/about.jpeg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AboutWelcome() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const mainText = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const subText = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  const img = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="h-full w-full flex flex-wrap justify-center md:justify-around items-center px-10 md:px-40 py-20  border-0">
      <div className="flex flex-col gap-5 md:w-[30rem] text-center md:text-start">
        <motion.h6
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
            type: "spring",
            stiffness: 50,
          }}
          className="font-bold text-sm text-blue-500"
        >
          ENCORE AUTOMATION'S CULTURE
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
        >
          <h1 className="font-bold text-7xl">Automate your success</h1>
          <p className="font-thin text-2xl py-5">
            At Encore, we are dedicated to advancing automated systems and
            services, specializing in paint and powder applications, material
            dispensing, and vision-aided robotics. Our commitment to customer
            satisfaction drives us to deliver innovative solutions that enhance
            efficiency and precision in every project we undertake.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
      >
        <img
          src={aboutImg}
          className=" rounded-full shadow-xl h-[15rem] mt-20 md:mt-0 w-[15rem] md:h-[30rem] md:w-[30rem] md:object-cover "
        />
      </motion.div>
    </div>
  );
}
