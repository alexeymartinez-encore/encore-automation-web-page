import AvailablePositions from "./AvailablePositions";
import CareerForm from "./CareerForm";

export default function CareerOpportunities() {
  return (
    <div className="flex justify-around my-10">
      <AvailablePositions />
      <CareerForm />
    </div>
  );
}
