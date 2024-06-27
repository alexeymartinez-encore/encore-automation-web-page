import uvSealingImg from "../../../assets/aerospace/uvSealer3.jpeg";
import IndustrySkillCard from "../IndustrySkillCard";
import IndustrySkillDescriptionCard from "../IndustrySkillDescriptionCard";
import IndustrySkillImageCard from "../IndustrySkillImageCard";

export default function AerospaceSealing() {
  return (
    <IndustrySkillCard>
      <IndustrySkillImageCard img={uvSealingImg} />
      <IndustrySkillDescriptionCard
        title="Sealing"
        description="Encore quality measurement systems use proven off-the-shelf
            technology to measure thickness, wave scan, and color of vehicle
            exteriors and components, accommodating various configurations and
            requirements. Our fully robotic systems offer multiple
            configurations for required measurements, with both contact and
            non-contact capabilities. We provide single-layer and multi-layer
            film thickness measurements."
      />
    </IndustrySkillCard>
  );
}
