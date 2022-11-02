import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export interface iUser {
  email: string;
  cnpj: string;
  nomeFantasia: string;
  id: number;
}

export interface iClients {
  client_name: string;
  cliente_document: string;
  client_email: string;
  clinte_phone: string;
  userId: number;
  id?: number;
}

export interface iProducts {
  product_name: string;
  product_value: string;
  product_stock: string;
  userId: number;
  id?: number;
}

export interface iSales {
  cliente_sale_product: string;
  product_sale: string;
  product_sale_quant: string;
  total_sale_value: string;
  userId: number;
  id?: number;
}

interface iAuthContextProps {
  children: React.ReactNode;
}

interface iAuthContext {
  user: iUser | null;
  loading: boolean;
  clients: iClients[];
  products: iProducts[];
  sales: iSales[];
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  setClients: React.Dispatch<React.SetStateAction<iClients[]>>;
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  setSales: React.Dispatch<React.SetStateAction<iSales[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: any;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [clients, setClients] = useState([] as iClients[]);
  const [products, setProducts] = useState([] as iProducts[]);
  const [sales, setSales] = useState([] as iSales[]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USER_ID");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }
    loadingUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        clients,
        products,
        sales,
        loading,
        setUser,
        setClients,
        setProducts,
        setSales,
        setLoading,
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
