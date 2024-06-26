import { Link } from "react-router-dom";

export default function IndustryCard({ img, link, services, title }) {
  return (
    <div
      className="relative group flex flex-col items-center justify-center mx-5 my-5 shadow-xl
                    md:mx-60 md:my-10"
    >
      <Link to={link} className="relative text-white border-gray-500 ">
        <img
          src={img}
          className="shadow-lg rounded z-10
          group:hover:bg-black"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0  bg-black bg-opacity-50 rounded transform duration-300
                        group-hover:opacity-100"
        >
          <h1
            className="text-white text-center text-lg border-b-4 border-red-600
                        md:text-3xl"
          >
            Services
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 text-white py-2 md:p-10">
            {services.map((service) => (
              <p
                className="m-1 text-md text-center md:m-5 md:text-2xl"
                key={service.id}
              >
                {service.serviceName}
              </p>
            ))}
          </div>
          <div
            className="bg-blue-500  text-md md:text-xl text-white font-light  
                            py-1 px-3  border border-blue-500  rounded transition duration-300
                            hover:bg-blue-500 hover:border-transparent hover:text-white
                            md:py-4 md:px-10"
          >
            Learn More
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-10 opacity-100 group-hover:opacity-0 rounded transform duration-300">
          <h1 className="text-white text-center text-3xl  md:text-5xl border-b-4 border-red-600 bg-gray-700 bg-opacity-55 p-5 ">
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
}
