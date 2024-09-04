import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faLightbulb,
  faTimeline,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutHMV() {
  return (
    <div className="py-20 mx-40 flex flex-col justify-center items-center">
      <div className="my-10 text-5xl text-blue-900 font-bold">
        <h1 className="pb-10">Mission, Vision & History</h1>{" "}
      </div>
      <div className="grid grid-cols-4 gap-10 md:grid-cols-2">
        <div className="col-span-1 bg-white shadow-md p-10 rounded-md ">
          <div className="flex items-center justify-center text-green-500 text-3xl">
            <FontAwesomeIcon className=" h-7 " icon={faBullseye} />
            <h1 className="p-2">Mission</h1>
          </div>
          <p className="text-center font-thin text-lg p-5">
            Our mission is to innovate through comprehensive engineering and
            design, from concept to installation, ensuring seamless integration
            and optimal performance. We strive to transform industries with
            turnkey solutions, retrofits, and upgrades, supported by our
            expertise in simulation, electrical, mechanical, software, and
            process engineering. Join us in shaping the future of automation
            with unparalleled service and training.
          </p>
        </div>
        <div className="col-span-1 bg-white shadow-md p-10 rounded-md ">
          <div className="flex items-center justify-center text-yellow-500 text-3xl">
            <FontAwesomeIcon className="h-7 " icon={faLightbulb} />
            <h1 className="p-2">Vision</h1>
          </div>
          <p className="text-center font-thin text-lg p-5">
            At Encore Automation, our vision is to revolutionize industrial
            automation through innovation, expertise, and precision. We aim to
            lead the industry with sustainable, efficient, and forward-thinking
            solutions that enhance productivity, improve quality, and foster a
            safer, greener future for all. By continuously advancing our
            capabilities in automation, we strive to become a global leader in
            transforming manufacturing and engineering processes.
          </p>
        </div>
        <div className="col-span-1 bg-white shadow-md p-10 rounded-md">
          <div className="flex items-center justify-center text-blue-900 text-3xl">
            <FontAwesomeIcon className="h-7" icon={faTimeline} />
            <h1 className="p-2">History</h1>
          </div>
          <p className="text-center font-thin text-lg p-5">
            Encore Automation was founded in 2006 by a core group of specialists
            from Haden Automation Group and AEG Paint Systems, bringing years of
            expertise in automation. In 2014, we became part of the Taikisha
            Group, enhancing our global presence and capabilities. Known for
            installing 90% of the world’s automotive powder prime systems, we
            have successfully integrated thousands of robots, bell stations, and
            vision systems. Our innovations extend to automated defect
            detection, sealer and LASD cells, Pur-foam systems, marking, and
            surface preparation, making us leaders in advanced automation
            solutions.
          </p>
        </div>
        <div className="col-span-1 bg-white shadow-md p-10 rounded-md">
          <div className="flex items-center justify-center text-blue-500 text-3xl">
            <FontAwesomeIcon
              className="text-blue-500 h-7"
              icon={faPeopleGroup}
            />
            <h1 className="p-2">Team</h1>
          </div>
          <p className="text-center font-thin text-lg p-5">
            Our team at Encore Automation is a group of highly skilled
            professionals with diverse expertise in electrical, mechanical,
            software, and process engineering. With around 50 employees, we
            pride ourselves on delivering comprehensive turnkey solutions
            tailored to meet the unique needs of our clients. Dedicated to
            excellence, collaboration, and growth, our team works together to
            drive innovation and ensure the highest quality in every project.
          </p>
        </div>
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
