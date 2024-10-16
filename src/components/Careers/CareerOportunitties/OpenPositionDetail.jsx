import { useParams } from "react-router-dom";
import PositionItem from "./PositionItem";
import { careerPositions } from "../../util/careers-positions";

export default function OpenPositionDetail() {
  const params = useParams();
  const itemId = params.positionId; // route identifier
  console.log(itemId);
  console.log(typeof itemId);
  const item = careerPositions.filter(
    (position) => position.id === Number(itemId)
  );
  console.log(careerPositions);
  console.log(item);

  if (item.length === 1) {
    return (
      <div>
        <PositionItem item={item[0]} />
      </div>
    );
  }

  return (
    <div className="py-[10rem] text-center">
      <h1 className="text-5xl text-red-500">No Page Found</h1>
    </div>
  );
}
