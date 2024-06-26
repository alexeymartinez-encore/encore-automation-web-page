import Footer from "../UI/Footer";
import SupportSection from "./SupportSection";
import SupportSectionHeading from "./SupportSectionHeading";
import SupportWelcome from "./SupportWelcome";

export default function SupportLanding() {
  return (
    <div>
      <SupportWelcome />
      <div className="flex flex-col gap-20 px-5 md:px-20 py-10">
        <SupportSectionHeading />
        <SupportSection />
      </div>
      <Footer />
    </div>
  );
}
