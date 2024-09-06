import { useAnimation, motion } from "framer-motion";
import fitImg from "../../assets/career/careersFit.webp";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function CareerFit() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const variant = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  const leftVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  const bgVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
      variants={bgVariant}
      initial="hidden"
      animate={controls}
      transition={{
        // delay: 0.5,
        duration: 1,
        type: "spring",
        stiffness: 50,
      }}
      className="px-10 md:px-20 text-blue-900 bg-gray-100 -skew-y-2 my-0 py-10 "
    >
      <div className="py-20 skew-y-2">
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={controls}
          transition={{
            // delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 50,
          }}
          className="text-xl md:text-2xl md:text-start text-center font-medium mb-4 border-b-2 border-blue-900 py-1"
        >
          You may be a good fit if you:
        </motion.div>
        <div className="flex flex-col md:flex-row">
          <motion.ul
            ref={ref}
            variants={leftVariant}
            initial="hidden"
            animate={controls}
            transition={{
              // delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
            className="font-thin list-disc list-inside flex flex-col gap-2 p-5"
          >
            <li>
              Thrive on Innovation and are constantly pushing the boundaries of
              what's possible in automation technology.
            </li>
            <li>
              Are someone who loves exploring new ideas and bringing creative
              solutions to life, you'll feel right at home.
            </li>
            <li>
              Are passionate for automation and enjoy the challenge of solving
              complex problems.
            </li>
            <li>
              Enjoy collaborating with a team of talented engineers, designers,
              and problem-solvers, you'll find our work environment highly
              rewarding.
            </li>
            <li>
              Have a strong work ethic and are committed to delivering
              high-quality results, you'll fit right in.
            </li>
            <li>
              Love learning new skills and staying up-to-date with the latest
              advancements in technology.
            </li>
            <li>
              Enjoy a fast-paced, dynamic work environment where you can take on
              new challenges and grow your career.
            </li>
            <li>
              Appreciate a balanced lifestyle. We believe in the importance of
              work-life balance. If you value having time for personal interests
              and hobbies outside of work.
            </li>
          </motion.ul>
          <motion.img
            ref={ref}
            variants={rightVariant}
            initial="hidden"
            animate={controls}
            transition={{
              // delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
            className="h-[25rem] rounded-sm object-cover"
            src={fitImg}
          />
        </div>
      </div>
    </motion.div>
  );
}
