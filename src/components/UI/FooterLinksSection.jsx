import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";

export default function FooterLinkSections() {
  return (
    <div className=" flex flex-col md:flex-row gap-10 md:gap-40 2xl:gap-60">
      <div className="flex flex-col">
        <FooterTitle title="Solution" />
        <FooterLink link="/systems/automotive" title="Automotive" />
        <FooterLink link="/systems/aerospace" title="Aerospace" />
        <FooterLink link="/systems/general-industry" title="General Industry" />
      </div>
      <div className="flex flex-col">
        <FooterTitle title="Support" />
        <FooterLink link="/" title="Emergency System" />
        <FooterLink link="/" title="Service Ticket" />
        <FooterLink link="/" title="Remote Diagnostic Support" />
        <FooterLink link="/" title="Spare Parts RFQ" />
      </div>
      <div className="flex flex-col">
        <FooterTitle title="Company" />
        <FooterLink link="/about" title="About" />
        <FooterLink link="/employee-portal" title=" Employee Portal" />
        <FooterLink link="/careers" title="Careers" />
        <FooterLink link="/" title="Partners" />
      </div>
      {/* <div className="flex flex-col">
        <FooterTitle title="Legal" />
        <FooterLink link="/" title="Claim" />
        <FooterLink link="/" title="Privacy" />
        <FooterLink link="/" title="Terms" />
      </div> */}
    </div>
  );
}
