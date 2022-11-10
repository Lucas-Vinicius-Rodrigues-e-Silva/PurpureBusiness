import { ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Li } from "../../styles/dashboardBase";
import { UiBase } from "./style";

interface iUiDashboardProps {
  children: ReactNode;
  companyName: string;
}

export const UiDashboard = ({ children, companyName }: iUiDashboardProps) => {
  const location = useLocation();

  const defineActive = (path: string) => {
    if (location.pathname === "/" + path) {
      return "true";
    }
    return "false";
  };

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    toast.info("Você foi desconectado!");
  };

  return (
    <UiBase id="dashboardInterface">
      <header>
        <div>
          <i className="bx bx-menu"></i>
        </div>
        <h2>{companyName}</h2>
      </header>
      <aside>
        <nav>
          <ul>
            <Li active={defineActive("dashboard")}>
              <Link to="/dashboard">
                <i className="bx bx-home"></i>
                <span>Dashboard</span>
              </Link>
            </Li>
            <Li active={defineActive("dashboard/stock")}>
              <Link to="/dashboard/stock">
                <i className="bx bxs-cube"></i>
                <span>Estoque</span>
              </Link>
            </Li>
            <Li active={defineActive("dashboard/sales")}>
              <Link to="/dashboard/sales">
                <i className="bx bx-store"></i>
                <span>Vendas</span>
              </Link>
            </Li>
            <Li active={defineActive("dashboard/clients")}>
              <Link to="/dashboard/clients">
                <i className="bx bx-user"></i>
                <span>Clientes</span>
              </Link>
            </Li>
          </ul>
        </nav>
        <nav>
          <div onClick={logOut}>
            <i className="bx bx-exit"></i>
            <span>Sair</span>
          </div>
        </nav>
      </aside>
      <main>{children}</main>
    </UiBase>
  );
};
