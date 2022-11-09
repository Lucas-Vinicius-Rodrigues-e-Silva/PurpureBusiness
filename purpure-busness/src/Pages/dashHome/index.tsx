import { useContext } from "react";
import { UiDashboard } from "../../components/Interface";
import { SalesModal } from "../../components/Modal/salesModal";
import { SaleContext } from "../../context/SalesContext";
import { ModalAddClient } from "../../components/Modal/clientsModal/modalNewClient";
import { ModalEditClient } from "../../components/Modal/clientsModal/modalEdit";
import { DeleteClient } from "../../components/Modal/clientsModal/ModalDelete";
import {
  DashboardQuickCards,
  DashboardBallInfo,
  DashboardColumnInfo,
} from "../../styles/dashboardBase";
import { Title3 } from "../../styles/elements";
import { ClientContext } from "../../context/ClientContext";
import { ChoseClientModal } from "../../components/Modal/clientsModal/modalDeleteDashboard";

let exemplos = {
  nomeFantasia: "Empresa Tal LTDA",
  produtosCadastrados: "96",
  saldoMensal: "1.500,00",
  produtosEstoque: "42",
};

export const DashHome = () => {
  const { setSaleModalIsOpen } = useContext(SaleContext);
  const { setModalIsOpen, ChoseClient } = useContext(ClientContext);

  return (
    <UiDashboard companyName={exemplos.nomeFantasia}>
      <title>Dashboard | Purpure Business</title>
      <ChoseClientModal></ChoseClientModal>
      <ModalAddClient></ModalAddClient>
      <ModalEditClient></ModalEditClient>
      <DeleteClient></DeleteClient>
      <SalesModal></SalesModal>
      <div id="mainDashboard">
        <div className="hot-info">
          <DashboardBallInfo>
            <span>{exemplos.produtosCadastrados}</span>
            <Title3 tag="h3">Produtos cadastrados</Title3>
          </DashboardBallInfo>
          <DashboardColumnInfo>
            <Title3 tag="h3">Saldo mensal</Title3>
            <span>R$ {exemplos.saldoMensal}</span>
          </DashboardColumnInfo>
          <DashboardBallInfo>
            <span>{exemplos.produtosEstoque}</span>
            <Title3 tag="h3">Produtos em Estoque</Title3>
          </DashboardBallInfo>
        </div>
        <div>
          <h2>Ações rápidas</h2>
          <section>
            <DashboardQuickCards
              color="add"
              onClick={() => setModalIsOpen(true)}
            >
              <i className="bx bxs-plus-circle"></i>
              <Title3 tag="h3">Cadastrar cliente</Title3>
            </DashboardQuickCards>
            <DashboardQuickCards
              color="edit"
              onClick={() => ChoseClient("edit", true)}
            >
              <i className="bx bxs-pencil"></i>
              <Title3 tag="h3">Editar Cliente</Title3>
            </DashboardQuickCards>
            <DashboardQuickCards
              color="delete"
              onClick={() => ChoseClient("delete", true)}
            >
              <i className="bx bxs-minus-circle"></i>
              <Title3 tag="h3">Deletar cliente</Title3>
            </DashboardQuickCards>
            <DashboardQuickCards
              onClick={() => setSaleModalIsOpen(true)}
              color="add"
            >
              <i className="bx bxs-purchase-tag"></i>
              <Title3 tag="h3">Vender produto</Title3>
            </DashboardQuickCards>
            <DashboardQuickCards color="add">
              <i className="bx bxs-component"></i>
              <Title3 tag="h3">Adicionar estoque</Title3>
            </DashboardQuickCards>
            <DashboardQuickCards color="add">
              <i className="bx bx-cube-alt"></i>
              <Title3 tag="h3">Cadastrar produto</Title3>
            </DashboardQuickCards>
          </section>
        </div>
      </div>
    </UiDashboard>
  );
};
