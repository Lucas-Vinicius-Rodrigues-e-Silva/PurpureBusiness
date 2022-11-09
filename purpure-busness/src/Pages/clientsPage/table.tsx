import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { TableContent } from "./dashboardClient";

import { RiPencilFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

export const Table = () => {
  const { clientsFilter, editModalOpen, deleteModalOpen, clients } =
    useContext(ClientContext);

  return (
    <TableContent>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Cliente</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientsFilter.length
          ? clientsFilter.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.client_name}</td>
                <td>
                  <RiPencilFill
                    className="icon edit_icon"
                    id={`${item.id}`}
                    onClick={(e) => editModalOpen(e.currentTarget.id)}
                  />
                  <AiFillDelete
                    className="icon delete_icon"
                    id={`${item.id}`}
                    onClick={(e) => deleteModalOpen(e.currentTarget.id)}
                  />
                </td>
              </tr>
            ))
          : clients.map((item, i) => (
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
    </TableContent>
  );
};
