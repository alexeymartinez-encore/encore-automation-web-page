import AerospaceProcessHeader from "./AerospaceProcessHeader";
import aeroScrub from "../../../assets/aerospace/aero-scrub.png";
import aeroRinse from "../../../assets/aerospace/aero-rinse.png";
import aeroSand from "../../../assets/aerospace/aero-sand.png";

import SystemDescription from "../SystemDescription";

export default function AerospaceSurfacePrep() {
  return (
    <div>
      <AerospaceProcessHeader
        title="Surface Preparation"
        desc="Encore Automation excels in aerospace surface preparation with advanced processes 
        including scrubbing, rinsing/washing, and sanding. Our automated systems ensure thorough 
        and consistent surface preparation, enhancing the quality and durability of subsequent coatings. 
        Integrated precision features ensure optimal performance and efficiency in preparing aircraft parts 
        for painting and sealing."
      />
      <div className="flex justify-start items-center gap-10">
        <SystemDescription
          img={aeroScrub}
          title="Scrub"
          desc="Encore Automation's robotic scrubbing system repurposes the multi-headed sander with 
          scrubbing pads to scrub entire aircraft exteriors without pad changes. It also handles aircraft 
          components and parts, and seamlessly transitions to sanding without tool changes. Compatible with 
          various cleaners, including alkaline and water, the system integrates vision features for precise part 
          location and offsetting."
        />
        <SystemDescription
          img={aeroRinse}
          title="Rinse"
          desc="Encore utilizes a liquid application nozzle assembly to rinse or apply chemicals to the exterior 
          surface of the aircraft as well as aircraft components and parts. The Encore rinse assembly offers the 
          following features. With integrated tool change capabilities the rinse nozzle can be utilized by the same
           robot performing the sanding or scrubbing operations to provide flexibility and cost savings to the 
           required surface rinsing operations. The Encore system can design the rinse or chemical agents to be 
           pre-mixed and ride along with the robotic system or be piped to a central rinse supply distribution 
           system. The Encore rinse assembly can also include an air blow off assembly to help dry the 
           surface after the rinse cycle or blow down the surface after sanding operations."
        />
        <SystemDescription
          img={aeroSand}
          title="Sanding"
          desc="Encore Automation's robotic sanding system uses a multi-headed sander to sand the full exterior 
          surface of aircraft, as well as components and parts. It features automatic sandpaper changers for 
          efficient replacement and validation, and integrates dust removal systems for a clean process. With 
          automatic tool change capabilities, the system offers flexibility for additional processes. Integrated 
          vision systems enhance precision by locating and offsetting parts using reference features."
        />
      </div>
    </div>
  );
}
