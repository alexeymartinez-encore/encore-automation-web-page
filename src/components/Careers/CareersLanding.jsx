import Welcome from "../Shared/Welcome";
import CareerFit from "./CareerFit";
import CareerBenefits from "./CareersBenefits";
import CareersCta from "./CareersCta";
import careersImg from "../../assets/career/careers.webp";

export default function CareersLanding() {
  return (
    <div className="px-0">
      <Welcome
        title="Join Our Growing Team"
        subtitle="Careers"
        img={careersImg}
      />
      <CareersCta />
      <CareerFit />
      <CareerBenefits />
    </div>
  );
}
