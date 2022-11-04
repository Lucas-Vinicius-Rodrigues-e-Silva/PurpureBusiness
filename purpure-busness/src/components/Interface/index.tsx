import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Li } from "../../styles/dashboardBase";

interface iUiDashboardProps {
    children: ReactNode;
    companyName: string;
}


export const UiDashboard = ({ children, companyName }: iUiDashboardProps) => {

    const defineActive = (path: string) => {
        if (window.location.pathname === "/" + path) {
            return "true";
        }
        return "false";
    }

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div id="dashboardInterface">
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
                            <Link to={"/dashboard"}>
                                <i className='bx bx-home'></i>
                                <span>Dashboard</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("dashboard/stock")}>
                            <Link to={"stock"}>
                                <i className='bx bxs-cube'></i>
                                <span>Estoque</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("dashboard/sales")}>
                            <Link to={"sales"}>
                                <i className='bx bx-store'></i>
                                <span>Vendas</span>
                            </Link>
                        </Li>
                        <Li active={defineActive("dashboard/clients")}>
                            <Link to={"clients"}>
                                <i className='bx bx-user'></i>
                                <span>Clientes</span>
                            </Link>
                        </Li>
                    </ul>
                </nav>
                <nav>
                    <div>
                        <i className="bx bx-exit" onClick={logOut}></i>
                        <span>Sair</span>
                    </div>
                </nav>
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}

export default UiDashboard