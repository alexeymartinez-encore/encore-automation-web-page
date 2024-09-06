import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SectionHeading({ title, desc }) {
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
      className="flex flex-col p-5 rounded-sm text-center bg-gray-100 transform duration-300 mb-0"
    >
      <h1 className="text-4xl text-blue-500 font-light py-3">{title}</h1>
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3">
        <p className="font-thin text-xl">{desc}</p>
        <div className=" pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
