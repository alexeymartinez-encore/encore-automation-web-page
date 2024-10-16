import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import "./App.css";
import AboutPage from "./pages/About";
import SystemsRootLayout from "./pages/SystemsRoot";
import SystemsAutomotive from "./components/Systems/Automotive/SystemsAutomotive";
import AutomotiveProductDetail from "./components/Systems/Automotive/AutomotiveProductDetail";
import AerospacePage from "./pages/Aerospace";
import GeneralIndustryPage from "./pages/GeneralIndustry";
import SupportPage from "./pages/Support";
import CareersRootLayout from "./pages/CareersRoot";
import CareersPage from "./pages/Careers";
import OpenPositionsPage from "./pages/OpenPositions";
import EmployeePortalPage from "./pages/EmployePortal";
import AerospaceProductDetail from "./components/Systems/Aerospace/AerospaceProductDetail";
import GeneralIndustryProductDetail from "./components/Systems/GeneralIndustry/GeneralIndustryProductDetail";
import Hypothesis from "./components/util/Hypothesis";
import OpenPositionDetail from "./components/Careers/CareerOportunitties/OpenPositionDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "systems",
        element: <SystemsRootLayout />,
        children: [
          { path: "automotive", element: <SystemsAutomotive /> },
          {
            path: "automotive/:automotiveProductId",
            element: <AutomotiveProductDetail />,
          },
          { path: "aerospace", element: <AerospacePage /> },
          {
            path: "aerospace/:aerospaceProductId",
            element: <AerospaceProductDetail />,
          },
          { path: "general-industry", element: <GeneralIndustryPage /> },
          {
            path: "general-industry/:generalIndustryProductId",
            element: <GeneralIndustryProductDetail />,
          },
        ],
      },
      { path: "support", element: <SupportPage /> },
      {
        path: "careers",
        element: <CareersRootLayout />,
        children: [
          { index: true, element: <CareersPage /> },
          { path: "open-positions", element: <OpenPositionsPage /> },
          {
            path: "open-positions/:positionId",
            element: <OpenPositionDetail />,
          },
        ],
      },
      {
        path: "employee-portal",
        element: <EmployeePortalPage />,
        // children: [
        //   { index: true, element: <EmployeePortalPage /> },
        //   { path: "login", element: <Login /> },
        //   { path: "signup", element: <Signup /> },
        //   {
        //     path: "dashboard",
        //     element: <DashboardRootLayout />,
        //     children: [
        //       { index: true, element: <PortalHome /> },
        //       { path: "timesheets", element: <Timesheets /> },
        //       { path: "expenses", element: <Expenses /> },
        //       { path: "events", element: <Events /> },
        //     ],
        //   },
        // ],
      },
    ],
  },
]);

function App() {
  return (
    <Hypothesis>
      <RouterProvider router={router} />
    </Hypothesis>
  );
}

export default App;
