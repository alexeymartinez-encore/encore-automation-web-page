import { Link } from "react-router-dom";
import encoreOffice from "../../assets/encore-office.png";

import FooterLinkSections from "./FooterLinksSection";
import FooterContactSection from "./FooterContactSection";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Footer() {
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
    <motion.footer
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className="px-5 py-5 bg-gray-900 md:px-20 2xl:px-40"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-center text-white py-20">
        <FooterLinkSections />
        <FooterContactSection />
      </div>
      <hr></hr>
      <div className="text-white font-thin text-sm py-5">
        <span className="py-10">
          © 2024 Encore Automation, LLC. All rights reserved.
        </span>
      </div>
    </motion.footer>
  );
}
