import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, FilledBtn } from "../../../styles/elements";
import { Text } from "../../../styles/text/text";
import { iProducts, ProductContext } from "../../../context/ProductsContext";
import { editProductSchema } from "../../../schemas/editProductSchema";

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

const EditProductModal = ({productProps}:any) => {
  const { editProduct, loadingClientProducts } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProducts>({
    resolver: yupResolver(editProductSchema),
  });

  const editProductSubmit = async (data: iProducts) => {
    editProduct(data, productProps.id);
    loadingClientProducts()
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
    <div>
      <button onClick={openModal}>Editar produto</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Editar produto</h2>
        <button onClick={() => closeModal()}>
          <AiFillCloseCircle />
        </button>
        <form onSubmit={handleSubmit(editProductSubmit)}>
          <Text tag="label" className="headline">
           Nome do produto
          </Text>
          <Input
            id={"ProductName"}
            type={"text"}
            placeholder={productProps.product_name}
            {...register("product_name")}
          />
          <p>{errors.product_name?.message}</p>
          <Text tag="label" className="headline">
          Valor do produto
          </Text>
          <Input
            id={"productPrice"}
            type={"text"}
            placeholder={productProps.product_value}
            {...register("product_value")}
          />
          <p>{errors.product_value?.message}</p>
          <Text tag="label" className="headline">
         Estoque atual
          </Text>
          <Input
            id={"productInventory"}
            type={"text"}
            placeholder={productProps.product_stock}
            {...register("product_stock")}
            disabled={true}
          />
          <FilledBtn type="submit">Confirmar mudanças</FilledBtn>
        </form>
      </Modal>
    </div>
  );
};

export default EditProductModal;
