export default function AutomotiveSurfacePrepHeader({ title, desc }) {
  return (
    <div className="flex flex-col  py-5 rounded-sm text-center bg-gray-100">
      <h1 className="text-4xl text-blue-500 font-light">{title}</h1>
      <h6 className="text-lg font-thin py-3">{desc}</h6>
    </div>
  );
}
