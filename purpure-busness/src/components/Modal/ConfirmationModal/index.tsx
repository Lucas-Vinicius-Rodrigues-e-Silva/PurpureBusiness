import React, { useContext } from "react";
import Modal from "react-modal";
import { ProductContext } from "../../../context/ProductsContext";
import { FilledBtn, OutlinedBtn } from "../../../styles/elements";
import { ConfirmationModalStyled, ConfirmationModalStyledBtns } from "../../../styles/confirmationModal";
import {MdDelete} from "react-icons/md"
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius:"15px",
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
        <ConfirmationModalStyledBtns>        
          <button onClick={openModal}><MdDelete size={24}/></button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <ConfirmationModalStyled>
          <h2>Deseja prosseguir com essa operação?</h2>
          <h3>Note que esta ação não pode ser desfeita!</h3>
          <div>
          <OutlinedBtn className="btnConfirm" onClick={() => deleteProductRequest()}>Prosseguir</OutlinedBtn>
          <FilledBtn className="btnRegreat" onClick={() => closeModal()}>
            Cancelar
          </FilledBtn>
          </div>
          </ConfirmationModalStyled>
        </Modal>
        </ConfirmationModalStyledBtns>

    )
}

export default ConfirmationModal