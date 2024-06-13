import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300"
      : "hover:text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300";

  return (
    <>
      <NavLink to="/about" className={navStyle} end>
        Company
      </NavLink>
      <NavLink to="/systems" className={navStyle}>
        Systems
      </NavLink>
      <NavLink to="/support" className={navStyle}>
        Support
      </NavLink>
      <NavLink to="/careers" className={navStyle}>
        Careers
      </NavLink>
      <NavLink to="/employee-portal" className={navStyle}>
        Employee Portal
      </NavLink>
    </>
  );
}
