import { useInView } from "react-intersection-observer";
import asi from "../../assets/credentials/fanuc2.png";
import iso from "../../assets/credentials/iso.png";
import iso14 from "../../assets/credentials/iso14001.png";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
export default function CredentialsSection() {
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
      className="flex flex-col items-center justify-around relative mx-10 my-20 2xl:mx-40"
      id="certifications"
    >
      <div className="flex gap-5 md:gap-40 justify-evenly px-0 ">
        <div>
          <img
            src={asi}
            className=" border-r-0 h-[5rem] border-blue-500 border-opacity-50 mr-0
                        md:h-[15rem]"
          />
        </div>
        <div>
          <img src={iso} className="h-[5rem]  md:h-[15rem]" />
        </div>
        <div>
          <img src={iso14} className="h-[5rem]  md:h-[15rem]" />
        </div>
      </div>
      <div className="mt-5 md:mt-20 text-center ">
        <h1 className="text-4xl text-blue-600">Our Certifications</h1>
        <p className=" font-thin my-5 text-xl 2xl:text-3xl">
          We are an Authorized Fanuc Integrator, and with our Code of Conduct
          and our Environmental Policy, we have committed our statement on
          sustainability and social responsibility within the company.
        </p>
      </div>
    </motion.div>
  );
}
