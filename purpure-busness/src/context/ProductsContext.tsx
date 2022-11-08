import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iProducts {
  product_name: string;
  product_value: string;
  product_stock: string;
  userId: number | null;
  id?: number;
}

interface iProductProps {
  children: React.ReactNode;
}

interface iProductContext {
  products: iProducts[];
  setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
  loadingClientProducts: () => void;
  registerProduct: (data: iProducts) => void;
  deleteProduct: (deletedProduct: iProducts) => void;
  editProduct: (editedProduct: iProducts, productId: number | null) => void;
}

export const ProductContext = createContext({} as iProductContext);



const ProductPovider = ({ children }: iProductProps) => {
  const [products, setProducts] = useState([] as iProducts[]);

  const loadingClientProducts = async () => {
    const token = localStorage.getItem("@accessToken");
    if (token) {
      try {
        const id = localStorage.getItem("@USER_ID");
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/${id}?_embed=products`);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const registerProduct = async (data:iProducts) => {
    if (!products.find((product) => product.product_name === data.product_name)) {
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
        console.log(data)
        await api.post("/products", data);        
        toast.success("Cliente cadastrado com sucesso!");
        setProducts(newProduct);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Este produto já está cadastrado.");
    }
  };

  const deleteProduct = async (deletedProduct: iProducts) => {
    // eslint-disable-next-line no-restricted-globals
    console.log(deletedProduct)
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
        console.log(error);
      }
    
  };

  const editProduct = async (editedProduct: iProducts, productId: number | null) => {
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductPovider;
