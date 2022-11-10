import ReactModal from "react-modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { iSales, SaleContext } from "../../../context/SalesContext";
import { ClientContext } from "../../../context/ClientContext";
import { ProductContext } from "../../../context/ProductsContext";

const formSchema = yup.object().shape({
  cliente_sale_product: yup.string().required("campo obrigatório"),
  product_sale: yup.string().required("campo obrigatório"),
  product_sale_quant: yup.number().required("campo obrigatório"),
  total_sale_value: yup.number().required("campo obrigatório"),
});

export const SalesModal = () => {
  const { registerSale, saleModalIsOpen, setSaleModalIsOpen } =
    useContext(SaleContext);

  const { products, loadingClientProducts } = useContext(ProductContext);
  const { clients, loadingClients } = useContext(ClientContext);

  useEffect(() => {
    loadingClientProducts()
    loadingClients()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSales>({
    resolver: yupResolver(formSchema),
  });

  const submit = (data: iSales) => {
    const id = localStorage.getItem("@USER_ID");
    const newData: iSales = { ...data, userId: parseInt(`${id}`) };
    registerSale(newData);
    setSaleModalIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={saleModalIsOpen}
      onRequestClose={() => setSaleModalIsOpen(false)}
      overlayClassName="modal-overlay"
      className="modal-content"
    >

      <div>
        <h1>Vender Produto</h1>
        <span onClick={() => setSaleModalIsOpen(false)}>X</span>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">Selecionar o Cliente:</label>
        <select id="cliente_sale_product" {...register("cliente_sale_product")}>
          <option value="">Selecione o Cliente:</option>
          {clients.map((client, i) => (
            <option key={i} value={client.client_name}>
              {client.client_name}
            </option>
          ))}
        </select>
        <p className="errorMsg">{errors.cliente_sale_product?.message}</p>
        <label htmlFor="">Selecionar o Produto:</label>
        <select id="product_sale" {...register("product_sale")}>
          <option value="">Selecione o Produto:</option>
          {products.map((client, i) => (
            <option key={i} value={client.product_name}>
              {client.product_name}
            </option>
          ))}
        </select>
        <p className="errorMsg">{errors.product_sale?.message}</p>
        <div className="inputsBox">
          <label htmlFor="">QTDE.:</label>
          <input type="text" {...register("product_sale_quant")} />
          <label htmlFor="">Valor do produto:</label>
          <input type="text" {...register("total_sale_value")} />
        </div>
        <div>
          <button
            className="cancelBtn"
            onClick={() => setSaleModalIsOpen(false)}
          >
            Cancelar
          </button>
          <button className="registerBtn" type="submit">
            Registrar venda
          </button>
        </div>
      </form>

    </ReactModal >
  );
};
