import Footer from "../UI/Footer";
import SupportSection from "./SupportSection";
import SupportSectionHeading from "./SupportSectionHeading";
import SupportWelcome from "./SupportWelcome";

export default function SupportLanding() {
  return (
    <div>
      <SupportWelcome />
      <div className="flex flex-col gap-20 px-20 py-10">
        <SupportSectionHeading />
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
}

{
  /* <p>
          In addition to our exceptional on-site service, we have integrated
          advanced remote diagnostic access into all our systems. This
          cutting-edge feature allows us to monitor and troubleshoot issues in
          real-time, ensuring that potential problems are identified and
          resolved before they escalate. Our remote diagnostic capabilities
          enable us to provide immediate assistance, minimizing downtime and
          maximizing the performance and reliability of your automation systems.
        </p>
        <p>
          {" "}
          With Encore Automation, you can trust that your operations are in safe
          hands. Our comprehensive emergency service approach combines the
          expertise of our seasoned technicians with innovative technology,
          ensuring that we are always prepared to keep your systems running
          smoothly, no matter the circumstances.
        </p> */
}
