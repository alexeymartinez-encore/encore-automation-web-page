import SystemsHeading from "../SystemsHeading";
import AerospacePainting from "./AerospacePainting";
import AerospaceSealing from "./AerospaceSealing";
import AerospaceSurfacePrep from "./AerospaceSurfacePrep";
import aerospace from "../../../assets/aerospace/aerospace.webp";
import SectionHeading from "../SectionHeading";

export default function SystemsAerospace() {
  return (
    <div className="px-5 md:px-20 py-0">
      <SystemsHeading
        img={aerospace}
        title="Soaring to new heights in aerospace automation."
        desc="At Encore Automation, we are at the forefront of innovation in the
        aerospace industry, providing cutting-edge automation for painting,
        sealing, surface finishing, coating, and inspection processes. Our
        advanced robotic systems and state-of-the-art technologies ensure
        unparalleled quality, precision, and efficiency, meeting the stringent
        requirements of aerospace manufacturing. We are committed to delivering
        sustainable and cost-effective solutions that enhance productivity and
        safety."
      />
      <SectionHeading title="Painting & Sealing" />
      <div className="flex flex-col md:flex-row flex-wrap gap-5 px-5 md:px-10 justify-around items-center">
        <AerospacePainting />
        <AerospaceSealing />
      </div>
      <AerospaceSurfacePrep />
    </div>
  );
}
