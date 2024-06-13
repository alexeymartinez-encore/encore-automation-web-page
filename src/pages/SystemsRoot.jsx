import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import SystemsLanding from "../components/Systems/SystemsLanding";

export default function SystemsRootLayout() {
  return (
    <>
      <SystemsLanding />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
