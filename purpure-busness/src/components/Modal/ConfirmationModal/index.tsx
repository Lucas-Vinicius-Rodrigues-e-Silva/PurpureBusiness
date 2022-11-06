import React, { useContext } from "react";
import Modal from "react-modal";
import { ProductContext } from "../../../context/ProductsContext";

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

const ConfirmationModal = ({productProps}:any) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const { deleteProduct } = useContext(ProductContext);

    const deleteProductRequest = () => {
       deleteProduct(productProps)
    }

    function openModal():void {
      setIsOpen(true);
    }
  
    function afterOpenModal():void {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal():void {
      setIsOpen(false);
    }

    return (
        <div>
        <button onClick={openModal}>Excluir</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>Deseja prosseguir com essa operação?</h2>
          <h3>Note que esta ação não pode ser desfeita!</h3>
          <button onClick={() => deleteProductRequest()}>Prosseguir</button>
          <button onClick={() => closeModal()}>
            Cancelar
          </button>
        </Modal>
      </div>
    )
}

export default ConfirmationModal