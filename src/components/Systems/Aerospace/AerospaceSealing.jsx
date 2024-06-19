import AerospaceProcessHeader from "./AerospaceProcessHeader";
import aeroSealing from "../../../assets/aerospace/aero-sealer.png";
import SystemDescription from "../SystemDescription";

export default function AerospaceSealing() {
  return (
    <div className=" mx-5 w-[40rem]">
      <AerospaceProcessHeader
        title="Sealing"
        desc="Encore quality measurement systems use proven off-the-shelf technology to measure thickness, 
        wave scan, and color of vehicle exteriors and components, accommodating various configurations and 
        requirements. Our fully robotic systems offer multiple configurations for required measurements,
        with both contact and non-contact capabilities. We provide single-layer and multi-layer film thickness
        measurements."
        img={aeroSealing}
      />
      {/* <div className="flex flex-col items-center">
        <SystemDescription
          img={aeroSealing}
          title="Sealing"
          desc="Encore quality measurement systems use proven off-the-shelf technology to measure thickness, 
        wave scan, and color of vehicle exteriors and components, accommodating various configurations and 
        requirements. Our fully robotic systems offer multiple configurations for required measurements,
        with both contact and non-contact capabilities. We provide single-layer and multi-layer film thickness
        measurements."
        />
      </div> */}
    </div>
  );
}
