import { useContext } from "react";
import { ClientContext } from "../../../context/ClientContext";
import Modal from "react-modal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledModalChose } from "./styledModal";

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

export const ChoseClientModal = () => {
  const {
    modalChoseIsOpen,
    setModalChoseIsOpen,
    clients,
    clientModType,
    editModalOpen,
    deleteModalOpen,
  } = useContext(ClientContext);

  const formSchema = yup.object().shape({
    Select_client: yup.string().required("campo obrigatório"),
  });

  const { register, handleSubmit } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  const submit = (data: any) => {
    const clientID = data.Select_client;
    if (clientModType === "edit") {
      editModalOpen(clientID);
    }
    if (clientModType === "delete") {
      deleteModalOpen(clientID);
    }
    setModalChoseIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalChoseIsOpen}
      onRequestClose={() => setModalChoseIsOpen(false)}
      style={customStyles}
      contentLabel="Chose Client Modal"
    >
      <StyledModalChose>
        <div className="modal_chose_header">
          <h2>Escolha o cliente:</h2>
          <span onClick={() => setModalChoseIsOpen(false)}>x</span>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <select id="Select_client" {...register("Select_client")}>
            <option value="">Selecione o Cliente</option>
            {clients.map((client, i) => (
              <option key={i} value={client.id}>
                {client.client_name}
              </option>
            ))}
          </select>
          <button className="btn" type="submit">
            Confirmar
          </button>
        </form>
      </StyledModalChose>
    </Modal>
  );
};
