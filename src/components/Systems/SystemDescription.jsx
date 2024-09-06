import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function SystemDescription({ img, title, desc, path }) {
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
      className="flex flex-col bg-white shadow-lg md:shadow-none md:hover:shadow-lg justify-between
                p-5 rounded-md transform duration-300 md:w-[25rem] my-5"
    >
      <img src={img} className="h-40 rounded-sm object-cover" />

      <h1 className="text-2xl py-5 px-0 mb-0 text-left text-blue-500  my-0">
        {title}
      </h1>
      <div className="relative max-h-[10rem] overflow-auto scrollbar-custom pr-3">
        <p className="font-thin">{desc}</p>
        <div className="sticky bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white to-transparent pointer-events-none"></div>
      </div>

      <Link
        to={path}
        className="bg-blue-500 text-center font-light text-white py-3 px-10 rounded-sm my-3 hover:bg-blue-400 transform duration-300"
      >
        Learn More
      </Link>
    </motion.div>
  );
}
