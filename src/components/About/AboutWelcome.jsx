import aboutImg from "../../assets/about.jpeg";

export default function AboutWelcome() {
  return (
    <div className="h-full w-full flex flex-wrap justify-around items-center px-40 py-20  border-0">
      <div className="flex flex-col gap-5 w-[30rem] ">
        <h6 className="font-bold text-sm text-blue-500">
          ENCORE AUTOMATION'S CULTURE
        </h6>
        <h1 className="font-bold text-7xl">Automate your success</h1>
        <p className="font-thin">
          At Encore, we are dedicated to advancing automated systems and
          services, specializing in paint and powder applications, material
          dispensing, and vision-aided robotics. Our commitment to customer
          satisfaction drives us to deliver innovative solutions that enhance
          efficiency and precision in every project we undertake.
        </p>
      </div>
      <div>
        <img
          src={aboutImg}
          className=" rounded-full shadow-xl h-[30rem] w-[30rem] object-cover "
        />
      </div>
    </div>
  );
}
