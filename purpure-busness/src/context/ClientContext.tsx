import { createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { AuthContext, iClients } from "./AuthContext";

export interface iClient {
  client_name: string;
  cliente_document: string;
  client_email: string;
  clinte_phone: string;
  userId: number;
  id?: number;
}

interface iClientsProps {
  children: React.ReactNode;
}

interface iClientsContext {
  registerClient: (data: iClients) => void;
  deleteClient: (deletedClient: iClients) => void;
  editClient: (editedClient: iClients) => void;
}

export const ClientContext = createContext({} as iClientsContext);

const ClientPovider = ({ children }: iClientsProps) => {
  const { clients, setClients } = useContext(AuthContext);

  useEffect(() => {
    async function loadingClients() {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USER_ID");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}?_embed=clients`);
          setClients(data.clients);
        } catch (error) {
          console.log(error);
        }
      }
    }
    loadingClients();
  });

  const registerClient = async (data: iClients) => {
    if (
      !clients.find(
        (client) => client.cliente_document === data.cliente_document
      )
    ) {
      try {
        const token = localStorage.getItem("@TOKEN");

        const newClient = [
          ...clients,
          {
            client_name: data.client_name,
            cliente_document: data.cliente_document,
            client_email: data.client_email,
            clinte_phone: data.clinte_phone,
            userId: data.userId,
          },
        ];

        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post("/clients", data);

        toast.success("Cliente cadastrado com sucesso!");

        setClients(newClient);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Este cliente já está cadastrado.");
    }
  };

  const deleteClient = async (deletedClient: iClients) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja excluir este cliente?")) {
      try {
        const newClientsList = clients.filter(
          (client) => client.id !== deletedClient.id
        );
        const token = localStorage.getItem("@TOKEN");

        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/client/${deletedClient.id}`);
        setClients(newClientsList);
        toast.success("O clinte foi apagado da sua lista!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editClient = async (editedClient: iClient) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const pachClient = {
        client_name: editedClient.client_name,
        cliente_document: editedClient.cliente_document,
        client_email: editedClient.client_email,
        clinte_phone: editedClient.clinte_phone,
      };

      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/clients/${editedClient.id}`, pachClient);

      toast.success("O cliente foi editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientContext.Provider
      value={{ registerClient, deleteClient, editClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientPovider;
