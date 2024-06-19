import AerospacePainting from "./AerospacePainting";
import AerospaceSealing from "./AerospaceSealing";
import AerospaceSurfacePrep from "./AerospaceSurfacePrep";
import AerospaceWelcome from "./AerospaceWelcome";

export default function SystemsAerospace() {
  return (
    <div className="px-20 py-10">
      <AerospaceWelcome />
      <AerospacePainting />
      <AerospaceSealing />
      <AerospaceSurfacePrep />
    </div>
  );
}
