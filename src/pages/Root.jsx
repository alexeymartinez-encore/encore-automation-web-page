import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      {/* <div className="absolute h-full w-full top-0 bg-gray-100 bg-opacity-90 -z-20"></div> */}
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
