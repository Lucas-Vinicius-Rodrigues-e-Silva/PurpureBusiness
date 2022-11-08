import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export const Table = () => {
  const { clients, setModalIsOpen } = useContext(ClientContext);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Cliente</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.client_name}</td>
            <td>
              <button onClick={() => setModalIsOpen(true)}>Editar</button>
              <button>Apagar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
