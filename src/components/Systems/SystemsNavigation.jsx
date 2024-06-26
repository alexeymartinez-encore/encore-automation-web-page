import { NavLink } from "react-router-dom";

export default function SystemsNavigation() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "md:py-3 md:text-lg mx-1 md:mx-5 text-blue-500 px-2 md:px-5 text-blue-500 rounded-md border-b-2 border-blue-500"
      : "md:py-3 md:text-lg mx-1 md:mx-5 px-2 md:px-5 hover:text-blue-500 transition duration-300 rounded-md ";
  return (
    <div className="flex items-center md:justify-start justify-center md:items-start py-5 ">
      <NavLink to="/systems" className={navStyle} end>
        Automotive
      </NavLink>
      {/* <span className="bg-gray-500 w-1"></span> */}
      <NavLink to="/systems/aerospace" className={navStyle}>
        Aerospace
      </NavLink>
      {/* <span className="bg-gray-500 w-1"></span> */}
      <NavLink to="/systems/general-industry" className={navStyle}>
        General Industry
      </NavLink>
      {/* <NavLink to="/systems/general-industry" className={navStyle}>
        R&D
      </NavLink> */}
    </div>
  );
}
