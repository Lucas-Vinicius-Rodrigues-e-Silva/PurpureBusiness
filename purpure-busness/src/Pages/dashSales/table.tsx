import { useContext } from "react";
import { SaleContext } from "../../context/SalesContext"

export const Table = () => {

    const { sales, filtered } = useContext(SaleContext)

    return (
        <table>
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
                        <td>R$ {item.total_sale_value}</td>
                    </tr>
                )
                  ) : (
                    sales.map((item, i) =>
                    <tr key={i}> 
                        <td>{item.cliente_sale_product}</td>
                        <td>{item.product_sale}</td>
                        <td>{item.product_sale_quant}</td>
                        <td>R$ {item.total_sale_value}</td>
                    </tr>
                )
                  )
                }
          </tbody>
        </table>
      )
}