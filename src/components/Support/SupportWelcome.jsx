import { Link } from "react-router-dom";
import supportImg from "../../assets/support/supportPage.webp";

export default function SupportWelcome() {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${supportImg})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center  justify-center bg-gray-900 bg-opacity-50">
        <h1 className="text-white text-sm md:text-md font-light">
          Welcome to Encore Automation Support
        </h1>
        <h3 className="text-white text-4xl md:text-5xl">How can we help?</h3>
      </div>
    </div>
  );
}
