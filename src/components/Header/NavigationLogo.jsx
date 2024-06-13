import { NavLink } from "react-router-dom";
import encoreLogo from "../../assets/Encore-Automation-Logo.jpg";
export default function NavigationLogo() {
  return (
    <NavLink to="/">
      <img
        src={encoreLogo}
        alt="Encore Automation Logo"
        className="h-20 rounded-sm"
      />
    </NavLink>
  );
}
