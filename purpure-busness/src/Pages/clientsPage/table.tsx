import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

export const Table = () => {
  const { clientsFilter, editModalOpen, deleteModalOpen } =
    useContext(ClientContext);

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
        {clientsFilter.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.client_name}</td>
            <td>
              <button
                id={`${item.id}`}
                onClick={(e) => editModalOpen(e.currentTarget.id)}
              >
                Editar
              </button>
              <button
                id={`${item.id}`}
                onClick={(e) => deleteModalOpen(e.currentTarget.id)}
              >
                Apagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
