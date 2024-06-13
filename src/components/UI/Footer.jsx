import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-20 py-5 bg-gray-900 ">
      <div className="grid grid-cols-5 grid-rows-1 text-white py-20">
        <div className="flex flex-col">
          <h1 className="text-md font-bold py-5">Solutions</h1>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Automotive
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Aerospace
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            General Industry
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-md font-bold py-5">Support</h1>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Emergency Service
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Service Ticket
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Remote Diagnostic Support
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Spare Parts RFQ
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-md font-bold py-5">Company</h1>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            About
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Blog
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Careers
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Partners
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-md font-bold py-5">Legal</h1>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Claim
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Privacy
          </Link>
          <Link className="font-thin py-3 hover:text-blue-500 transform duration-200">
            Terms
          </Link>
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
      <hr></hr>
      <div className="text-white font-thin text-sm py-5">
        <span className="py-10">
          © 2024 Encore Automation, LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
