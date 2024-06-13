import { useLocation } from "react-router-dom";
import Hamburger from "./HamburgerMenu";
import NavigationLinks from "./NavigationLinks";
import NavigationLogo from "./NavigationLogo";

export default function Header() {
  const { hash, pathname, search } = useLocation();

  console.log(pathname);

  let bgColor = "rgba(107, 114, 128,1)";

  if (pathname === "/") {
    bgColor = "rgba(255, 255, 255, 1)";
  }

  return (
    <header className="flex items-center justify-between px-10 py-3 md:py-5 bg-white bg-opacity-50 relative z-20">
      <NavigationLogo />
      <Hamburger />
      <div
        className="hidden md:flex md:flex-row text-white px-10"
        style={{ color: bgColor }}
      >
        <NavigationLinks />
      </div>
    </header>
  );
}
