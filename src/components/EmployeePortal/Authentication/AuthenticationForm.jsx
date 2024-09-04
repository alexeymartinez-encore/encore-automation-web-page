import Login from "./Login";
import Signup from "./Signup";

export default function AuthenticationForm() {
  const login = false;
  return (
    <>
      {login && <Login />}
      {!login && <Signup />}
    </>
  );
}
