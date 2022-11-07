import { useContext } from "react"
import { ClientContext } from "../../context/ClientContext"

export const Table = () => {

  const {clients} = useContext(ClientContext)

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
                  clients.map((item, i) =>
                      <tr key={i}> 
                          <td>{item.id}</td>
                          <td>{item.client_name}</td>
                      </tr>
                  )
              }
        </tbody>
      </table>
    )
}