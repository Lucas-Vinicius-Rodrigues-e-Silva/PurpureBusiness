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

export function ModalEditClient() {
  const { modalEditIsOpen, setModalEditIsOpen, editClient, clientMod } =
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
    editClient(newData);
    setModalEditIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalEditIsOpen}
        onRequestClose={() => setModalEditIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledModalEdit>
          <div className="modal_edit_header">
            <h2>Editar Cliente</h2>
            <span onClick={() => setModalEditIsOpen(false)}>x</span>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Text tag="label" className="newClientInput">
              Nome do cliente
            </Text>
            <Input
              id={"client_name"}
              type={"text"}
              placeholder={`${clientMod?.client_name}`}
              {...register("client_name")}
            />
            <Text tag="label" className="newClientInput">
              Documento do cliente:
            </Text>
            <Input
              id={"cliente_document"}
              type={"text"}
              placeholder={`${clientMod?.cliente_document}`}
              {...register("cliente_document")}
            />
            <Text tag="label" className="newClientInput">
              Email do Cliente:
            </Text>
            <Input
              id={"client_email"}
              type={"email"}
              placeholder={`${clientMod?.client_email}`}
              {...register("client_email")}
            />
            <Text tag="label" className="newClientInput">
              Número do cliente:
            </Text>
            <Input
              id={"clinte_phone"}
              type={"text"}
              placeholder={`${clientMod?.clinte_phone}`}
              {...register("clinte_phone")}
            />
            <button type="submit">Atualizar dados do cliente</button>
          </form>
        </StyledModalEdit>
      </Modal>
    </div>
  );
}
