import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function RootLayout() {
  const location = useLocation();
  const noHeaderRoutes = [
    "/employee-portal/dashboard",
    "/employee-portal/dashboard/timesheets",
    "/employee-portal/dashboard/events",
    "/employee-portal/dashboard/expenses",
  ];
  return (
    <>
      {!noHeaderRoutes.includes(location.pathname) && <Header />}

      {/* <div className="absolute h-full w-full top-0 bg-gray-100 bg-opacity-90 -z-20"></div> */}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
