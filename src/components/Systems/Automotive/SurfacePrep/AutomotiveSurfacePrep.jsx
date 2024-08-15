import Card from "../../../UI/Card";
import SectionHeading from "../../SectionHeading";
import AutomotiveFeatherDuster from "./AutomotiveFeatherDuster";
import AutomotiveFinishInspection from "./AutomotiveFinishInspection";
import AutomotivePainting from "./AutomotivePainting";
import AutomotiveSealing from "./AutomotiveSealing";

export default function AutomotiveSurfacePrep() {
  return (
    <div className="px-0 py-5 flex flex-col">
      <Card>
        <SectionHeading
          title="Sealing"
          desc="
          In the automotive automation industry, sealing involves applying materials to vehicle joints, seams, 
          and gaps to prevent the ingress of water, air, dust, and noise, enhancing the vehicle's durability and comfort. 
          This process is typically automated to ensure precision and consistency. "
        />
        <AutomotiveSealing />
      </Card>
      <Card>
        <SectionHeading
          title="Primer"
          desc="In the automotive automation industry, primer application involves applying a preparatory coating to vehicle
          surfaces before the final paint layer is applied. This process enhances paint adhesion, ensures uniform coverage,
          and provides protection against corrosion, increasing the vehicle's durability and finish quality.
          Primer application is typically automated to ensure accuracy, efficiency, and consistent quality across 
          the vehicle's surfaces."
        />
        <AutomotivePainting />
      </Card>
      {/* <Card>
        <SectionHeading
          title="Primer"
          desc="
          In the automotive automation industry, sealing involves applying materials to vehicle joints, seams, 
          and gaps to prevent the ingress of water, air, dust, and noise, enhancing the vehicle's durability and comfort. 
          This process is typically automated to ensure precision and consistency. "
        />
        <AutomotiveSealing />
      </Card> */}
      <Card>
        <SectionHeading
          title="Surface Preparation"
          desc="In the automotive automation industry, surface preparation refers to
            the process of cleaning, treating, and conditioning the surface of
            vehicle parts and bodies to ensure optimal adhesion of coatings,
            paints, or other treatments. This process is crucial for achieving
            high-quality finishes, enhancing durability, and preventing defects.
            Encore offers surface finishes systems as following"
        />
        <AutomotiveFeatherDuster />
      </Card>
      <Card>
        <SectionHeading
          title="Topcoat"
          desc="In the automotive automation industry, topcoat application involves applying the final layer of paint to
          the vehicle’s exterior surfaces, giving it its color and glossy finish. This layer not only defines the vehicle's
          appearance but also provides protection against environmental elements, such as UV rays, moisture, and chemicals.
          Topcoat application is typically automated to ensure an even, flawless finish while optimizing efficiency and
          reducing material waste across the production process."
        />
        <AutomotivePainting />
      </Card>
      <Card>
        <SectionHeading
          title="Quality Control"
          desc="In the automotive automation industry, quality control ensures that vehicles meet strict performance, 
          safety, and appearance standards. Automated systems use sensors and cameras to detect defects and assess components,
          ensuring consistency, reducing errors, and improving production efficiency."
        />
        <AutomotiveFinishInspection />
      </Card>
    </div>
  );
}
