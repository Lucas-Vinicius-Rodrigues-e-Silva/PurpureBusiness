import { useContext } from "react";
import { SaleContext } from "../../context/SalesContext";
import { TableContent } from "./dashboardSales";

export const Table = () => {

  const { sales, filtered } = useContext(SaleContext)

  return (
    <TableContent>
      <thead>
        <tr>
          <th>
            Nome do cliente
          </th>
          <th>
            Nome do produto
          </th>
          <th>
            Quantidade
          </th>
          <th>
            Valor da Operação
          </th>
        </tr>
      </thead>
      <tbody>
        {
          filtered.length ? (
            filtered.map((item, i) =>
              <tr key={i}>
                <td>{item.cliente_sale_product}</td>
                <td>{item.product_sale}</td>
                <td>{item.product_sale_quant}</td>
                <td>R$ {item.total_sale_value * item.product_sale_quant}</td>
              </tr>
            )
          ) : (
            sales.length === 0 ? (
              <tr>
                <td id="tableNoneMessage" colSpan={3}>
                  <h2>Nenhuma venda foi efetuada!</h2>
                  <p>Efetue a sua primeira venda clicando no botão <span>Vender</span> a cima!</p>
                </td>
              </tr>
            ) : (
              sales.map((item, i) =>
                <tr key={i}>
                  <td>{item.cliente_sale_product}</td>
                  <td>{item.product_sale}</td>
                  <td>{item.product_sale_quant}</td>
                  <td>R$ {item.total_sale_value * item.product_sale_quant}</td>
                </tr>
              )
            )
          )
        }
      </tbody>
    </TableContent>
  )
}
