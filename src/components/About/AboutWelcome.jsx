import autoImg from "../../assets/automotive/auto_industry.png";

export default function AboutWelcome() {
  return (
    <div className="h-full w-full flex justify-around px-40 py-20 bg-gray-100 border-0">
      <div className="flex flex-col justify-between pb-0 pr-20">
        {/* <h1 className="text-lg font-light opacity-50 ">About Us</h1> */}
        <h3 className="text-5xl font-normal pb-2 text-blue-600">
          Advancing Automated Systems and Services.
        </h3>
        {/* <hr className="border-red-500 my-5"></hr> */}
        <h3 className="pb-5 text-xl font-thin py-5">
          At Encore, we are dedicated to customer satisfaction through advancing
          automated systems and services, specializing in paint and powder
          applications, material dispensing, and vision-aided robotics.
        </h3>
        <button
          className=" bg-blue-500 border text-white py-5 rounded-md hover:bg-blue-400
                         hover:text-white transform duration-500"
        >
          Learn More
        </button>
      </div>
      <img src={autoImg} className=" rounded-md shadow-lg h-80" />
    </div>
  );
}
