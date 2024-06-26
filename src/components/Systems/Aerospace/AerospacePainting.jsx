import SystemDescription from "../SystemDescription";
import AerospaceProcessHeader from "./AerospaceProcessHeader";

import aeroPainting from "../../../assets/aerospace/aerospace-painting.png";

export default function AerospacePainting() {
  return (
    <div className="mx-5 md:w-[40rem] lg:w-[60rem]">
      <AerospaceProcessHeader
        title="Painting"
        desc="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
        img={aeroPainting}
      />
      {/* <div className="flex flex-col items-center">
        <SystemDescription
          img={aeroPainting}
          title="Painting"
          desc="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
        />
      </div> */}
    </div>
  );
}
