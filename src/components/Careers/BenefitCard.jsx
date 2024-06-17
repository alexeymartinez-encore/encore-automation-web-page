import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BenefitCard({ icon, text }) {
  return (
    <div className="flex justify-start items-center w-[25rem] bg-gray-100 rounded-sm py-5 px-10 shadow-sm">
      <FontAwesomeIcon className="text-blue-500 h-5 p-3" icon={icon} />
      <p className="text-center">{text}</p>
    </div>
  );
}
