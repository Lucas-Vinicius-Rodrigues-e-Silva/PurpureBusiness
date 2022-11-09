import { StyledInventoryPage } from "../../styles/inventoryPage";
import { BiSearchAlt2 } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { iProducts, ProductContext } from "../../context/ProductsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchProductSchema } from "../../schemas/searchItemSchema";
import { Input, OutlinedBtn } from "../../styles/elements";
import { NoItensFound } from "../../components/NotFoundItens";
import { NoProductsFound } from "../../components/NotFoundProducts";
import {UiDashboard} from "../../components/Interface";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import EditProductModal from "../../components/Modal/EditProductModal";
import NewProductModal from "../../components/Modal/NewProductModal";


interface iSearchProduct {
  searchProduct: string;
}

const InventoryPage = () => {
  const { products, loadingClientProducts} = useContext(ProductContext);
  const [filteredProducts, setfilteredProducts] = useState([] as iProducts[])
  const [notFound, setNotFound] = useState(false)
  useEffect(() => {
    loadingClientProducts();
  }, []);

  const {
    register,
    handleSubmit,
  } = useForm<iSearchProduct>({
    resolver: yupResolver(searchProductSchema),
  });

  const searchedItemSubmit = (data: iSearchProduct) => {
    const searchedProduct = products.filter((product) => product.product_name.toLowerCase().includes(data.searchProduct))
    if(searchedProduct.length === 0){
      setNotFound(true)
    } else {
    setfilteredProducts(searchedProduct)
  }
  };

  const resetProducts = async () => {
    setfilteredProducts([])
    notFound && setNotFound(false)
  }

  return (
    <UiDashboard companyName={"Prime imports LTDA"}>
      <StyledInventoryPage>
        <section>
          <div className="pageHeader">
            <div className="nameAndResetFilter">
            <h2>Estoque</h2>
            {filteredProducts.length ? <OutlinedBtn className="btnReset" onClick={() => resetProducts()} >Resetar filtro</OutlinedBtn> : <></>}
            </div>
            <div className="navHeader">
            <NewProductModal />
            <form onSubmit={handleSubmit(searchedItemSubmit)}>
              <Input
                type="text"
                id="search-product"
                placeholder="Digite o nome do produto aqui"
                {...register("searchProduct")}
              ></Input>
              <button type="submit">
                <BiSearchAlt2  size={24}/>
              </button>
            </form>
            </div>
          </div>
           { !notFound ? <div className="table">
            { products.length ?
          <table>
          <thead>
            <tr>
              <th className="id">
              Id
              </th>
              <th className="name">
                Nome do produto
              </th>
              <th className="quantity">
                Quantidade
              </th>
              <th className="price">
                Valor
              </th>
              <th className="actions">Ações</th>
            </tr>
          </thead>
          <tbody className="tableBody">
                { filteredProducts.length === 0 ? products.map((product) =>
                        <tr key={product.id}> 
                            <td>{product.id}</td>
                            <td>{product.product_name}</td>
                            <td>{product.product_stock}</td>
                            <td>{product.product_value}</td>
                            <td><ConfirmationModal productProps={product}/> <EditProductModal productProps={product}/></td>
                        </tr>
                    ) : filteredProducts.map((product) =>
                    <tr key={product.id}> 
                        <td>{product.id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_stock}</td>
                        <td>{product.product_value}</td>
                        <td><ConfirmationModal productProps={product}/> <EditProductModal productProps={product}/></td>
                    </tr> )
                }
          </tbody>
        </table> : <NoProductsFound/> 
        }
          </div> : <NoItensFound/>}
        </section>
      </StyledInventoryPage>
    </UiDashboard>
  );
};
export default InventoryPage;
