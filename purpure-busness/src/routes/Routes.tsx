import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/landingPage";
import LoginPage from "../Pages/loginPage";
import RegisterPage from "../Pages/registerPage"
import DashHome from "../Pages/dashHome";
import InventoryPage from "../Pages/inventoryPage";
import { SalesPage } from "../Pages/dashSales";
import SalePovider from "../context/SalesContext";
import { NotFound } from "../Pages/notFound";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<DashHome />} />
      <Route path="dashboard/stock" element={<InventoryPage/>} />
      <Route path="dashboard/sales" element={ <SalePovider> <SalesPage /> </SalePovider>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
