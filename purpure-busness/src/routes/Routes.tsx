import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/landingPage";
import LoginPage from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage"
import DashHome from "../Pages/dashHome";
import { SalesPage } from "../Pages/dashSales";
import SalePovider from "../context/SalesContext";
import { NotFound } from "../Pages/notFound";
import { useEffect } from "react";
import NotAllowed from "../Pages/notAllowed";
import { useNavigate, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "../components/protectedRoutes";


export const AppRoutes = () => {
  const navigate = useNavigate()
  const location = useLocation();
  useEffect(() => {
    if (window.innerWidth <= 815 && location.pathname.includes("dashboard")) {
      navigate("/mobile", { replace: false })
    }

  }, [location, navigate])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashHome />}/>
      </Route>
      <Route path="dashboard/sales" element={<SalePovider> <SalesPage /> </SalePovider>} />
      <Route path="mobile" element={<NotAllowed />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
