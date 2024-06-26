import { Link } from "react-router-dom";
import encoreOffice from "../../assets/encore-office.png";

export default function FooterContactSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5">
        <img className="rounded-sm md:w-[20rem]" src={encoreOffice} />
        <div className="flex flex-col gap-1 text-gray-100 text-opacity-50 py-1">
          <Link
            to="https://www.google.com/maps/place/Encore+Automation+LLC/@42.6375662,-83.2434625,16z/data=!3m1!4b1!4m6!3m5!1s0x8824c07aaa7d1e21:0x129b6e7cc15d299!8m2!3d42.6375623!4d-83.2408876!16s%2Fg%2F1td2vj72?entry=ttu"
            className="text-xs hover:text-gray-200 transition duration-300"
          >
            50 Corporate Dr, Auburn Hills, MI 48326
          </Link>
          <Link
            to="tel:+12482530200"
            className="text-xs hover:text-gray-200 transition duration-300"
          >
            (248)-253-0200
          </Link>
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="py-1">Any Inquiries or Concerns?</h1>
        <p className="font-thin text-sm">
          Let us know your email and we'll get in touch with you
        </p>
        <div className="flex py-5">
          <input
            placeholder="Enter your email."
            className="bg-gray-800 rounded px-2"
          />
          <button className="mx-2 bg-blue-500 md:bg-transparent hover:bg-blue-500  text-white font-light hover:text-white md:my-0 py-2 md:py-2 px-3 md:px-5 border border-blue-500 hover:border-transparent rounded transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
