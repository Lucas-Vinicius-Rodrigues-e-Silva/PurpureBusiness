import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, FilledBtn, Title3 } from "../../../styles/elements";
import { Text } from "../../../styles/text/text";
import { iProducts, ProductContext } from "../../../context/ProductsContext";
import { addInventorySchema } from "../../../schemas/addInventorySchema";
import { DashboardQuickCards } from "../../../styles/dashboardBase";
import {
  StyledDivAddInventoryModal,
  StyledDivAddInventoryModalBtn,
} from "./addInventoryModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    transform: "translate(-50%, -50%)",
  },
};

const AddInventoryModal = () => {
  const { editProduct, loadingClientProducts, products } =
    useContext(ProductContext);

  const { register, handleSubmit } = useForm<iProducts>({
    resolver: yupResolver(addInventorySchema),
  });

  const addInventorySubmit = (data: iProducts) => {
    const allProducts: any = products.find(
      (product) => product.product_name === data.product_name
    );
    const newData: any = {
      product_name: data.product_name,
      product_stock: data.product_stock + allProducts.product_stock
    }

    editProduct(newData, allProducts.id);
    loadingClientProducts();
    setIsOpen(false);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    loadingClientProducts();
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    // references are now sync'd and can be accessed.
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <StyledDivAddInventoryModalBtn>
      <DashboardQuickCards id="100%" color="add" onClick={openModal}>
        {" "}
        <i className="bx bxs-component"></i>
        <Title3 tag="h3">Adicionar estoque</Title3>
      </DashboardQuickCards>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <StyledDivAddInventoryModal>
          <div>
            <h2>Adicionar estoque</h2>
            <button onClick={() => closeModal()}>
              <AiFillCloseCircle size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit(addInventorySubmit)}>
            <div className="productAndQuantity">
              <div className="productName">
                <Text tag="label" className="headline">
                  Nome do produto
                </Text>
                <select id="ProductName" {...register("product_name")}>
                  <option>Selecione um produto</option>
                  {products.map((product) => (
                    <option key={product.id}>{product.product_name}</option>
                  ))}
                </select>
              </div>
              <div className="actualInventory">
                <Text tag="label" className="headline">
                  Quantidade:
                </Text>
                <Input
                  id={"productInventory"}
                  type={"text"}
                  placeholder={"0"}
                  {...register("product_stock")}
                />
              </div>
            </div>
            <FilledBtn type="submit">Confirmar mudanças</FilledBtn>
          </form>
        </StyledDivAddInventoryModal>
      </Modal>
    </StyledDivAddInventoryModalBtn>
  );
};

export default AddInventoryModal;
