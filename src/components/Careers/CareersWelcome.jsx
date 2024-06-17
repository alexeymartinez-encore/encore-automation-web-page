import careersImg from "../../assets/careers.webp";

export default function CareersWelcome() {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${careersImg})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center  justify-center bg-gray-900 bg-opacity-50">
        <h1 className="text-white text-md font-light">Careers</h1>
        <h3 className="text-white text-5xl">Join Our Growing Team</h3>
      </div>
    </div>
  );
}