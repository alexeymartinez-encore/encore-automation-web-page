import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <form className="flex flex-col items-center  p-10 my-[10rem] mx-[30rem] rounded-md">
      {/* <h1 className="pb-5 text-4xl text-blue-900">Login</h1> */}
      <input
        className="border border-blue-100 h-10 w-[20rem] my-2 text-center rounded-md "
        type="email"
        placeholder="Email"
      />
      <input
        className="border border-blue-100 h-10 w-[20rem] my-2 text-center rounded-md"
        type="password"
        placeholder="Create password"
      />
      <input
        className="border border-blue-100 h-10 w-[20rem] my-2 text-center rounded-md"
        type="password"
        placeholder="Confirm password"
      />

      <button
        className="bg-blue-500 text-white w-[20rem] h-10 rounded-md my-2 hover:bg-blue-400 transition duration-300"
        type="submit"
      >
        Signup
      </button>
      <p className="text-sm">
        Already have an account?{" "}
        <Link className="text-blue-500 text-sm" to="/employee-portal/login">
          Login
        </Link>
      </p>
    </form>
  );
}
