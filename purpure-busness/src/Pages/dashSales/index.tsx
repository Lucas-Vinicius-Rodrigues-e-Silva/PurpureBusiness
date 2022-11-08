import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";

import { iSales, SaleContext } from "../../context/SalesContext";
import "./modal.css";
import * as yup from "yup";
import { Table } from "./table";
import { ClientContext } from "../../context/ClientContext";
import { ProductContext } from "../../context/ProductsContext";
import { UiDashboard } from "../../components/Interface";

let exemplos = {
  nomeFantasia: "Empresa Tal LTDA",
};
//constantes para teste
const clients = [
  {
    client_name: "pipoquinha maluca",
  },
  {
    client_name: "vendinha maluca",
  },
  {
    client_name: "sinuquinha maluca",
  },
];

const products = [
  {
    product_name: "cerveja",
  },
  {
    product_name: "vinho",
  },
  {
    product_name: "suco de laranja",
  },
];

const formSchema = yup.object().shape({
  cliente_sale_product: yup.string().required("campo obrigatório"),
  product_sale: yup.string().required("campo obrigatório"),
  product_sale_quant: yup.number().required("campo obrigatório"),
  total_sale_value: yup.number().required("campo obrigatório"),
  userId: yup.number(),
});

export const SalesPage = () => {
  const { sales, registerSale } = useContext(SaleContext);
  // const {clients} = useContext(ClientContext)
  // const {products} = useContext(ProductContext)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSales>({
    resolver: yupResolver(formSchema),
  });

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const submit = (data: iSales) => {
    console.log(data);
    registerSale(data);
    closeModal();
  };

  return (
    <UiDashboard companyName={exemplos.nomeFantasia}>
      <title>Vendas | Purpure Business</title>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div>
          <h1>Vender Produto</h1>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="">Selecionar o Cliente:</label>
          <select
            id="cliente_sale_product"
            {...register("cliente_sale_product")}
          >
            <option value="cliente1">cliente1</option>
            {clients.map((client, i) => (
              <option key={i} value={client.client_name}>
                {client.client_name}
              </option>
            ))}
          </select>
          <p>{errors.cliente_sale_product?.message}</p>
          <label htmlFor="">Selecionar o Produto:</label>
          <select id="product_sale" {...register("product_sale")}>
            <option value="produto1">produto1</option>
            {products.map((client, i) => (
              <option key={i} value={client.product_name}>
                {client.product_name}
              </option>
            ))}
          </select>
          <p>{errors.product_sale?.message}</p>
          <div>
            <label htmlFor="">QTDE.:</label>
            <input type="number" {...register("product_sale_quant")} />
            <p>{errors.product_sale_quant?.message}</p>
            <label htmlFor="">Valor desta operação:</label>
            <input type="number" {...register("total_sale_value")} />
            <p>{errors.total_sale_value?.message}</p>
            <label htmlFor="">ID empresa</label>
            <input type="number" {...register("userId")} />
          </div>
          <button onClick={closeModal}>Cancelar</button>
          <input type="submit" value="Registrar venda" />
        </form>
      </ReactModal>
      <div>
        <h1>Histórico de vendas</h1>
        <div>
          <button onClick={openModal}>Vender</button>
          <div>
            <input type="text" />
            <i></i>
          </div>
        </div>
      </div>
      <section>
        <Table />
      </section>
    </UiDashboard>
  );
};
