import defectDetect from "../../../assets/automotive/defectDetection.jpeg";
import IndustrySkillCard from "../IndustrySkillCard";
import IndustrySkillDescriptionCard from "../IndustrySkillDescriptionCard";
import IndustrySkillImageCard from "../IndustrySkillImageCard";
import SectionDescription from "../SectionDescription";

export default function GeneralIndustryInspectionMarking() {
  return (
    <IndustrySkillCard>
      <IndustrySkillImageCard img={defectDetect} />
      <IndustrySkillDescriptionCard
        title="Inspection & Marking"
        description="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
      />
    </IndustrySkillCard>
  );
}
