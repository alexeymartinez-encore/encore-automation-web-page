import giSealing from "../../../assets/generalIndustry/gi-sealing.png";
import IndustrySkillCard from "../IndustrySkillCard";
import IndustrySkillDescriptionCard from "../IndustrySkillDescriptionCard";
import IndustrySkillImageCard from "../IndustrySkillImageCard";

export default function GeneralIndustrySealing() {
  return (
    <IndustrySkillCard>
      <IndustrySkillDescriptionCard
        title="Sealing"
        description="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
      basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
       guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
       performance from design to commissioning and training."
      />
      <IndustrySkillImageCard img={giSealing} />
    </IndustrySkillCard>
  );
}
