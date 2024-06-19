import AerospaceProcessHeader from "./AerospaceProcessHeader";
import aeroSealing from "../../../assets/aerospace/aero-sealer.png";
import SystemDescription from "../SystemDescription";

export default function AerospaceSealing() {
  return (
    <div>
      <AerospaceProcessHeader
        title="Sealing"
        desc="Encore Automation leverages its extensive expertise to excel in aerospace painting 
        projects. Our robotic sealing system applies compressible sealer onto aircraft parts using frozen 
        cartridges from suppliers like PPG and 3M. The system automates thawing and ensures timely application, 
        reducing material waste and cleaning frequency. Integrated vision systems enhance precision by 
        locating and offsetting parts using reference features."
      />
      <div>
        <SystemDescription
          img={aeroSealing}
          title="Sealing"
          desc="Encore quality measurement systems use proven off-the-shelf technology to measure thickness, 
        wave scan, and color of vehicle exteriors and components, accommodating various configurations and 
        requirements. Our fully robotic systems offer multiple configurations for required measurements,
        with both contact and non-contact capabilities. We provide single-layer and multi-layer film thickness
        measurements."
        />
      </div>
    </div>
  );
}
