import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";
import ReactModal from "react-modal";
import SalePovider from "./context/SalesContext";

ReactModal.setAppElement("#root");
import ReactModal from "react-modal";
import "react-toastify/dist/ReactToastify.css";

function App() {
  ReactModal.setAppElement("#root");
  return (
    <div>
      <AuthProvider>
        <SalePovider>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={3000}
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
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
