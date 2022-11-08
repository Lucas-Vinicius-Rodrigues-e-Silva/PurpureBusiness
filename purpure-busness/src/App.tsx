import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";
import ReactModal from 'react-modal';
import SalePovider from "./context/SalesContext";

ReactModal.setAppElement('#root')

function App() {
  return (
    <div>
      <AuthProvider>
        <SalePovider>
          <AppRoutes />
        </SalePovider>
      </AuthProvider>
    </div>
  );
}

export default App;
