import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

import "./App.css";
import AboutPage from "./pages/About";
import SystemsPage from "./pages/Systems";
import SupportPage from "./pages/Support";
import CareersPage from "./pages/Careers";
import EmployeePortalPage from "./pages/EmployePortal";
import SystemsRootLayout from "./pages/SystemsRoot";
import AerospacePage from "./pages/Aerospace";
import GeneralIndustryPage from "./pages/GeneralIndustry";
import SystemsAutomotive from "./components/Systems/Automotive/SystemsAutomotive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/systems",
        element: <SystemsRootLayout />,
        children: [
          { index: true, element: <SystemsAutomotive /> },
          { path: "/systems/aerospace", element: <AerospacePage /> },
          {
            path: "/systems/general-industry",
            element: <GeneralIndustryPage />,
          },
        ],
      },
      { path: "/support", element: <SupportPage /> },
      { path: "/careers", element: <CareersPage /> },
      { path: "/employee-portal", element: <EmployeePortalPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
