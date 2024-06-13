import { Link } from "react-router-dom";
import supportImg from "../../assets/supportPage.webp";

export default function SupportWelcome() {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${supportImg})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center  justify-center bg-gray-900 bg-opacity-50">
        <h1 className="text-white text-md font-light">
          Welcome to Encore Automation Support
        </h1>
        <h3 className="text-white text-5xl">How can we help?</h3>
        {/* <Link className="bg-blue-500 text-white py-3 px-5 mt-5 rounded-sm hover:bg-blue-400 transform duration-300">
          Contact Us
        </Link> */}
      </div>
    </div>
  );
}
