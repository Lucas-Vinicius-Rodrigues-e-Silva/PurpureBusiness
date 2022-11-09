import { useContext, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UiDashboard } from "../../components/Interface";
import { SalesModal } from "../../components/Modal/salesModal";
import { SaleContext } from "../../context/SalesContext";
import { ModalAddClient } from "../../components/Modal/clientsModal/modalNewClient";
import { ModalEditClient } from "../../components/Modal/clientsModal/modalEdit";
import { DeleteClient } from "../../components/Modal/clientsModal/ModalDelete";
import api from "../../services/api";
import {
  DashboardQuickCards,
  DashboardBallInfo,
  DashboardColumnInfo,
} from "../../styles/dashboardBase";
import { Title3 } from "../../styles/elements";
import { ClientContext } from "../../context/ClientContext";
import { ChoseClientModal } from "../../components/Modal/clientsModal/modalChoseClient";

export const DashHome = () => {
  const navigate = useNavigate();
  const { setSaleModalIsOpen } = useContext(SaleContext);
  const token = localStorage.getItem("@accessToken");
  const id = localStorage.getItem("@USER_ID");

  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [productsRegistered, setProductsRegistered] = useState("");
  const [monthlyBalance, setMonthlyBalance] = useState(0);
  const [registeredClients, setRegisteredClients] = useState("");

  async function fistSetUp() {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.get(`users/${id}?_embed=clients`);
      const { clients } = response.data;
      const { commercialName } = response.data;
      setCompanyName(commercialName);
      setRegisteredClients(clients.length);
    } catch (err: any) {
      if (err.response.status === 401) {
        toast.error("Sessão expirada, faça login novamente");
        navigate("/login");
        localStorage.clear();
      } else {
        toast.error("Erro ao carregar dados, tente novamente");
      }
    }
  }

  async function salesListing() {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const response = await api.get(`/users/${id}?_embed=sales`);
    const { sales } = response.data;
    if (sales.length === 0) {
      setMonthlyBalance(0);
    } else if (sales.length > 0) {
      const total = sales.reduce(
        (acc: any, curr: { total_sale_value: any }) =>
          acc + curr.total_sale_value,
        0
      );
      setMonthlyBalance(total);
    }
  }

  async function productsListing() {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const response = await api.get(`/users/${id}?_embed=products`);
    const { products } = response.data;
    setProductsRegistered(products.length);
  }

  fistSetUp();
  salesListing();
  productsListing();
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const { setModalIsOpen, ChoseClient } = useContext(ClientContext);

  return (
    <UiDashboard companyName={companyName}>
      <title>Dashboard | Purpure Business</title>

      <ChoseClientModal></ChoseClientModal>
      <ModalAddClient></ModalAddClient>
      <ModalEditClient></ModalEditClient>
      <DeleteClient></DeleteClient>

      <span id="loading">
        {loading ? (
          <div className="loading">
            <div className="whiteBlock">
              <ReactLoading type="bars" color="#7D02DD" />
              <p>Carregando...</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </span>

      <SalesModal></SalesModal>
      <div id="mainDashboard">
        <div className="hot-info">
          <DashboardBallInfo>
            <span>{productsRegistered}</span>
            <Title3 tag="h3">Produtos cadastrados</Title3>
          </DashboardBallInfo>
          <DashboardColumnInfo>
            <Title3 tag="h3">Saldo mensal</Title3>
            <span>
              R$ {(monthlyBalance.toFixed(2) + "").split(".").join(",")}
            </span>
          </DashboardColumnInfo>
          <DashboardBallInfo>
            <span>{registeredClients}</span>
            <Title3 tag="h3">Clientes Cadastrados</Title3>
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
