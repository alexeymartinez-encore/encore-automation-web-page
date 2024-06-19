// import sealingCar from "../../../assets/sealing-car.jpeg";
// import carSunset from "../../../assets/car.png";
// import AutomotiveFeatherDuster from "./AutomotiveFeatherDuster";
import AutomotiveSurfacePrep from "./SurfacePrep/AutomotiveSurfacePrep";
import SystemsAutomotiveWelcome from "./SystemsAutomotiveWelcome";

export default function SystemsAutomotive() {
  return (
    <div className="flex flex-col justify-center items-center px-20 pb-10">
      <SystemsAutomotiveWelcome />

      <AutomotiveSurfacePrep />
      <hr></hr>
    </div>
  );
}
