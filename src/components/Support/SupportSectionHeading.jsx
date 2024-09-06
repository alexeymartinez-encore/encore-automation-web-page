import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function SupportSectionHeading() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const variant = {
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
      variants={variant}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className="text-center bg-gray-100 p-10 rounded-sm font-thin"
    >
      <h1 className="text-xl md:text-3xl text-blue-500 font-light mb-3">
        Encore Automation offers a comprehensive suite of Lifecycle Management
        Services
      </h1>
      <p>
        Our services adapt as your needs evolve, whether due to system upgrades,
        personnel changes, or environmental factors. At Encore Automation, we
        believe in building a strong partnership with our customers, where
        communication and data sharing are integral to our collaborative
        success. Our services include emergency service, service tickets, remote
        diagnostics support, and spare parts services, ensuring your automation
        systems operate at peak performance.
      </p>
    </motion.div>
  );
}
