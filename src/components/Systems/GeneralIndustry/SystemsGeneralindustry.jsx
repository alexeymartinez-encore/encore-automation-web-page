import carSunset from "../../../assets/generalIndustry/robotic-automation.jpg";

export default function SystemsGeneralIndustry() {
  return (
    <div className=" px-20 py-5 h-[40rem]">
      <img
        className="w-full h-[15rem] object-cover opacity-70 rounded-lg"
        src={carSunset}
        alt="Sealing Car"
      />
      <h1 className="text-6xl text-blue-900 font-light pt-5">
        Elevating the future of general industry automation.
      </h1>
      <p className="text-xl  font-thin pt-5 text-blue-900">
        At Encore Automation, we are pioneers in the field of industrial
        automation, specializing in advanced technologies for painting, sealing,
        surface finishing, coating, and inspection processes. Our
        state-of-the-art robotic systems and precision engineering ensure
        unmatched quality, efficiency, and reliability across various
        industries. Committed to excellence, we provide sustainable and
        cost-effective solutions that enhance productivity and safety, driving
        the future of automation excellence.
      </p>
    </div>
  );
}
