import Welcome from "../Shared/Welcome";
import Footer from "../UI/Footer";
import SupportSection from "./SupportSection";
import SupportSectionHeading from "./SupportSectionHeading";
import supportImg from "../../assets/support/supportPage.webp";

export default function SupportLanding() {
  return (
    <div>
      <Welcome
        title="How can we help?"
        subtitle="Welcome to Encore Automation Support"
        img={supportImg}
      />
      <div className="flex flex-col gap-20 px-5 md:px-20 py-10">
        <SupportSectionHeading />
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
}
