import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function StatementCard({
  icon,
  title,
  description,
  titleColor,
}) {
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
      className="col-span-1 bg-white shadow-md p-3 md:p-10 rounded-md "
    >
      <div
        className={`flex items-center justify-center ${titleColor} text-2xl md:text-3xl`}
      >
        <FontAwesomeIcon className="h-7" icon={icon} />
        <h1 className="p-2">{title}</h1>
      </div>
      <p className="text-center font-thin md:text-lg p-5">{description}</p>
    </motion.div>
  );
}
