import sealingCar from "../../assets/sealing-car.jpeg";

export default function SystemsWelcome() {
  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
        src={sealingCar}
        alt="Sealing Car"
      />
      <div className="flex flex-col items-center text-white bg-blue-500 bg-opacity-30 mx-0 py-20  relative">
        <h1 className="text-6xl font-bold py-5  ">
          TURN KEY AUTOMATED SYSTEMS
        </h1>
      </div>
    </div>
  );
}
