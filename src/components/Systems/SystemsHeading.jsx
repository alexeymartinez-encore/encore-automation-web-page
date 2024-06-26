// import sealingCar from "../../../assets/sealing-car.jpeg";
// import carSunset from "../../../assets/automotive/car.png";

export default function SystemsHeading({ title, desc, img }) {
  return (
    <div className=" py-5">
      <img
        className="w-full h-[15rem] opacity-70 rounded-lg object-cover"
        src={img}
        alt="Sealing Car"
      />
      <h1 className="text-3xl md:text-6xl text-blue-900 font-light pt-5 ">
        {title}
      </h1>
      <p className="text-md md:text-xl  font-thin pt-5 text-blue-900">{desc}</p>
    </div>
  );
}
