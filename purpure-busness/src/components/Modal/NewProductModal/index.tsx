import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { newProductSchema } from "../../../schemas/newProductSchema";
import { Input, FilledBtn, OutlinedBtn, Title3 } from "../../../styles/elements";
import { Text } from "../../../styles/text/text";
import { iProducts, ProductContext } from "../../../context/ProductsContext";
import { StyledDivNewProductModal,StyledDivNewProductModalBtn } from "../../../styles/newProductModal";
import { DashboardQuickCards } from "../../../styles/dashboardBase";

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
  const { registerProduct, loadingClientProducts, styleModal } = useContext(ProductContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);
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

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal ():void {
     setIsOpen(false);
    
  }

  return (
    <StyledDivNewProductModalBtn>
      { styleModal ? <FilledBtn onClick={openModal}>Cadastrar produto </FilledBtn> : <DashboardQuickCards id="100%" color="add" onClick={openModal}>  <i className="bx bx-cube-alt"></i>
      <Title3 tag="h3">Cadastrar produto</Title3>
      </DashboardQuickCards>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
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
