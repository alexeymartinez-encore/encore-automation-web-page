import giSealing from "../../../assets/generalIndustry/gi-sealing.png";
import SectionDescription from "../SectionDescription";

export default function GeneralIndustrySealing() {
  return (
    <div className="mx-5 w-[40rem]">
      <SectionDescription
        title="Sealing"
        desc="Encore Automation offers expert aerospace painting solutions, specializing in primers, 
        basecoats, clearcoats, and multi-component paints. We use advanced methods like electrostatic 
        guns and rotary atomizers, integrating vision systems for precision. Our services ensure optimal 
        performance from design to commissioning and training."
        img={giSealing}
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
