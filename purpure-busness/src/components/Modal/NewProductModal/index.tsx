import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { newProductSchema } from "../../../schemas/newProductSchema";
import { Input, FilledBtn } from "../../../styles/elements";
import { Text } from "../../../styles/text/text";
import { iProducts, ProductContext } from "../../../context/ProductsContext";
import {
  StyledDivNewProductModal,
  StyledDivNewProductModalBtn,
} from "../../../styles/newProductModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

const NewProductModal = () => {
  const { registerProduct, loadingClientProducts } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProducts>({
    resolver: yupResolver(newProductSchema),
  });

  const newProductSubmit = async (data: iProducts) => {
    const userId = Number(localStorage.getItem("@USER_ID"));
    const newData = { ...data, userId };
    registerProduct(newData);
    loadingClientProducts();
    setIsOpen(false);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    // references are now sync'd and can be accessed.
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <StyledDivNewProductModalBtn>
      <FilledBtn onClick={openModal}>Novo Produto</FilledBtn>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledDivNewProductModal>
          <div>
            <h2>Cadastrar novo produto</h2>
            <button onClick={() => closeModal()}>
              <AiFillCloseCircle size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit(newProductSubmit)}>
            <Text tag="label" className="headline">
              Nome do produto
            </Text>
            <Input
              id={"ProductName"}
              type={"text"}
              placeholder={"Insira o nome do produto"}
              {...register("product_name")}
            />
            <p>{errors.product_name?.message}</p>
            <div>
              <div className="priceInput">
                <Text tag="label" className="headline">
                  Valor do produto:
                </Text>
                <Input
                  id={"productPrice"}
                  type={"text"}
                  placeholder={"R$               0"}
                  {...register("product_value")}
                />
                <p>{errors.product_value?.message}</p>
              </div>
              <div className="inventoryInput">
                <Text tag="label" className="headline">
                  Estoque inicial:
                </Text>
                <Input
                  id={"productInventory"}
                  type={"text"}
                  placeholder={"0"}
                  {...register("product_stock")}
                />
                <p>{errors.product_stock?.message}</p>
              </div>
            </div>
            <FilledBtn type="submit">Cadastrar produto</FilledBtn>
          </form>
        </StyledDivNewProductModal>
      </Modal>
    </StyledDivNewProductModalBtn>
  );
};

export default NewProductModal;
