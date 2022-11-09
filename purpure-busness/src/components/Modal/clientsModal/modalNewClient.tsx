import { useContext } from "react";
import { ClientContext, iClient } from "../../../context/ClientContext";
import Modal from "react-modal";
import { Input } from "../../../styles/elements";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientsSherma } from "../../../schemas/clientsScherma";
import { Text } from "../../../styles/text/text";
import { StyledModalEdit } from "./styledModal";

const customStyles = {
  content: {
    width: "380px",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalAddClient = () => {
  const { modalIsOpen, setModalIsOpen, registerClient } =
    useContext(ClientContext);

  const { register, handleSubmit } = useForm<iClient>({
    resolver: yupResolver(clientsSherma),
  });

  const submit = async (data: iClient) => {
    const clientId = localStorage.getItem("@USER_ID");
    const newData = {
      ...data,
      userId: parseInt(`${clientId}`),
    };
    registerClient(newData);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledModalEdit>
          <div className="modal_edit_header">
            <h2>Cadastro de novo cliente</h2>
            <span onClick={() => setModalIsOpen(false)}>x</span>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Text tag="label" className="newClientInput">
              Cliente
            </Text>
            <Input
              id={"client_name"}
              type={"text"}
              placeholder={"Nome fantasia ou Nome pessoa física"}
              {...register("client_name")}
            />
            <Text tag="label" className="newClientInput">
              Documento do cliente
            </Text>
            <Input
              id={"cliente_document"}
              type={"text"}
              placeholder={"CPF ou CNPJ"}
              {...register("cliente_document")}
            />
            <Text tag="label" className="newClientInput">
              Cliente
            </Text>
            <Input
              id={"client_email"}
              type={"email"}
              placeholder={"Digite aqui o e-mail do Cliente"}
              {...register("client_email")}
            />
            <Text tag="label" className="newClientInput">
              Cliente
            </Text>
            <Input
              id={"clinte_phone"}
              type={"number"}
              placeholder={"(xx) x xxxx-xxxx"}
              {...register("clinte_phone")}
            />
            <button type="submit">Cadastrar novo cliente</button>
          </form>
        </StyledModalEdit>
      </Modal>
    </div>
  );
};
