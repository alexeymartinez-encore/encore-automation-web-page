import { Link } from "react-router-dom";
import encoreOffice from "../../assets/encore-office.png";

export default function FooterLink({ link, title }) {
  return (
    <Link
      to={link}
      className="font-thin py-3 hover:text-blue-500 transform duration-200 text-sm md:py-5"
    >
      {title}
    </Link>
  );
}
