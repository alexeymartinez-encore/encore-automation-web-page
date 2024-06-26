import { Link } from "react-router-dom";
import encoreOffice from "../../assets/encore-office.png";

import FooterLinkSections from "./FooterLinksSection";
import FooterContactSection from "./FooterContactSection";

export default function Footer() {
  return (
    <footer className="px-5 py-5 bg-gray-900 md:px-20 2xl:px-40">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between text-center text-white py-20">
        <FooterLinkSections />
        <FooterContactSection />
      </div>
      <hr></hr>
      <div className="text-white font-thin text-sm py-5">
        <span className="py-10">
          © 2024 Encore Automation, LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
