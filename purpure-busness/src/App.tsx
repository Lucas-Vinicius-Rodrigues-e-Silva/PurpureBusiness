import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";
import ReactModal from "react-modal";
import SalePovider from "./context/SalesContext";
import "react-toastify/dist/ReactToastify.css";
import ClientPovider from "./context/ClientContext";

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div>
      <AuthProvider>
        <ClientPovider>
          <SalePovider>
            <AppRoutes />
            <ToastContainer
              position="top-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </SalePovider>
        </ClientPovider>
      </AuthProvider>
    </div>
  );
}

export default App;
