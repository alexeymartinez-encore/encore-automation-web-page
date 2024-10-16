import { Link } from "react-router-dom";

export default function PositionLink({ position, location, path }) {
  return (
    <div className="p-3 border-b hover:bg-gray-100">
      <Link to={`/careers/open-positions/${path}`}>
        <h1 className="text-lg font-medium text-blue-500">{position}</h1>
        <p className="font-thin">{location}</p>
      </Link>
    </div>
  );
}
