import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RemoteSupportCard({ icon, description }) {
  return (
    <div className="flex flex-col items-center shadow-md p-5 rounded-md">
      <FontAwesomeIcon className="text-blue-500  h-[2rem] p-5" icon={icon} />
      <p className="font-thin text-sm text-center ">{description}</p>
    </div>
  );
}
