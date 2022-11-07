import { useContext } from "react";
import { SaleContext } from "../../context/SalesContext";
import { Text } from "../../styles/text/text";
import { TableContent } from "./dashboardSales";

export const Table = () => {
  const { sales } = useContext(SaleContext);

  return (
    <TableContent>
      <thead>
        <tr>
          <Text tag="th" className="Title2">
            Nome do cliente
          </Text>
          <Text tag="th" className="Title2">
            Nome do produto
          </Text>
          <Text tag="th" className="Title2">
            Quantidade
          </Text>
          <Text tag="th" className="Title2">
            Valor da Operação:
          </Text>
        </tr>
      </thead>
      <tbody>
        {sales.map((item, i) => (
          <tr key={i}>
            <Text tag="td" className="Headline">
              {item.cliente_sale_product}
            </Text>
            <Text tag="td" className="Headline">
              {item.product_sale}
            </Text>
            <Text tag="td" className="Headline">
              {item.product_sale_quant}
            </Text>
            <Text tag="td" className="Headline">
              {item.total_sale_value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </Text>
          </tr>
        ))}
      </tbody>
    </TableContent>
  );
};
