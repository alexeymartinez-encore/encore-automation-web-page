import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="flex flex-col items-center  p-10 my-[10rem] mx-[30rem] rounded-md">
      {/* <h1 className="pb-5 text-4xl text-blue-900">Login</h1> */}
      <input
        className="border border-blue-100 h-10 w-[20rem] my-2 text-center rounded-md "
        type="email"
        placeholder="email"
      />
      <input
        className="border border-blue-100 h-10 w-[20rem] my-2 text-center rounded-md"
        type="password"
        placeholder="password"
      />
      <Link className="text-blue-500 text-sm my-2" to="">
        Forgot Password?
      </Link>
      <button
        className="bg-blue-500 text-white w-[20rem] h-10 rounded-md my-2 hover:bg-blue-400 transition duration-300"
        type="submit"
      >
        Login
      </button>
      <p className="text-sm">
        Don't have an account?{" "}
        <Link className="text-blue-500 text-sm" to="">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
