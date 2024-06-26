export default function ExperienceCard({ title, desc }) {
  return (
    <div
      className="flex flex-col items-center justify-start p-5
                    md:p-10"
    >
      <h1
        className="text-3xl font-bold p-5 text-center
                   md:text-5xl "
      >
        {title}
      </h1>
      <p className="text-center 2xl:text-2xl">{desc}</p>
    </div>
  );
}
