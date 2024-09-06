import { useAnimation, motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import {
  faClock,
  faDollarSign,
  faGlasses,
  faGraduationCap,
  faHandshake,
  faHeart,
  faHeartCirclePlus,
  faMoneyCheckDollar,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function CareerBenefits() {
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
      className="flex flex-col justify-center items-center mx-5 md:mx-20 my-20"
    >
      <h1 className="text-4xl md:text-start text-center mb-3 md:my-0">
        Benefits Our Employees Love
      </h1>
      <p className="text-center py-1 px-10 md:px-40 font-thin">
        At Encore Automation, we believe that our employees are our greatest
        asset. We are committed to providing a comprehensive benefits package
        that supports the well-being and professional growth of our team
        members. Our benefits include:
      </p>
      <div className="flex flex-col md:flex-row gap-5 my-5">
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faHeart} text="Health" />
          <BenefitCard icon={faGlasses} text="Vision" />
          <BenefitCard icon={faTooth} text="Dental" />
        </div>
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faDollarSign} text="Competitive Base Salary" />
          <BenefitCard icon={faClock} text="Paid Time Off (PTO)" />
          <BenefitCard icon={faMoneyCheckDollar} text="Profit Sharing" />
        </div>{" "}
        <div className="flex flex-col gap-5 ">
          <BenefitCard icon={faHeartCirclePlus} text="Good Work life Balance" />
          <BenefitCard icon={faHandshake} text="401K Match" />
          <BenefitCard icon={faGraduationCap} text="Tuition Reimbursement" />
        </div>
      </div>
    </motion.div>
  );
}
