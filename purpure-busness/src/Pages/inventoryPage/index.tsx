import { StyledInventoryPage } from "./style";
import { BiSearchAlt2 } from "react-icons/bi";
import UiDashboard from "../../components/Interface";
import { useSortBy, useTable } from "react-table";
import { useContext, useEffect, useMemo, useState } from "react";
import { iProducts, ProductContext } from "../../context/ProductsContext";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import EditProductModal from "../../components/Modal/EditProductModal";
import NewProductModal from "../../components/Modal/NewProductModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchProductSchema } from "../../schemas/searchItemSchema";
import { Input } from "../../styles/elements";

interface iSearchProduct {
  searchProduct: string;
}

const InventoryPage = () => {
  const { products, setProducts, loadingClientProducts} = useContext(ProductContext);
  const [fakeProducts, setfakeProducts] = useState([] as iProducts[])

  useEffect(() => {
    loadingClientProducts();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSearchProduct>({
    resolver: yupResolver(searchProductSchema),
  });

  const searchedItemSubmit = (data: iSearchProduct) => {
    const searchedProduct = products.find((product) => product.product_name.includes(data.searchProduct))
    if(searchedProduct !== undefined){
    setProducts([...fakeProducts,searchedProduct])
  }
  };

  const resetProducts = async () => {
    loadingClientProducts()
  }

  const productsData = useMemo(() => [...products], [products]);

  const productsColumns: any = useMemo(
    () =>
      products[0]
        ? Object.keys(products[0])
            .filter((key) => key !== "rating")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [products]
  );

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: "Edit and delete",
        Header: "Ações",
        Cell: ({ row }: any) => (
          <>
            <button>{<EditProductModal productProps={row.original} />}</button>
            <button>{<ConfirmationModal productProps={row.original} />}</button>
          </>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    { columns: productsColumns, data: productsData },
    tableHooks,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <UiDashboard companyName={"Teste"}>
      <StyledInventoryPage>
        <section>
          <div>
            <h2>Estoque</h2>
            <NewProductModal />
            <button onClick={() => resetProducts()} >Resetar filtro</button>
            <form onSubmit={handleSubmit(searchedItemSubmit)}>
              <Input
                type="text"
                id="seach-product"
                placeholder="Digite o nome do produto aqui"
                {...register("searchProduct")}
              ></Input>
              <button type="submit">
                <BiSearchAlt2 />
              </button>
            </form>
          </div>
          <div>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);

                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                      ;
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </StyledInventoryPage>
    </UiDashboard>
  );
};
export default InventoryPage;
