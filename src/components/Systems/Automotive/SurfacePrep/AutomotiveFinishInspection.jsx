import SystemDescription from "./SystemDescription";
import scannerImg from "../../../../assets/automotive/scanner.jpeg";
import defectDetectionImg from "../../../../assets/automotive/micro-epsilon-sensor.jpg";
import eagleEye from "../../../../assets/automotive/eagle-eye.webp";

export default function AutomotiveFinishInspection() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
      <SystemDescription
        img={scannerImg}
        title="Thickness/Wavescan/Color"
        desc="Encore quality measurement systems use proven off-the-shelf technology to measure thickness, 
        wave scan, and color of vehicle exteriors and components, accommodating various configurations and 
        requirements. Our fully robotic systems offer multiple configurations for required measurements,
        with both contact and non-contact capabilities. We provide single-layer and multi-layer film thickness
        measurements."
      />
      <SystemDescription
        img={defectDetectionImg}
        title="Defect Detection"
        desc="Encore's defect detection system uses a Micro-Epsilon reflectCONTROL sensor, based on phase
         measuring deflectometry, for robotic defect detection on the full exterior surface of automotive 
         vehicles and their components. Our fully robotic defect detection systems offer multiple configurations 
         based on production rate and vehicle size, with model-specific simulations ensuring 100% coverage with 
         minimal overlap. The signal evaluation is optimized for detecting paint defects smaller than 0.3 mm, 
         and the system automatically recognizes defects on all colors. Additionally, Encore offers an optional 
         automatic defect marking system to apply marking material at detected defect locations. These fully 
         robotic defect marking systems also feature multiple configurations based on production rate and vehicle 
         size and can be located downstream from the defect detection system with line tracking capability. 
         The system includes an applicator and fluid delivery system for the marking material."
      />
      <SystemDescription
        img={eagleEye}
        title="Eagle Eye Top Coat Inspection"
        desc="Encore's defect detection system uses a Micro-Epsilon reflectCONTROL sensor, based on phase
         measuring deflectometry, for robotic defect detection on the full exterior surface of automotive 
         vehicles and their components. Our fully robotic defect detection systems offer multiple configurations 
         based on production rate and vehicle size, with model-specific simulations ensuring 100% coverage with 
         minimal overlap. The signal evaluation is optimized for detecting paint defects smaller than 0.3 mm, 
         and the system automatically recognizes defects on all colors. Additionally, Encore offers an optional 
         automatic defect marking system to apply marking material at detected defect locations. These fully 
         robotic defect marking systems also feature multiple configurations based on production rate and vehicle 
         size and can be located downstream from the defect detection system with line tracking capability. 
         The system includes an applicator and fluid delivery system for the marking material."
      />
    </div>
  );
}
