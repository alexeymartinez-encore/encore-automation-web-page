import DivisionUI from "../UI/DivisionUI";
import Footer from "../UI/Footer";
import CredentialsSection from "./CredentialsSection";
import ExperienceSection from "./ExperienceSection";
import IndustriesSection from "./IndustriesSection";
import WelcomeSection from "./WelcomeSection";

export default function LandingPage() {
  return (
    <>
      <WelcomeSection />
      <ExperienceSection />
      {/* <CredentialsSection /> */}
      {/* <DivisionUI /> */}
      <IndustriesSection />
      <CredentialsSection />
      {/* <ExperienceSection /> */}
      <Footer />
    </>
  );
}
