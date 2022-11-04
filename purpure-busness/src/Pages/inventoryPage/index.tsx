import { StyledInventoryPage } from "./style";
import { BiSearchAlt2 } from "react-icons/bi";
import UiDashboard from "../../components/Interface";
import api from "../../services/api";
import { useSortBy, useTable } from "react-table";
import { useEffect, useMemo, useState } from "react";

const InventoryPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api
      .get("/products/")
      .catch((err) => console.log(err));

    if (response) {
      const teste = response.data;

      setProducts(teste);
    }
  };

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
            <button onClick={() => alert("working")}>Editar</button>
            <button onClick={() => alert("working")}>excluir</button>
          </>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    { columns: productsColumns, data: productsData },
    tableHooks,
    useSortBy,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <UiDashboard companyName={"Teste"}>
      <StyledInventoryPage>
        <section>
          <div>
            <h2>Estoque</h2>
            <button>Novo Produto</button>
            <input type="text" id="seach-product"></input>
            <button>
              <BiSearchAlt2 />
            </button>
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
