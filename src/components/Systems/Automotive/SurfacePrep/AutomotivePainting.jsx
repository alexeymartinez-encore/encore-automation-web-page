import SystemDescription from "./SystemDescription";
import liquidPaint from "../../../../assets/liquidPainting.jpg";
import powderPaint from "../../../../assets/powderPainting.jpeg";

export default function AutomotivePainting() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
      <SystemDescription
        img={liquidPaint}
        title="Liquid Painting"
        desc="Encore's water blasting systems use proven off-the-shelf technology 
              for cleaning carriers and components, accommodating a wide variety of configurations 
              and water blasting requirements."
      />
      <SystemDescription
        img={powderPaint}
        title="Powder Painting"
        desc="Encore is a leader in automotive powder systems, offering high-volume powder coating solutions
           for single or multicolor paints using dilute or dense phase methods. Our expertise includes powder
           distribution systems with sieving, mixing, and transport capabilities, as well as powder application
           systems in both robotic and machine types. We also provide powder collection and reclaim systems that 
           integrate back into distribution and application processes. Encore's dense phase technology, 
           from application pumps to transfer pumps, eliminates most defects typical in dilute phase systems. 
           Our Dense Phase Equipment and Multi-Powder Integrator enable easy and quick color changes 
           for multi-powder systems. Additionally, we have extensive experience integrating and retrofitting 
           systems with various machines, robots, and powder brands."
      />
    </div>
  );
}
