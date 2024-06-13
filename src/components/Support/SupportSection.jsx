import SupportTypeCard from "./SupportTypeCard";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";

export default function SupportSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between my-0 flex-wrap mb-10">
      <SupportTypeCard
        title="Emergency Service "
        subtitle="24 / 7 Support"
        desc=" We take emergency service very seriously. Understanding the critical 
        nature of automation systems, our professionals are always prepared to respond 
        swiftly and effectively to any emergency."
        icon={faWrench}
        // cta="Call us"
      />
      <SupportTypeCard
        title="Service Ticket"
        subtitle="24 / 7 Support"
        desc="Customers can easily create service tickets, allowing our experienced support team to promptly
        and efficiently resolve issues, ensuring minimal disruption and optimal system performance."
        icon={faTicket}
        // cta="Create Ticket"
      />
      <SupportTypeCard
        title="Remote Diagnostic Support"
        subtitle="24 / 7 Support"
        desc="We offer advanced remote diagnostics, monitoring and troubleshooting issues in real-time to provide
        immediate assistance, minimizing downtime and maximizing system reliability."
        icon={faLaptopFile}
        // cta="Call us"
      />
      <SupportTypeCard
        title="Spare Parts"
        subtitle="24 / 7 Support"
        desc=" We take emergency service very seriously. Understanding the critical 
        nature of automation systems, our professionals are always prepared to respond 
        swiftly and effectively to any emergency."
        icon={faGear}
        // cta="Request Parts"
      />
    </div>
  );
}
