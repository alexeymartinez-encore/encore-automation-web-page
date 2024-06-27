import Footer from "../UI/Footer";
import AboutHistory from "./AboutHistory";
import AboutStatements from "./AboutStatements";
import AboutWelcome from "./AboutWelcome";

export default function AboutLanding() {
  return (
    <div className="">
      <AboutWelcome />
      <AboutHistory />
      {/* <AboutStatements /> */}
      <Footer />
    </div>
  );
}
