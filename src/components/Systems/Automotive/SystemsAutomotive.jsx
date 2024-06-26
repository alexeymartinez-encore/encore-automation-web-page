import SystemsHeading from "../SystemsHeading";
import AutomotiveSurfacePrep from "./SurfacePrep/AutomotiveSurfacePrep";
import carSunset from "../../../assets/automotive/car.png";

export default function SystemsAutomotive() {
  return (
    <div className="flex flex-col justify-center items-center mx-0 px-5 md:px-20 pb-10">
      <SystemsHeading
        img={carSunset}
        title="Driving the future of automotive manufacturing."
        desc="Encore Automation, revolutionizes the automotive industry through
        state-of-the-art automation in painting, sealing, surface finishing,
        coating, and inspection processes. Our cutting-edge robotic systems and
        advanced technologies ensure unparalleled quality, efficiency, and
        precision, delivering flawless finishes that meet the highest industry
        standards. Committed to excellence, we provide sustainable and
        cost-effective solutions that enhance productivity and safety."
      />

      <AutomotiveSurfacePrep />
      <hr></hr>
    </div>
  );
}
