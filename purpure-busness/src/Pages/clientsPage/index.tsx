import { useContext } from "react";
import { Table } from "./table";
import { ClientContext } from "../../context/ClientContext";
import { UiDashboard } from "../../components/Interface";
import { ModalAddClient } from "../../components/Modal/clientsModal/modalNewClient";
import { ModalEditClient } from "../../components/Modal/clientsModal/modalEdit";
import { DeleteClient } from "../../components/Modal/clientsModal/ModalDelete";

export const ClientPage = () => {
  const { setModalIsOpen, filterClients } = useContext(ClientContext);

  return (
    <UiDashboard companyName={"Matheus LTDA"}>
      <h2>clientes</h2>
      <input
        id="inputSearch"
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => filterClients(e.currentTarget.value)}
      />
      <button onClick={() => setModalIsOpen(true)}>adicionar</button>
      <ModalAddClient></ModalAddClient>
      <ModalEditClient></ModalEditClient>
      <DeleteClient></DeleteClient>
      <Table></Table>
    </UiDashboard>
  );
};
