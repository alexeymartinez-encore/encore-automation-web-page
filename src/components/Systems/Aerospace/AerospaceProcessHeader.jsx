export default function AerospaceProcessHeader({ title, desc }) {
  return (
    <div className="flex flex-col  p-5 rounded-sm text-center bg-gray-100 mb-5">
      <h1 className="text-4xl text-blue-500 font-light">{title}</h1>
      <h6 className="text-lg font-thin py-3">{desc}</h6>
    </div>
  );
}
