import SystemDescription from "./SystemDescription";
import scannerImg from "../../../../assets/automotive/scanner.jpeg";
import defectDetectionImg from "../../../../assets/automotive/micro-epsilon-sensor.jpg";
import eagleEye from "../../../../assets/automotive/eagle-eye.webp";
import automatedDefectMarking from "../../../../assets/automotive/automated-defect-marking.png";

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
        desc="Encore Automation's partner, J3D Vision, specializes in implementing in-line inspection systems for
        100% production, focusing on unconventional inspections and automating visual inspection processes for 
        automatic feedback. Their primary application is inspecting paint defects on car bodies. J3D Vision has 
        developed original technology that inspects moving car bodies without line modifications, adapting to 
        high production speeds up to 150 jobs per hour, with potential for higher speeds. This technology can 
        inspect the entire vehicle, including edges and characteristic lines, and detect parts out of position, 
        unaffected by vibration or conveyor changes. With complete industrialization, J3D Vision has gained 
        significant experience and patented their technology in Spain, with a pending patent in Europe. 
        Their inspection technology is adaptable to various surfaces, parts, or conditions."
      />
      <SystemDescription
        img={automatedDefectMarking}
        title="Eagle Eye Top Coat Inspection"
        desc="The Automated Defect Marking Cell is an advanced system designed to enhance manufacturing quality 
        control by precisely identifying and marking defects. It features automatic marking of each defect, 
        ensuring that every detected flaw is accurately highlighted. The system employs advanced algorithms 
        to automatically generate optimal robotic paths, facilitating efficient and precise defect marking. 
        Additionally, it uses polish to mark defect locations, providing clear and visible indications for 
        further inspection or rework. This innovative cell streamlines the defect marking process, significantly 
        improving overall efficiency and product quality in manufacturing environments."
      />
    </div>
  );
}
