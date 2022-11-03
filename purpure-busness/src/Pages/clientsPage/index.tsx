import { useContext } from "react";
import UiDashboard from "../../components/Interface";
import { ClientContext } from "../../context/ClientContext";

export const ClientPage = () => {
  const { clients } = useContext(ClientContext);

  return (
    <UiDashboard companyName="matheus ltda">
      <h2>olá</h2>
      <ul>
        {clients.map((client) => (
          <li>
            <span>{client.client_name}</span>
            <br></br>
            <span>{client.cliente_document}</span>
            <br></br>
            <span>{client.client_email}</span>
            <br></br>
          </li>
        ))}
      </ul>
    </UiDashboard>
  );
};
