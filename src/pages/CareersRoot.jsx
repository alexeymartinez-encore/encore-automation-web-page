import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";
import Header from "../components/Header/Header";

export default function CareersRootLayout() {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}
