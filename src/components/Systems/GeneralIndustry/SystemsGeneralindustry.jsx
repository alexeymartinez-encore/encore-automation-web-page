import roboAutomation from "../../../assets/generalIndustry/robotic-automation.jpg";
import SectionHeading from "../SectionHeading";

import SystemsHeading from "../SystemsHeading";
import GeneralIndustryInspectionMarking from "./GeneralIndustryInspectionMarking";
import GeneralIndustryPainting from "./GeneralIndustryPainting";
import GeneralIndustrySealing from "./GeneralIndustrySealing";
import GeneralIndustrySurfacePreparation from "./GeneralIndustrySurfacePreparation";

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
      <SectionHeading title="Sealing & Inspection & Marking" />
      <div className="flex flex-col md:flex-row flex-wrap gap-5 px-5 md:px-10 justify-around items-center">
        <GeneralIndustrySealing />
        <GeneralIndustryInspectionMarking />
      </div>
      <GeneralIndustryPainting />
      <GeneralIndustrySurfacePreparation />
    </div>
  );
}
