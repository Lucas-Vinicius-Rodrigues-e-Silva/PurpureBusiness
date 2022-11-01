import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/landingPage";
import LoginPage from "./Pages/loginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
