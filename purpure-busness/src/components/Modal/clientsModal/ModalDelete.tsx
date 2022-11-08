import { useContext } from "react";
import { ClientContext } from "../../../context/ClientContext";
import Modal from "react-modal";
import { Text } from "../../../styles/text/text";

const customStyles = {
  content: {
    width: "50vw",
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
      <h2>Deseja deletar este cliente?</h2>
      <span>Note que esta ação não pode ser desfeita.</span>
      <button onClick={() => deleteClient(clientMod)}>Deletar</button>
      <button onClick={() => setModalDeletIsOpen(false)}>Cancelar</button>
    </Modal>
  );
};
