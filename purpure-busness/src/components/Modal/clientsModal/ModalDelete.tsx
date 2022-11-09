import { useContext } from "react";
import { ClientContext } from "../../../context/ClientContext";
import Modal from "react-modal";
import { StyledModalDelete } from "./styledModal";

const customStyles = {
  content: {
    width: "300px",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DeleteClient = () => {
  const { modalDeletIsOpen, setModalDeletIsOpen, deleteClient, clientMod } =
    useContext(ClientContext);

  return (
    <Modal
      isOpen={modalDeletIsOpen}
      onRequestClose={() => setModalDeletIsOpen(false)}
      style={customStyles}
      contentLabel="Delete Client Modal"
    >
      <StyledModalDelete>
        <h2>Deseja deletar este cliente?</h2>
        <span>Note que esta ação não pode ser desfeita.</span>
        <div className="div_btn">
          <button
            className="btn confirm_btn"
            onClick={() => deleteClient(clientMod)}
          >
            Deletar
          </button>
          <button
            className="btn cancel_btn"
            onClick={() => setModalDeletIsOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </StyledModalDelete>
    </Modal>
  );
};
