import { NoItensFound } from "../../components/NotFoundItens";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import EditProductModal from "../../components/Modal/EditProductModal";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { TableContent } from "../../styles/inventoryPage";

export const TableInventory = () => {
  const { products, loadingClientProducts, filteredProducts, notFound } =
    useContext(ProductContext);

  useEffect(() => {
    loadingClientProducts();
  }, []);
  return (
    <TableContent>
      {" "}
      {!notFound ? (
        <>
          {products.length ? (
            <>
              <thead>
                <tr>
                  <th className="id">Id</th>
                  <th className="name">Nome do produto</th>
                  <th className="quantity">Quantidade</th>
                  <th className="price">Valor</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.length === 0
                  ? products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_stock}</td>
                        <td>{product.product_value}</td>
                        <td className="actions">
                          <EditProductModal productProps={product} />
                          <ConfirmationModal productProps={product} />
                        </td>
                      </tr>
                    ))
                  : filteredProducts.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.product_name}</td>
                        <td>{product.product_stock}</td>
                        <td>{product.product_value}</td>
                        <td>
                          <ConfirmationModal productProps={product} />{" "}
                          <EditProductModal productProps={product} />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <td id="tableNoneMessage">
                  <h2>Nenhuma venda foi efetuada!</h2>
                  <p>
                    Cadastre o seu primeiro produto clicando no botão{" "}
                    <span>Novo produto</span> a cima!
                  </p>
                </td>
              </tr>
            </tbody>
          )}
        </>
      ) : (
        <NoItensFound />
      )}
    </TableContent>
  );
};
