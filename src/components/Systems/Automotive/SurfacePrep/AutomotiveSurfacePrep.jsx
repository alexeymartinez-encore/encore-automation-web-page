import AutomotiveFeatherDuster from "./AutomotiveFeatherDuster";
import AutomotiveFinishInspection from "./AutomotiveFinishInspection";
import AutomotivePainting from "./AutomotivePainting";
import AutomotiveSealing from "./AutomotiveSealing";
import AutomotiveSurfacePrepHeader from "./AutomotiveSurfacePrepHeader";

export default function AutomotiveSurfacePrep() {
  return (
    <div className="px-0 py-5 flex flex-col justify-center items-center ">
      <div className="my-3">
        <AutomotiveSurfacePrepHeader
          title="Surface Preparation"
          desc="In the automotive automation industry, surface preparation refers to
            the process of cleaning, treating, and conditioning the surface of
            vehicle parts and bodies to ensure optimal adhesion of coatings,
            paints, or other treatments. This process is crucial for achieving
            high-quality finishes, enhancing durability, and preventing defects.
            Encore offers surface finishes systems as following:"
        />
        <AutomotiveFeatherDuster />
      </div>
      <hr className="py-5"></hr>
      <div className="my-3">
        <AutomotiveSurfacePrepHeader
          title="Painting"
          desc="In the automotive automation industry, painting involves the
          application of coatings to vehicle parts and bodies to provide both
          aesthetic appeal and protection against environmental factors. This
          process is highly automated to ensure consistency, quality, and
          efficiency."
        />
        <AutomotivePainting />
      </div>
      <hr className="py-5"></hr>
      <div className="my-3">
        <AutomotiveSurfacePrepHeader
          title="Sealing"
          desc="
          In the automotive automation industry, sealing involves applying materials to vehicle joints, seams, 
          and gaps to prevent the ingress of water, air, dust, and noise, enhancing the vehicle's durability and comfort. 
          This process is typically automated to ensure precision and consistency. "
        />
        <AutomotiveSealing />
      </div>
      <hr className="py-5"></hr>

      <div className="my-3">
        <AutomotiveSurfacePrepHeader
          title="Finish Inspection"
          desc="
          In the automotive automation industry, finish inspection is the process of examining the final appearance 
          and quality of a vehicle's painted and coated surfaces to ensure they meet stringent standards. 
          This process is crucial for maintaining high-quality finishes and customer satisfaction."
        />
        <AutomotiveFinishInspection />
      </div>
    </div>
  );
}
