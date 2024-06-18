// import sealingCar from "../../../assets/sealing-car.jpeg";
import carSunset from "../../../assets/automotive/car.png";

export default function SystemsAutomotiveWelcome() {
  return (
    <div className=" py-5">
      <img
        className="w-full h-[15rem] opacity-70 rounded-lg object-cover"
        src={carSunset}
        alt="Sealing Car"
      />
      <h1 className="text-6xl text-blue-900 font-light pt-5 ">
        Driving the future of automotive manufacturing.
      </h1>
      <p className="text-xl  font-thin pt-5 text-blue-900">
        Encore Automation, revolutionizes the automotive industry through
        state-of-the-art automation in painting, sealing, surface finishing,
        coating, and inspection processes. Our cutting-edge robotic systems and
        advanced technologies ensure unparalleled quality, efficiency, and
        precision, delivering flawless finishes that meet the highest industry
        standards. Committed to excellence, we provide sustainable and
        cost-effective solutions that enhance productivity and safety.
      </p>
    </div>
  );
}
