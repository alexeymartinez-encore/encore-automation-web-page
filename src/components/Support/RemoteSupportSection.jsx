import {
  faForwardFast,
  faUserTie,
  faWrench,
  faUserShield,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import RemoteSupportCard from "./RemoteSupportCard";
export default function RemoteSupportSection() {
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
      className="flex flex-col items-center justify-center"
    >
      <div className="text-center bg-gray-100 p-10">
        <h1 className="text-4xl text-blue-500">Remote Diagnostic Support</h1>
        <p className="py-5 font-thin">
          Encore Automation has taken special care not only to build into its
          provided systems the ability for remote access, but also to provide
          the electronic resources to enable our skilled technical service and
          engineering support teams that allows them the ability to look into
          our provided system, and identify the problem, either fix it remotely,
          or alert the customerʼs technical support person of what to do to
          further investigate and correct the problem. This is a tremendous
          benefit to our customers for the following reasons:
        </p>
      </div>
      <div className="flex justify-center items-start  py-5">
        <div className="flex justify-between gap-5 py-10">
          <RemoteSupportCard
            icon={faForwardFast}
            description=" Our support is IMMEDIATE, eliminating any delays associated with
              travel to the manufacturing plant. Unlike traditional on-site
              support, which can take hours or even days depending on location
              and flight availability, we ensure swift assistance without
              unnecessary waiting."
          />
          <RemoteSupportCard
            icon={faUserTie}
            description="We can quickly provide the MOST TECHNICALLY COMPETENT AND
              EXPERIENCED EXPERT to address your needs. This often includes the
              very person who designed, engineered, or programmed the system,
              ensuring the fastest and most knowledgeable problem resolution."
          />
          <RemoteSupportCard
            icon={faWrench}
            description="If parts are required to fix the system and are unavailable at the
              manufacturing plant, Encore can promptly identify and source them
              either from our inventory or through trusted local suppliers with
              24-hour access, minimizing downtime."
          />
          <RemoteSupportCard
            icon={faUserShield}
            description="Our remote support is both efficient and secure. Encore
              Automation's networking experts ensure that remote access is
              established safely, mitigating the risk of unauthorized access.
              Furthermore, customers can choose to enable access only when an
              issue arises, providing added control and peace of mind."
          />
          <RemoteSupportCard
            icon={faCopy}
            description="Encore Automation securely retains copies of system drawings,
              software, and documentation, making them readily accessible to
              customers. We can instantly provide these resources or directly
              download them to the manufacturing system when needed."
          />
        </div>
      </div>
    </motion.div>
  );
}
