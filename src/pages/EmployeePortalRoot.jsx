import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";

export default function EmployeePortalRootLayout() {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
