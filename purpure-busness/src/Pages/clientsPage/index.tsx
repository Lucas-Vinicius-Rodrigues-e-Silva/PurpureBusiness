import { useContext } from "react";
import { Table } from "./table";
import { ClientContext } from "../../context/ClientContext";
import { UiDashboard } from "../../components/Interface";
import { ModalAddClient } from "../../components/Modal/clientsModal";

export const ClientPage = () => {
  const { clients, setModalIsOpen } = useContext(ClientContext);

  return (
    <UiDashboard companyName={"Matheus LTDA"}>
      <h2>clientes</h2>
      <input
        id="inputSearch"
        type="text"
        placeholder="Digitar Pesquisa"
        //onChange={}
      />
      <button onClick={() => setModalIsOpen(true)}>adicionar</button>
      <ModalAddClient></ModalAddClient>
      <Table></Table>
    </UiDashboard>
  );
};
