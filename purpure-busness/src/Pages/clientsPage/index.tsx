import { useContext, useEffect } from "react";
import { Table } from "./table";
import { ClientContext } from "../../context/ClientContext";
import { UiDashboard } from "../../components/Interface";
import { ModalAddClient } from "../../components/Modal/clientsModal/modalNewClient";
import { ModalEditClient } from "../../components/Modal/clientsModal/modalEdit";
import { DeleteClient } from "../../components/Modal/clientsModal/ModalDelete";
import { HeaderSearch } from "./dashboardClient";
import { BiSearchAlt2 } from "react-icons/bi";
import { Text } from "../../styles/text/text";
import { AuthContext } from "../../context/AuthContext";

export const ClientPage = () => {
  const { user } = useContext(AuthContext);

  const { setModalIsOpen, filterClients, setFiltered, filtered, loadingClients } =
    useContext(ClientContext);

  useEffect(() => {
    loadingClients()
  }, [])

  return (
    <UiDashboard companyName={`${user?.commercialName}`}>
      <title>Clientes | Purpure Business</title>
      <ModalAddClient></ModalAddClient>
      <ModalEditClient></ModalEditClient>
      <DeleteClient></DeleteClient>
      <HeaderSearch>
        <Text tag="h2">Clientes</Text>
        <div className="div_register">
          <button onClick={() => setModalIsOpen(true)}>Novo Cliente</button>
          <div className="searchBar">
            <input
              id="inputSearch"
              type="text"
              placeholder="Buscar cliente"
              onChange={(e) => setFiltered(e.currentTarget.value)}
            />
            <BiSearchAlt2
              className="icon"
              onClick={() => filterClients(filtered)}
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
