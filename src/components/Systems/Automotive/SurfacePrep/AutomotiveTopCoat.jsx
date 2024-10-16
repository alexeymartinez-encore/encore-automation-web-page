import sealingImg from "../../../../assets/automotive/liquidPainting.jpg";
import film_wrap_1 from "../../../../assets/automotive/film_wrap/film_wrap_4.jpg";
import SystemDescription from "../../SystemDescription";

export default function AutomotiveTopCoat() {
  return (
    <div className="flex flex-row gap-10 justify-start flex-wrap">
      <SystemDescription
        img={sealingImg}
        title="Base & Clearcoat Painting"
        desc="Encore Automation's extensive knowledge and experience enable us
              to approach sealing projects and services from a strong foundation.
              We specialize in sealer application approaches, including interior seam, 
              finesse, LASD, hem, and UBC. Our integrated vision systems feature both fixed and robot-mounted 
              cameras, and we incorporate seam quality vision systems with interactive quality display monitors 
              to assist with operator inspection and repair."
        path="/systems/automotive/powder-application"
      />
      <SystemDescription
        img={film_wrap_1}
        title="Automated Film Wrap"
        desc="Encore Automation's extensive knowledge and experience enable us
              to approach sealing projects and services from a strong foundation.
              We specialize in sealer application approaches, including interior seam, 
              finesse, LASD, hem, and UBC. Our integrated vision systems feature both fixed and robot-mounted 
              cameras, and we incorporate seam quality vision systems with interactive quality display monitors 
              to assist with operator inspection and repair."
        path="/systems/automotive/automated-film-wrap"
      />
      <SystemDescription
        img={sealingImg}
        title="Bedliner Spray"
        desc="Encore Automation's extensive knowledge and experience enable us
              to approach sealing projects and services from a strong foundation.
              We specialize in sealer application approaches, including interior seam, 
              finesse, LASD, hem, and UBC. Our integrated vision systems feature both fixed and robot-mounted 
              cameras, and we incorporate seam quality vision systems with interactive quality display monitors 
              to assist with operator inspection and repair."
        path="/systems/automotive/powder-application"
      />
      <SystemDescription
        img={sealingImg}
        title="Cavity Wax"
        desc="Encore Automation's extensive knowledge and experience enable us
              to approach sealing projects and services from a strong foundation.
              We specialize in sealer application approaches, including interior seam, 
              finesse, LASD, hem, and UBC. Our integrated vision systems feature both fixed and robot-mounted 
              cameras, and we incorporate seam quality vision systems with interactive quality display monitors 
              to assist with operator inspection and repair."
        path="/systems/automotive/powder-application"
      />
    </div>
  );
}
