import roboAutomation from "../../../assets/generalIndustry/robotic-automation.jpg";

import SystemsHeading from "../SystemsHeading";
import GeneralIndustryInspectionMarking from "./GeneralIndustryInspectionMarking";
import GeneralIndustryPainting from "./GeneralIndustryPainting";
import GeneralIndustrySealing from "./GeneralIndustrySealing";

export default function SystemsGeneralIndustry() {
  return (
    <div className="px-5 md:px-20">
      <SystemsHeading
        img={roboAutomation}
        title="Elevating the future of general industry automation."
        desc="At Encore Automation, we are pioneers in the field of industrial
        automation, specializing in advanced technologies for painting, sealing,
        surface finishing, coating, and inspection processes. Our
        state-of-the-art robotic systems and precision engineering ensure
        unmatched quality, efficiency, and reliability across various
        industries. Committed to excellence, we provide sustainable and
        cost-effective solutions that enhance productivity and safety, driving
        the future of automation excellence."
      />
      <div className="flex justify-around items-center">
        <GeneralIndustrySealing />
        <GeneralIndustryInspectionMarking />
      </div>
      <GeneralIndustryPainting />
    </div>
  );
}
