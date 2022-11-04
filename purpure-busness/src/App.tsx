import { AppRoutes } from "./routes/Routes";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
