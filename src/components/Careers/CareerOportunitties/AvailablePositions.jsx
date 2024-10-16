import { careerPositions } from "../../util/careers-positions";
import PositionLink from "./PositionLink";

export default function AvailablePositions() {
  return (
    <div className="py-5">
      <div className="py-5">
        <p className="text-md font-thin">Main Job board</p>

        <h1 className="text-3xl text-blue-500">
          Current Openenings At Encore Automation
        </h1>
      </div>
      <div className="py-5">
        {careerPositions.map((position) => (
          <PositionLink
            key={position.id}
            position={position.position}
            location={position.location}
            path={position.id}
          />
        ))}
        {/* <PositionLink
          position="Mechanical Engineer"
          location="Auburn Hills, MI"
        />
        <PositionLink
          position="Mechanical Engineer"
          location="Auburn Hills, MI"
        /> */}
      </div>
    </div>
  );
}
