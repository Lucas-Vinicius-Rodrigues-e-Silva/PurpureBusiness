import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/landingPage";
import LoginPage from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage" 

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};
