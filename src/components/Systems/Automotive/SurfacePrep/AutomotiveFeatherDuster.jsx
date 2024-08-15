import featherImg from "../../../../assets/automotive/featherDuster.jpg";
import blowoffImg from "../../../../assets/automotive/blowoff.jpeg";
import SHSander from "../../../../assets/automotive/SHSander.jpg";
import waterBlasting from "../../../../assets/automotive/waterBlasting.png";
import swordBrush from "../../../../assets/automotive/swordbrush.png";
import SystemDescription from "../../SystemDescription";

export default function AutomotiveFeatherDuster() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
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
        path="/systems/automotive/feather-duster-and-blow-offs"
      />
      <SystemDescription
        img={SHSander}
        title="Sanding/Buffing"
        desc="Encore's robotic sanding and buffing systems use the Encore multi-headed sander and
         standard sanding equipment to handle the full exterior surfaces of vehicles and their components. Our systems
          feature automatic paper changers for efficient replacement and validation, integrated dust removal systems to 
          clear residual materials, and automatic tool change capabilities for added flexibility in the sanding process."
        path="/systems/automotive/sanding-and-buffing"
      />
      <SystemDescription
        img={swordBrush}
        title="Sword Brush"
        desc="Encore Automation is a preferred integrator for the Wandres™ Sword Brush. 
              Robotic Sword Brushes are perfect for efficiently cleaning the intricate surfaces of vehicle bodies before
              applying the primer or topcoat layers. Encore can design your sword brush system to perform a full exterior 
              body clean. This can be on a moving conveyor or stop station. The Sword Brush will efficiently clean 
              sanded spots, making it a great solution after an automated sanding booth or manual sanding."
        path="/systems/automotive/sword-brush"
      />

      <SystemDescription
        img={waterBlasting}
        title="CO2 Cleaning"
        desc="Encore's robotic sanding and buffing systems use the Encore multi-headed sander and
         standard sanding equipment to handle the full exterior surfaces of vehicles and their components. Our systems
          feature automatic paper changers for efficient replacement and validation, integrated dust removal systems to 
          clear residual materials, and automatic tool change capabilities for added flexibility in the sanding process."
        path="/systems/automotive/water-blasting"
      />
    </div>
  );
}
