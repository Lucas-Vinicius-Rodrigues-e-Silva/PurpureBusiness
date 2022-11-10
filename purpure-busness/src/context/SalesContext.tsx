import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export interface iSales {
  cliente_sale_product: string,
  product_sale: string,
  product_sale_quant: number,
  total_sale_value: number,
  userId?: number,
  id?: number,
}

interface iSalesProps {
  children: React.ReactNode;
}

interface iSalesContext {
  sales: iSales[];
  saleModalIsOpen: boolean;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filtered: iSales[];
  setFiltered: React.Dispatch<React.SetStateAction<iSales[]>>;
  setSaleModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  registerSale: (data: iSales) => void;
  deleteSale: (deletedSale: iSales) => void;
  editSale: (editedSale: iSales) => void;
  salesFiltered: (filtered: string) => void;
}

export const SaleContext = createContext({} as iSalesContext);

const SalePovider = ({ children }: iSalesProps) => {
  const [sales, setSales] = useState([] as iSales[]);
  const [saleModalIsOpen, setSaleModalIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([] as iSales[]);

  useEffect(() => {
    async function loadingSales() {
      const token = localStorage.getItem("@accessToken");
      const id = localStorage.getItem("@USER_ID");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}?_embed=sales`);
          setSales(data.sales);
          setFilter(data.sales);
        } catch {
          toast.error("Erro ao carregar vendas");
        }
      }
    }
    loadingSales();
  }, []);

  const registerSale = async (data: iSales) => {
    try {
      const token = localStorage.getItem("@accessToken");

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
      toast.error("Erro ao cadastrar venda");
    }
  };

  const deleteSale = async (deletedSale: iSales) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja excluir esta venda?")) {
      try {
        const newSalesList = sales.filter((sale) => sale.id !== deletedSale.id);
        const token = localStorage.getItem("@accessToken");

        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/sales/${deletedSale.id}`);
        setSales(newSalesList);
        toast.success("A venda foi apagada da sua lista!");
      } catch (error) {
        toast.error("Erro ao apagar venda, tente novamente!");
      }
    }
  };

  const editSale = async (editedSale: iSales) => {
    try {
      const token = localStorage.getItem("@accessToken");

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
      toast.error("Erro ao editar venda, tente novamente!");
    }
  };

  const salesFiltered = (filtered: string) => {
    setFiltered(
      sales.filter(
        (sale) =>
          sale.cliente_sale_product.toLowerCase().includes(filtered) ||
          sale.product_sale.toLowerCase().includes(filtered)
      )
    );
  };

  return (
    <SaleContext.Provider
      value={{
        sales,
        filter,
        setFilter,
        registerSale,
        deleteSale,
        editSale,
        saleModalIsOpen,
        setSaleModalIsOpen,
        salesFiltered,
        filtered,
        setFiltered,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export default SalePovider;
