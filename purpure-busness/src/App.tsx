import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
