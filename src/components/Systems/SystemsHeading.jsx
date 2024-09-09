import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SystemsHeading({ title, desc, img }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className=" py-5"
    >
      <img
        className="w-full h-[15rem] opacity-70 rounded-lg object-cover"
        src={img}
        alt="Sealing Car"
      />
      <h1 className="text-3xl md:text-6xl text-blue-900 font-light pt-5 ">
        {title}
      </h1>
      <p className="text-md md:text-xl  font-thin pt-5 text-blue-900">{desc}</p>
    </motion.div>
  );
}
