import AuthProvider from "./context/AuthContext";
import { AppRoutes } from "./routes/Routes";

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
