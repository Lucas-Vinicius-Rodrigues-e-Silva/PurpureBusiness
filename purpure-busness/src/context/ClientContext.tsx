import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

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
  clients: iClient[];
  registerClient: (data: iClient) => void;
  deleteClient: (deletedClient: iClient) => void;
  editClient: (editedClient: iClient) => void;
}

export const ClientContext = createContext({} as iClientsContext);

const ClientPovider = ({ children }: iClientsProps) => {
  const [clients, setClients] = useState([] as iClient[]);

  useEffect(() => {
    async function loadingClients() {
      const token = localStorage.getItem("@accessToken");
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

  const registerClient = async (data: iClient) => {
    if (
      !clients.find(
        (client) => client.cliente_document === data.cliente_document
      )
    ) {
      try {
        const token = localStorage.getItem("@accessToken");

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

  const deleteClient = async (deletedClient: iClient) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja excluir este cliente?")) {
      try {
        const newClientsList = clients.filter(
          (client) => client.id !== deletedClient.id
        );
        const token = localStorage.getItem("@accessToken");

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
      const token = localStorage.getItem("@accessToken");

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
      value={{ clients, registerClient, deleteClient, editClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientPovider;
