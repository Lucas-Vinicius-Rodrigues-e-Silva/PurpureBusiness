import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iSales {
  cliente_sale_product: string;
  product_sale: string;
  product_sale_quant: string;
  total_sale_value: string;
  userId: number;
  id?: number;
}

interface iSalesProps {
  children: React.ReactNode;
}

interface iSalesContext {
  sales: iSales[];
  registerSale: (data: iSales) => void;
  deleteSale: (deletedSale: iSales) => void;
  editSale: (editedSale: iSales) => void;
}

export const ProductContext = createContext({} as iSalesContext);

const ProductPovider = ({ children }: iSalesProps) => {
  const [sales, setSales] = useState([] as iSales[]);

  useEffect(() => {
    async function loadingSales() {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USER_ID");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}?_embed=sales`);
          setSales(data.sales);
        } catch (error) {
          console.log(error);
        }
      }
    }
    loadingSales();
  }, []);

  const registerSale = async (data: iSales) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const newSale = [
        ...sales,
        {
          cliente_sale_product: data.cliente_sale_product,
          product_sale: data.product_sale,
          product_sale_quant: data.product_sale_quant,
          total_sale_value: data.total_sale_value,
          userId: data.userId,
        },
      ];

      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post("/sales", data);

      toast.success("Venda cadastrada com sucesso!");

      setSales(newSale);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSale = async (deletedSale: iSales) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja excluir esta venda?")) {
      try {
        const newSalesList = sales.filter((sale) => sale.id !== deletedSale.id);
        const token = localStorage.getItem("@TOKEN");

        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/sales/${deletedSale.id}`);
        setSales(newSalesList);
        toast.success("A venda foi apagada da sua lista!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editSale = async (editedSale: iSales) => {
    try {
      const token = localStorage.getItem("@TOKEN");

      const pachSale = {
        cliente_sale_product: editedSale.cliente_sale_product,
        product_sale: editedSale.product_sale,
        product_sale_quant: editedSale.product_sale_quant,
        total_sale_value: editedSale.total_sale_value,
      };

      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/sales/${editedSale.id}`, pachSale);

      toast.success("A venda foi editada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ sales, registerSale, deleteSale, editSale }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductPovider;
