import Footer from "../UI/Footer";
import CareerFit from "./CareerFit";
import CareersCta from "./CareersCta";
import CareersWelcome from "./CareersWelcome";

export default function CareersLanding() {
  return (
    <div className="px-0">
      <CareersWelcome />
      <CareersCta />
      <CareerFit />
      <Footer />
    </div>
  );
}
