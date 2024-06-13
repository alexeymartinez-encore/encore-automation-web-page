export default function ExperienceSection() {
  return (
    <div id="experience" className="grid grid-cols-3 grid-rows-1 py-20">
      <div className="flex flex-col items-center justify-center p-10 border-r-2 ">
        <h1 className="text-5xl font-bold p-5">5+</h1>
        <p>Countries of operations</p>
      </div>
      <div className="flex flex-col items-center justify-center p-10 border-r-2">
        <h1 className="text-5xl font-bold p-5">20+</h1>
        <p>Years of industry experience</p>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold p-5">50+</h1>
        <p>Companies Served</p>
      </div>
      {/* <div className="p-10">4</div> */}
    </div>
  );
}
