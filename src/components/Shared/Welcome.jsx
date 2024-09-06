import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Welcome({ title, subtitle, img }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const bgVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const textVariant = {
    hidden: { opacity: 0, y: -100 },
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
      variants={bgVariant}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center  justify-center bg-gray-900 bg-opacity-50">
        <motion.h1
          ref={ref}
          variants={textVariant}
          initial="hidden"
          animate={controls}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 50,
          }}
          className="text-white text-sm md:text-md font-light"
        >
          {subtitle}
        </motion.h1>
        <motion.h3
          ref={ref}
          variants={textVariant}
          initial="hidden"
          animate={controls}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 50,
          }}
          className="text-white text-4xl md:text-5xl"
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
}
