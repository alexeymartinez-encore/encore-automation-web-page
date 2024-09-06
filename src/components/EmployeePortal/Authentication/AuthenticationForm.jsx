import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthenticationForm() {
  const login = true;
  return (
    <>
      <Link to="login">Login</Link>
    </>
  );
}
