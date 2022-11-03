import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/landingPage";
import LoginPage from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage";
import DashHome from "../Pages/dashHome";
import { ClientPage } from "../Pages/clientsPage";
import ClientPovider from "../context/ClientContext";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<DashHome />} />
      <Route
        path="dashboard/clients"
        element={
          <ClientPovider>
            <ClientPage />
          </ClientPovider>
        }
      />
    </Routes>
  );
};
