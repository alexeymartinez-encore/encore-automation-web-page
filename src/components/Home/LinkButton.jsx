import { Link } from "react-router-dom";

export default function LinkButton({ link, children }) {
  return (
    <Link
      to={link}
      className=" text-white font-light  my-1 py-3 px-20 rounded border 
                    md:px-15 md:py-5 md:text-xl 2xl:py-7
                 hover:bg-blue-500 hover:text-white hover:border-transparent
                   transition duration-300"
    >
      {children}
    </Link>
  );
}
