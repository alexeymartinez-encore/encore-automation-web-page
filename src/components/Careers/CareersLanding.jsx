import Footer from "../UI/Footer";
import CareerFit from "./CareerFit";
import CareerBenefits from "./CareersBenefits";
import CareersCta from "./CareersCta";
import CareersWelcome from "./CareersWelcome";

export default function CareersLanding() {
  return (
    <div className="px-0">
      <CareersWelcome />
      <CareersCta />
      <CareerFit />
      <CareerBenefits />
      <Footer />
    </div>
  );
}
