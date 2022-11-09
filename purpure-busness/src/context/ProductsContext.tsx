import { createContext, useState } from "react";
import { AxiosError } from "axios";

import { toast } from "react-toastify";
import api from "../services/api";

interface iApiError {
  error: string;
}

export interface iProducts {
  product_name: string;
  product_value: string;
  product_stock: string;
  userId: number | null;
  id?: number | null;
}

interface iProductProps {
  children: React.ReactNode;
}

interface iProductContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  loadingClientProducts: () => void;
  registerProduct: (data: iProducts) => Promise<void>;
  deleteProduct: (deletedProduct: iProducts) => void;
  editProduct: (editedProduct: iProducts, productId: number | null) => void;
  styleModal: boolean;
  setStyleModal: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts:  iProducts[];
  setfilteredProducts:React.Dispatch<React.SetStateAction<iProducts[]>>;
  notFound: boolean;
  setNotFound:React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext({} as iProductContext);

const ProductPovider = ({ children }: iProductProps) => {
  const [filteredProducts, setfilteredProducts] = useState([] as iProducts[]);
  const [notFound, setNotFound] = useState(false);
  const [products, setProducts] = useState([] as iProducts[]);
  const [styleModal, setStyleModal] = useState(false)

  const loadingClientProducts = async () => {
    const token = localStorage.getItem("@accessToken");
    setStyleModal(true)
    if (token) {
      try {
        const id = localStorage.getItem("@USER_ID");

        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/${id}?_embed=products`);
        setProducts(data.products);
      } catch (error) {
        const requestError = error as AxiosError<iApiError>;
        toast.error(requestError?.request.data.error);
        console.log(error);
      }
    }
  };

  const registerProduct = async (data: iProducts) => {
    console.log(data)
    if (
      !products.find((product) => product.product_name === data.product_name)
    ) {
      try {
        const newProduct = [
          ...products,
          {
            product_name: data.product_name,
            product_value: data.product_value,
            product_stock: data.product_stock,
            userId: data.userId,
          },
        ];
        const token = localStorage.getItem("@accessToken");
        api.defaults.headers.authorization = `Bearer ${token}`;
        console.log(data);
        await api.post("/products", data);
        toast.success("Produto cadastrado com sucesso!");
        setProducts(newProduct);
        console.log(products)
      } catch (error) {
        const requestError = error as AxiosError<iApiError>;
        toast.error(requestError?.request.data.error);
        console.log(error);
      }
    } else {
      toast.error("Este produto já está cadastrado.");
    }
  };

  const deleteProduct = async (deletedProduct: iProducts) => {
    // eslint-disable-next-line no-restricted-globals
    console.log(deletedProduct);
    try {
      const newProductList = products.filter(
        (product) => product.id !== deletedProduct.id
      );
      const token = localStorage.getItem("@accessToken");
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/products/${deletedProduct.id}`);
      setProducts(newProductList);
      toast.success("O produto foi apagado da sua lista!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      
        toast.error(requestError?.request.data.error);
        console.log(error);
    }
  };

  const editProduct = async (
    editedProduct: iProducts,
    productId: number | null
  ) => {
    try {
      const pachProduct = {
        product_name: editedProduct.product_name,
        product_value: editedProduct.product_value,
        product_stock: editedProduct.product_stock,
      };
      const token = localStorage.getItem("@accessToken");
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/products/${productId}`, pachProduct);

      toast.success("O produto foi editado com sucesso!");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError?.request.data.error);
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loadingClientProducts,
        registerProduct,
        deleteProduct,
        editProduct,
        styleModal, 
        setStyleModal,
        filteredProducts, 
        setfilteredProducts,
        notFound, 
        setNotFound
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductPovider;
