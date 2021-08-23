import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Pages/Header';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
 
      <BrowserRouter>
        <Header />
      </BrowserRouter>
 
  );
}

export default App;
