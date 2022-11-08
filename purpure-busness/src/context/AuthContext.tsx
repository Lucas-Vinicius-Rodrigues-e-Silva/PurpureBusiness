import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iUser {
  email: string;
  cnpj: string;
  nomeFantasia: string;
  id: number;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  CNPJ: string;
  password: string;
  confirmPassword: string;
  email: string;
  commercialName: string;
}

interface iAuthContextProps {
  children: React.ReactNode;
}

interface iAuthContext {
  user: iUser | null;
  loading: boolean;

  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: any;
  loginUser: (data: iLogin) => Promise<void>;
  registerUser: (data: iRegister) => Promise<void>;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@accessToken");
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

  const loginUser = async (data: iLogin) => {
    try {
      const response = await api.post("/login", data);

      const { user: userResponse, accessToken } = response.data;
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      setUser(userResponse);
      localStorage.setItem("@accessToken", accessToken);
      localStorage.setItem("@USER_ID", userResponse.id);
      toast.success("Login realizado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (data: iRegister) => {
    try {
      await api.post("/register", data);
      toast.success("Usuarioa cadastrado com sucesso!");
      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setUser,
        setLoading,
        navigate,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
