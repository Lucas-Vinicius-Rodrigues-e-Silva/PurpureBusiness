import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewProductSchema } from "../../schemas/NewProductSchema";
import {Input, FilledBtn} from "../../styles/elements";
import { Text } from "../../styles/text/text";
import { iProducts, ProductContext } from "../../context/ProductsContext";

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

const NewProductModal = () => {

  const userId = Number(localStorage.getItem("@USER_ID"))

  const {registerProduct} = useContext(ProductContext);

  const { register, handleSubmit, formState: { errors } } = useForm<iProducts>({
    resolver: yupResolver(NewProductSchema),
  });

  const newProductSubmit = async (data: iProducts) => {
   registerProduct(data, userId)

  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Novo Produto</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Cadastrar novo produto</h2>
        <button onClick={() => closeModal()}>
          <AiFillCloseCircle />
        </button>
        <form onSubmit={handleSubmit(newProductSubmit)}>
           <Text tag="label" className="headline">Nome do produto</Text>
          <Input id={"ProductName"} type={"text"}  placeholder={"Insira o nome do produto"} {...register("product_name")}/>
          <p>{errors.product_name?.message}</p> 
          <Text tag="label" className="headline">Valor do produto</Text>
          <Input id={"productPrice"} type={"text"}  placeholder={"0"} {...register("product_value")}/> 
          <p>{errors.product_value?.message}</p> 
          <Text tag="label" className="headline">Estoque inicial</Text>
          <Input id={"productInventory"} type={"text"}  placeholder={"0"} {...register("product_stock")}/> 
          <p>{errors.product_stock?.message}</p> 
          <FilledBtn type="submit">Cadastrar produto</FilledBtn> 
        </form>
      </Modal>
    </div>
  );
};

export default NewProductModal;
