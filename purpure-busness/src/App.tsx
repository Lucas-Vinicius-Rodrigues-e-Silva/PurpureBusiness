import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <div>
      <AuthProvider>
        <ToastContainer />
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
