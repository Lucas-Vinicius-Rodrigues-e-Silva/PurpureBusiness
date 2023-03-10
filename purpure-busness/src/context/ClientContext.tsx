import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface iApiError {
  error: string;
}

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
  clientMod: iClient | null;
  clientsFilter: iClient[];
  modalIsOpen: boolean;
  modalEditIsOpen: boolean;
  modalDeletIsOpen: boolean;
  modalChoseIsOpen: boolean;
  filtered: string;
  clientModID: any;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
  setClientMod: React.Dispatch<React.SetStateAction<iClient | null>>;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalEditIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDeletIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClientsFilter: React.Dispatch<React.SetStateAction<iClient[]>>;
  setModalChoseIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClientModID: React.Dispatch<any>;
  clientModType: any;
  setClientModType: React.Dispatch<any>;
  registerClient: (data: iClient) => void;
  deleteClient: (deletedClient: iClient | null) => void;
  editClient: (editedClient: iClient) => void;
  deleteModalOpen: (id: string) => void;
  editModalOpen: (id: string) => Promise<void>;
  filterClients: (filter: string) => void;
  ChoseClient: (value: "edit" | "delete", state: boolean) => void;
  loadingClients: () => Promise<void>;
}

export const ClientContext = createContext({} as iClientsContext);

const ClientPovider = ({ children }: iClientsProps) => {
  const [clients, setClients] = useState([] as iClient[]);
  const [clientsFilter, setClientsFilter] = useState([] as iClient[]);
  const [filtered, setFiltered] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalDeletIsOpen, setModalDeletIsOpen] = useState(false);
  const [modalChoseIsOpen, setModalChoseIsOpen] = useState(false);

  const [clientMod, setClientMod] = useState<iClient | null>(null);
  const [clientModID, setClientModID] = useState<any>("");
  const [clientModType, setClientModType] = useState<any>("");

  // useEffect(() => {
  //   async function loadingClients() {
  //     const token = localStorage.getItem("@accessToken");
  //     const id = localStorage.getItem("@USER_ID");

  //     if (token) {
  //       try {
  //         api.defaults.headers.authorization = `Bearer ${token}`;
  //         const { data } = await api.get(`/users/${id}?_embed=clients`);
  //         setClients(data.clients);
  //       } catch {
  //         console.clear();
  //       }
  //     }
  //   }
  //   loadingClients();
  // });

  const loadingClients = async () => {
    const token = localStorage.getItem("@accessToken");
    if (token) {
      try {
        const id = localStorage.getItem("@USER_ID");

        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/${id}?_embed=clients`);
        setClients(data.clients);
      } catch {
        toast.error("Erro ao carregar clientes");
      }
    }
  };

  useEffect(() => {
    filterClients(filtered);
  }, [filtered]);

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
        const requestError = error as AxiosError<iApiError>;
        toast.error(requestError?.request.data.error);
        //loadingClients()
      }
    } else {
      toast.error("Este cliente j?? est?? cadastrado.");
    }
  };

  const deleteClient = async (deletedsClient: iClient | null) => {
    try {
      const newClientsList = clients.filter(
        (client) => client.id !== deletedsClient?.id
      );
      const token = localStorage.getItem("@accessToken");
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/clients/${deletedsClient?.id}`);
      setClients(newClientsList);
      //loadingClients()
      toast.success("O cliente foi apagado da sua lista!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError?.request.data.error);
    }
    setModalDeletIsOpen(false);
  };

  const deleteModalOpen = async (id: string) => {
    const token = localStorage.getItem("@accessToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get(`/clients/${parseInt(id)}`);
    setClientMod(data);
    setModalDeletIsOpen(true);
  };

  const editClient = async (editedClient: iClient) => {
    try {
      const token = localStorage.getItem("@accessToken");

      const pachClient = {
        ...editedClient,
      };

      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/clients/${clientMod?.id}`, pachClient);

      toast.success("O cliente foi editado com sucesso!");
    } catch {
      toast.error("Verifique os dados e tente novamente.");
    }
  };

  const editModalOpen = async (id: string) => {
    const token = localStorage.getItem("@accessToken");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get(`/clients/${parseInt(id)}`);
    setClientMod(data);
    setModalEditIsOpen(true);
  };

  const filterClients = (filter: string) => {
    setClientsFilter(
      clients.filter(
        (client) =>
          client.client_name
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase()) ||
          client.cliente_document
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
      )
    );
  };

  const ChoseClient = (value: "edit" | "delete", state: boolean) => {
    setModalChoseIsOpen(state);
    setClientModType(value);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        registerClient,
        deleteClient,
        editClient,
        modalIsOpen,
        setModalIsOpen,
        modalEditIsOpen,
        setModalEditIsOpen,
        modalDeletIsOpen,
        setModalDeletIsOpen,
        deleteModalOpen,
        clientMod,
        setClientMod,
        editModalOpen,
        filterClients,
        clientsFilter,
        setClientsFilter,
        filtered,
        setFiltered,
        modalChoseIsOpen,
        setModalChoseIsOpen,
        ChoseClient,
        clientModID,
        setClientModID,
        clientModType,
        setClientModType,
        loadingClients
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientPovider;
