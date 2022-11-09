import { useContext } from "react";
import { UiDashboard } from "../../components/Interface";
import { SaleContext } from "../../context/SalesContext";
import { Table } from "./table";
import { SalesModal } from "../../components/Modal/salesModal";
import { BiSearchAlt2 } from "react-icons/bi";
import { HeaderSearch } from "./dashboardSales";
import { AuthContext } from "../../context/AuthContext";

export const SalesPage = () => {
  const { user } = useContext(AuthContext);
  const { setSaleModalIsOpen, filter, setFilter, salesFiltered } =
    useContext(SaleContext);

  return (
    <UiDashboard companyName={`${user?.commercialName}`}>
      <title>Vendas | Purpure Business</title>
      <SalesModal></SalesModal>
      <HeaderSearch>
        <h1>Histórico de vendas</h1>
        <div className="btnSearch">
          <button onClick={() => setSaleModalIsOpen(true)}>Vender</button>
          <div className="searchBar">
            <input type="text" placeholder="Buscar vendas" onChange={(e) => {
              setFilter(e.target.value);
              salesFiltered(e.target.value)
            }} />
            <BiSearchAlt2
              className="icon"
              onClick={() => salesFiltered(filter)}
            />
          </div>
        </div>
      </HeaderSearch>
      <section>
        <Table />
      </section>
    </UiDashboard>
  );
};
