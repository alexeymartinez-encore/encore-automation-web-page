import aeroPainting from "../../../assets/aerospace/aero-painting2.png";
import IndustrySkillCard from "../IndustrySkillCard";
import IndustrySkillDescriptionCard from "../IndustrySkillDescriptionCard";
import IndustrySkillImageCard from "../IndustrySkillImageCard";

export default function AerospacePainting() {
  return (
    <IndustrySkillCard>
      <IndustrySkillDescriptionCard
        title="Painting"
        description="Encore Automation offers expert aerospace painting solutions,
            specializing in primers, basecoats, clearcoats, and multi-component
            paints. We use advanced methods like electrostatic guns and rotary
            atomizers, integrating vision systems for precision. Our services
            ensure optimal performance from design to commissioning and
            training."
      />
      <IndustrySkillImageCard img={aeroPainting} />
    </IndustrySkillCard>
  );
}
