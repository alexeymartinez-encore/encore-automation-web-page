import SystemDescription from "../../SystemDescription";
import tesaTape from "../../../../assets/automotive/tesa_Tape/tesaTapeCobot.jpeg";
import sealingImg from "../../../../assets/automotive/sealing_lasd/sealer.jpeg";
import purfoamImg from "../../../../assets/automotive/purfoam.png";
import skivingImg from "../../../../assets/automotive/skiving.png";

export default function AutomotiveSealing() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
      <SystemDescription
        img={sealingImg}
        title="Sealing & LASD Application"
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
        path="/systems/automotive/sealer-application"
      />
      <SystemDescription
        img={skivingImg}
        title="Automated Skiving"
        desc="Encore Automation has developed its own Skiving Tool to help reduce manpower and increase repeatability. 
        The skive, which can be attached to a smart gun and is retractable, is particularly useful for reaching 
        hard-to-access areas. Additionally, Encore Automation employs a skive cleaning mechanism between jobs 
        to ensure the skive is clean for each vehicle. This tool is especially effective for windshield flanges 
        and tail lamps, enhancing the efficiency and precision of the skiving process."
        path="/systems/automotive/skiving"
      />
      <SystemDescription
        img={tesaTape}
        title="tesa Tape"
        desc="Encore utilizes patent-pending technology for the automatic application of
             tesa Tape to body drain holes."
        path="/systems/automotive/tesa-tape"
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
        path="/systems/automotive/pur-foam"
      />
      {/* <SystemDescription
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
        path="/systems/automotive/sealer-application"
      /> */}
    </div>
  );
}
