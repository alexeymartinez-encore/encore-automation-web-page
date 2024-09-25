import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SupportTypeCard({
  title,
  desc,
  icon,
  subtitle,
  btnText,
  link,
}) {
  return (
    <div
      className="flex flex-col justify-around items-center w-[18rem]  my-5 md:my-0
                 p-5 rounded-sm h-[25rem] shadow-md md:shadow-none hover:shadow-md transform duration-300"
    >
      <div className="flex flex-col justify-center items-center gap-1">
        <FontAwesomeIcon className="text-blue-500 h-10 py-3" icon={icon} />
        <h1 className="text-xl font-normal text-blue-900">{title}</h1>
        <h3 className="text-md font-light text-blue-900">{subtitle}</h3>
      </div>

      {/* <hr className=" border border-blue-500 w-10"></hr> */}
      <p className="font-thin text-center text-blue-900">{desc}</p>
      <Link
        to={link}
        className="py-3 w-40 text-center bg-blue-500 hover:bg-blue-400 trasform duration-300 text-white rounded-md"
      >
        {btnText}
      </Link>
    </div>
  );
}

{
  /* <Link
to="tel:+12482530200"
className="text-xs hover:text-gray-200 transition duration-300"
>
(248)-253-0200
</Link> */
}
