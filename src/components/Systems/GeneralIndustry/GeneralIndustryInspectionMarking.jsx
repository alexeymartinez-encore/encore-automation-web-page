import defectDetect from "../../../assets/automotive/defectDetection.jpeg";
import SectionDescription from "../SectionDescription";

export default function GeneralIndustryInspectionMarking() {
  return (
    <div className="mx-5 w-[40rem]">
      <SectionDescription
        title="Inspection & Marking"
        desc="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
        img={defectDetect}
      />
      {/* <div className="flex flex-col items-center">
        <SystemDescription
          img={aeroPainting}
          title="Painting"
          desc="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
        />
      </div> */}
    </div>
  );
}
