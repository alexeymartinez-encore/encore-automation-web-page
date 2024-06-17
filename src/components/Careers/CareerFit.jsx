import fitImg from "../../assets/careersFit.webp";

export default function CareerFit() {
  return (
    <div className="px-20 text-blue-900 bg-gray-100 -skew-y-3 my-0 py-10 ">
      <div className="py-20 skew-y-3">
        <h1 className="text-2xl font-medium mb-4 border-b-2 border-blue-900 py-1">
          You may be a good fit if you:
        </h1>
        <div className="flex ">
          <ul className="font-thin list-disc list-inside flex flex-col gap-2 p-5">
            <li>
              Thrive on Innovation and are constantly pushing the boundaries of
              what's possible in automation technology.
            </li>
            <li>
              Are someone who loves exploring new ideas and bringing creative
              solutions to life, you'll feel right at home.
            </li>
            <li>
              Are passionate for automation and enjoy the challenge of solving
              complex problems.
            </li>
            <li>
              Enjoy collaborating with a team of talented engineers, designers,
              and problem-solvers, you'll find our work environment highly
              rewarding.
            </li>
            <li>
              Have a strong work ethic and are committed to delivering
              high-quality results, you'll fit right in.
            </li>
            <li>
              Love learning new skills and staying up-to-date with the latest
              advancements in technology.
            </li>
            <li>
              Enjoy a fast-paced, dynamic work environment where you can take on
              new challenges and grow your career.
            </li>
            <li>
              Appreciate a balanced lifestyle. We believe in the importance of
              work-life balance. If you value having time for personal interests
              and hobbies outside of work.
            </li>
          </ul>
          <img className="h-[25rem] rounded-sm" src={fitImg} />
        </div>
      </div>
    </div>
  );
}
