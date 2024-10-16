import {
  faBullseye,
  faLightbulb,
  faTimeline,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import StatementCard from "./StatementCard";

export default function AboutHMV() {
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
    <div className="py-20 mx-10 md:mx-40 flex flex-col justify-center items-center">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        className="my-10 text-5xl text-blue-900 font-bold"
      >
        <h1 className="pb-10">Mission, Vision & History</h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <StatementCard
          icon={faBullseye}
          titleColor="text-blue-500"
          title="Mission"
          description="Our mission is to innovate through comprehensive engineering and
            design, from concept to installation, ensuring seamless integration
            and optimal performance. We strive to transform industries with
            turnkey solutions, retrofits, and upgrades, supported by our
            expertise in simulation, electrical, mechanical, software, and
            process engineering. Join us in shaping the future of automation
            with unparalleled service and training."
        />
        <StatementCard
          icon={faLightbulb}
          titleColor="text-yellow-500"
          title="Vision"
          description="At Encore Automation, our vision is to revolutionize industrial
            automation through innovation, expertise, and precision. We aim to
            lead the industry with sustainable, efficient, and forward-thinking
            solutions that enhance productivity, improve quality, and foster a
            safer, greener future for all. By continuously advancing our
            capabilities in automation, we strive to become a global leader in
            transforming manufacturing and engineering processes."
        />
        <StatementCard
          icon={faTimeline}
          titleColor="text-purple-500"
          title="History"
          description="Encore Automation was founded in 2006 by a core group of specialists
            from Haden Automation Group and AEG Paint Systems, bringing years of
            expertise in automation. In 2014, we became part of the Taikisha
            Group, enhancing our global presence and capabilities. Known for
            installing 90% of the world’s automotive powder prime systems, we
            have successfully integrated thousands of robots, bell stations, and
            vision systems. Our innovations extend to automated defect
            detection, sealer and LASD cells, Pur-foam systems, marking, and
            surface preparation, making us leaders in advanced automation
            solutions."
        />
        <StatementCard
          icon={faPeopleGroup}
          titleColor="text-green-500"
          title="Team"
          description="Our team at Encore Automation is a group of highly skilled
            professionals with diverse expertise in electrical, mechanical,
            software, and process engineering. With around 50 employees, we
            pride ourselves on delivering comprehensive turnkey solutions
            tailored to meet the unique needs of our clients. Dedicated to
            excellence, collaboration, and growth, our team works together to
            drive innovation and ensure the highest quality in every project."
        />
      </div>
    </div>
  );
}

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// export default function BenefitCard({ icon, text }) {
//   return (
//     <div className="flex justify-start items-center w-[20rem] md:w-[25rem] bg-gray-100 rounded-sm py-5 px-10 shadow-sm">
//       <FontAwesomeIcon className="text-blue-500 h-5 p-3" icon={icon} />
//       <p className="text-center">{text}</p>
//     </div>
//   );
// }

//       ref={ref}
//       variants={variants}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 1, type: "spring", stiffness: 50 }}
