import SystemDescription from "./SystemDescription";
import tesaTape from "../../../../assets/automotive/tesaTape.png";
import sealingImg from "../../../../assets/automotive/sealer.jpeg";
import purfoamImg from "../../../../assets/automotive/purfoam.png";

export default function AutomotiveSealing() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
      <SystemDescription
        img={tesaTape}
        title="tesa Tape"
        desc="Encore utilizes patent-pending technology for the automatic application of
             tesa Tape to body drain holes."
      />
      <SystemDescription
        img={sealingImg}
        title="Sealer Application"
        desc="Encore Automation's extensive knowledge and experience enable us
        to approach sealing projects and services from a strong foundation.
        We specialize in sealer application approaches, including interior seam, 
        finesse, LASD, hem, and UBC. Our integrated vision systems feature both fixed and robot-mounted 
        cameras, and we incorporate seam quality vision systems with interactive quality display monitors 
        to assist with operator inspection and repair.
        We provide turnkey systems complete with safety fencing, tip dress windows, tip clean-off assemblies,
        support structures, safeties, and controls. Encore has the expertise to optimally specify, configure, 
        layout, simulate, engineer and design, assemble and test, install, commission, process tune, train, and 
        service systems for these applications and materials using various equipment options."
      />
      <SystemDescription
        img={purfoamImg}
        title="PUR-Foam"
        desc="Encore possesses the expertise to optimally specify, configure, layout, simulate, engineer,
        design, assemble, test, install, commission, process tune, train, and service PUR Foam application 
        systems. Our offerings include fully robotic foam application, manual application systems,
        foam applicators, hose dress out and management, automated tip cleaners, foam dispense mixing and
        dispense systems, and bulk delivery systems. Additionally, we provide system controls with operator
        GUI for shot information and timing."
      />
    </div>
  );
}
