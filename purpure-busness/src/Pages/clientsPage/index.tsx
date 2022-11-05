import { useContext } from "react";
import UiDashboard from "../../components/Interface";
import { ClientContext } from "../../context/ClientContext";

export const ClientPage = () => {
  const { clients } = useContext(ClientContext);

  return (
    <UiDashboard companyName="matheus ltda">
      <div>
        <h2>Clientes</h2>
        <button>Novo cliente</button>
        <input type="text" />
      </div>

      <div>
        <ul>
          {clients.map((client) => (
            <li>
              <span>{client.id}</span>
              <br></br>
              <span>{client.client_name}</span>
              <br></br>
              <button>editar</button>
              <button>apagar</button>
            </li>
          ))}
        </ul>
      </div>
    </UiDashboard>
  );
};
