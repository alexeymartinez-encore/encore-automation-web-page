import SupportTypeCard from "./SupportTypeCard";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SupportSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const variant = {
    hidden: { opacity: 0, y: 100 },
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
      className="flex flex-col md:flex-row justify-center items-center md:justify-around my-0 flex-wrap mb-10"
    >
      <SupportTypeCard
        title="Emergency Service "
        subtitle="24 / 7 Support"
        desc="We take emergency service very seriously. Understanding the critical 
        nature of automation systems, our professionals are always prepared to respond 
        swiftly and effectively to any emergency."
        icon={faWrench}
        link="tel:+12482530200"
        btnText="(248)-253-0200"
        // cta="Call us"
      />
      <SupportTypeCard
        title="Service Ticket"
        subtitle="24 / 7 Support"
        desc="Customers can easily create service tickets, allowing our experienced support team to promptly
        and efficiently resolve issues, ensuring minimal disruption and optimal system performance."
        icon={faTicket}
        link="mailto:service@encoreautomation.com"
        btnText="Email Us"
      />
      {/* <SupportTypeCard
        title="Remote Diagnostic Support"
        subtitle="24 / 7 Support"
        desc="We offer advanced remote diagnostics, monitoring and troubleshooting issues in real-time to provide
        immediate assistance, minimizing downtime and maximizing system reliability."
        icon={faLaptopFile}
        // cta="Call us"
        btnText="More"
      /> */}
      <SupportTypeCard
        title="Spare Parts"
        subtitle="24 / 7 Support"
        desc=" We take emergency service very seriously. Understanding the critical 
        nature of automation systems, our professionals are always prepared to respond 
        swiftly and effectively to any emergency."
        icon={faGear}
        link="mailto:SPartsService@encoreautomation.com"
        btnText="Email Us"

        // cta="Request Parts"
      />
    </motion.div>
  );
}

{
  /* <Link
to="tel:+12482530200"
className="text-xs hover:text-gray-200 transition duration-300"
>
(248)-253-0200
</Link> */
}
