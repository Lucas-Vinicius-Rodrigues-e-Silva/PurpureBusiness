import { BiSearchAlt2 } from "react-icons/bi";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchProductSchema } from "../../schemas/searchItemSchema";
import { Input, OutlinedBtn } from "../../styles/elements";
import { UiDashboard } from "../../components/Interface";
import NewProductModal from "../../components/Modal/NewProductModal";
import { HeaderSearch } from "../dashSales/dashboardSales";
import { TableInventory } from "./table";
import { AuthContext } from "../../context/AuthContext";

interface iSearchProduct {
  searchProduct: string;
}

const InventoryPage = () => {
  const {
    products,
    filteredProducts,
    setfilteredProducts,
    notFound,
    setNotFound,
  } = useContext(ProductContext);

  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<iSearchProduct>({
    resolver: yupResolver(searchProductSchema),
  });

  const searchedItemSubmit = (data: iSearchProduct) => {
    const searchedProduct = products.filter((product) =>
      product.product_name.toLowerCase().includes(data.searchProduct)
    );
    if (searchedProduct.length === 0) {
      setNotFound(true);
    } else {
      setfilteredProducts(searchedProduct);
    }
  };

  const resetProducts = async () => {
    setfilteredProducts([]);
    notFound && setNotFound(false);
  };

  return (
    <UiDashboard companyName={`${user?.commercialName}`}>
      <title>Estoque | Purpure Business</title>
      <HeaderSearch>
        <h1>Estoque</h1>
        {filteredProducts.length ? (
          <OutlinedBtn className="btnReset" onClick={() => resetProducts()}>
            Resetar filtro
          </OutlinedBtn>
        ) : (
          <></>
        )}
        <form className="btnSearch" onSubmit={handleSubmit(searchedItemSubmit)}>
          <NewProductModal />
          <Input
            type="text"
            id="search-product"
            placeholder="Digite o nome do produto aqui"
            {...register("searchProduct")}
          ></Input>
          <button type="submit">
            <BiSearchAlt2 size={24} />
          </button>
        </form>
      </HeaderSearch>
      <section>
        <TableInventory />
      </section>
    </UiDashboard>
  );
};
export default InventoryPage;
