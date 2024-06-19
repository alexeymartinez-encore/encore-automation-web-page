import featherImg from "../../../../assets/automotive/featherDuster.jpg";
import blowoffImg from "../../../../assets/automotive/blowoff.jpeg";
import SHSander from "../../../../assets/automotive/SHSander.jpg";
import waterBlasting from "../../../../assets/automotive/waterBlasting.png";
import swordBrush from "../../../../assets/automotive/swordbrush.png";
import SystemDescription from "../../SystemDescription";

export default function AutomotiveFeatherDuster() {
  return (
    <div className="flex flex-row gap-10 justify-between flex-wrap">
      <SystemDescription
        img={featherImg}
        title="Feather Duster & Blow-Offs"
        desc="Encore provides custom feather duster systems for various vehicle and
        product sizes. Our offerings include fully robotic feather dusters with
        optional integrated hoods, floor-mounted hood assemblies, and standard
        fixed machines available in clean wall or booth designs with
        servo-controlled or manually adjusted mechanisms. We also manufacture
        Ostrich feather rolls in-house and supply replacements for existing
        systems."
      />
      <SystemDescription
        img={swordBrush}
        title="Sword Brush"
        desc="Encore's robotic sanding and buffing systems use the Encore multi-headed sander and
         standard sanding equipment to handle the full exterior surfaces of vehicles and their components. Our systems
          feature automatic paper changers for efficient replacement and validation, integrated dust removal systems to 
          clear residual materials, and automatic tool change capabilities for added flexibility in the sanding process."
      />
      {/* <SystemDescription
        img={blowoffImg}
        title="Blow Off"
        desc="Encore specializes in engineering and designing standard machines and
          robot-mounted assemblies, offering a wide range of custom blow-off
          systems for various vehicle and product sizes. These systems use
          high-velocity, often electrostatically charged air to remove dirt and
          particles from surfaces before painting. Options include stationary or
          robotic configurations, high/low volume and velocity air, compressed
          or fan-driven air, PC or PLC-based visualization systems with
          graphical user interfaces, and clean wall or in-booth designs.
          Additionally, dirt collection can be managed via vacuum or booth
          collection systems."
      /> */}
      <SystemDescription
        img={SHSander}
        title="Sanding/Buffing"
        desc="Encore's robotic sanding and buffing systems use the Encore multi-headed sander and
         standard sanding equipment to handle the full exterior surfaces of vehicles and their components. Our systems
          feature automatic paper changers for efficient replacement and validation, integrated dust removal systems to 
          clear residual materials, and automatic tool change capabilities for added flexibility in the sanding process."
      />
      <SystemDescription
        img={waterBlasting}
        title="Water Blasting"
        desc="Encore's robotic sanding and buffing systems use the Encore multi-headed sander and
         standard sanding equipment to handle the full exterior surfaces of vehicles and their components. Our systems
          feature automatic paper changers for efficient replacement and validation, integrated dust removal systems to 
          clear residual materials, and automatic tool change capabilities for added flexibility in the sanding process."
      />
    </div>
  );
}
