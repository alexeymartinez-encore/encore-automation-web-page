import { Link } from "react-router-dom";

export default function CareersCta() {
  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-20 py-10 font-thin">
      <p className="py-5 md:py-3 md:text-lg">
        We believe that our success is driven by the passion and expertise of
        our talented team. We are dedicated to fostering a collaborative and
        inclusive work environment where every team member can thrive and
        contribute to groundbreaking projects. At Encore Automation, you'll have
        the opportunity to work with state-of-the-art technology, alongside some
        of the brightest minds in the industry. Whether you are an experienced
        professional or a recent graduate, we offer a range of career
        opportunities that cater to various skill sets and career aspirations.
      </p>
      <p className="py-5 md:py-3 md:text-lg">
        If you are enthusiastic about innovation, eager to solve complex
        challenges, and ready to make a significant impact, Encore Automation is
        the place for you. Join us and be a part of a dynamic team that is
        shaping the future of industrial automation. Explore our current job
        openings and discover how you can contribute to our journey of
        excellence and innovation.
      </p>
      <Link className="my-3 bg-blue-500 text-white text-lg py-3 px-20 rounded-sm hover:bg-blue-400 transform duration-300">
        Career Opportunities
      </Link>
    </div>
  );
}
