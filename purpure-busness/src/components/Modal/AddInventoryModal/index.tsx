import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, FilledBtn } from "../../../styles/elements";
import { Text } from "../../../styles/text/text";
import { iProducts, ProductContext } from "../../../context/ProductsContext";
import { editProductSchema } from "../../../schemas/editProductSchema";
import { StyledDivEditProductModal, StyledDivEditProductModalBtn } from "../../../styles/editProductModal";
import {BiEdit} from "react-icons/bi"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddInventoryModal = () => {
  const { editProduct, loadingClientProducts, products } = useContext(ProductContext);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProducts>({
    resolver: yupResolver(editProductSchema),
  });

  const addInventorySubmit = async (data: iProducts) => {
    console.log(data)
    // editProduct(data, data.id);
    // loadingClientProducts();
    // setIsOpen(false);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(): void {
    loadingClientProducts()
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    // references are now sync'd and can be accessed.
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <StyledDivEditProductModalBtn>
      <button onClick={openModal}><BiEdit size={24} /></button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <StyledDivEditProductModal>
          <div>
            <h2>Editar produto</h2>
            <button onClick={() => closeModal()}>
              <AiFillCloseCircle  size={24}/>
            </button>
          </div>
          <form onSubmit={handleSubmit(addInventorySubmit)}>
            <Text tag="label" className="headline">
              Nome do produto
            </Text>
            <select id="ProductName" {...register("product_name")} {...register("id")} >
                <option>Selecione um produto</option>
                {products.map((product) => <option key={product.id}>{product.product_name}</option>)}
            </select>
            <div>
              <div className="inventoryInput">
                <Text tag="label" className="headline">
                  Estoque atual:
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
        </StyledDivEditProductModal>
      </Modal>
    </StyledDivEditProductModalBtn>
  );
};

export default AddInventoryModal;
