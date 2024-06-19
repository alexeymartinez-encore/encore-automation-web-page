import aerospace from "../../../assets/aerospace/aerospace.webp";

export default function AerospaceWelcome() {
  return (
    <div className=" py-5 ">
      <img
        className="w-full h-[15rem] opacity-70 rounded-lg"
        src={aerospace}
        alt="Sealing Car"
      />
      <h1 className="text-6xl text-blue-900 font-light pt-5">
        Soaring to new heights in aerospace automation.
      </h1>
      {/* <img
    className="w-full h-[15rem] opacity-60 rounded-lg py-5"
    src={sealingCar}
    alt="Sealing Car"
  /> */}
      <p className="text-xl  font-thin pt-5 text-blue-900">
        At Encore Automation, we are at the forefront of innovation in the
        aerospace industry, providing cutting-edge automation for painting,
        sealing, surface finishing, coating, and inspection processes. Our
        advanced robotic systems and state-of-the-art technologies ensure
        unparalleled quality, precision, and efficiency, meeting the stringent
        requirements of aerospace manufacturing. We are committed to delivering
        sustainable and cost-effective solutions that enhance productivity and
        safety.
      </p>
    </div>
  );
}
