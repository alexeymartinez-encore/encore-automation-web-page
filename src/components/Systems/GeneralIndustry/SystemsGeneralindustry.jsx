// import carSunset from "../../../assets/generalIndustry/robotic-automation.jpg";
// import SectionDescription from "../SectionDescription";
import GeneralIndustryInspectionMarking from "./GeneralIndustryInspectionMarking";
import GeneralIndustryPainting from "./GeneralIndustryPainting";
import GeneralIndustrySealing from "./GeneralIndustrySealing";
import GeneralIndustryWelcome from "./GeneralIndustryWelcome";

export default function SystemsGeneralIndustry() {
  return (
    <div className="px-20">
      <GeneralIndustryWelcome />
      <div className="flex justify-around items-center">
        <GeneralIndustrySealing />
        <GeneralIndustryInspectionMarking />
      </div>
      <GeneralIndustryPainting />
    </div>
  );
}
