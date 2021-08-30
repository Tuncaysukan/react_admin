import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Pages/Header';
import { BrowserRouter, BrowserRouter  as Router , Link, Route,Switch} from "react-router-dom";
import Login from './Pages/Login';
import AddProduct from './Pages/AddProduct';
import Register from './Pages/Register';
import UpdateProduct from './Pages/UpdateProduct';
import List from './Pages/ProductList';
function App() {
  return (
 
      <div className='app'>
<BrowserRouter>
    <Header/>
    <Route path='/Login'>
      <Login/>
    </Route>
    <Route path='/Register'>
      <Register/>
    </Route>
    <Route path='/Add'>
      <AddProduct/>
    </Route>
    <Route path='/update'>
      <UpdateProduct/>
    </Route>
    <Route path='/list'>
      <List/>
    </Route>

  
</BrowserRouter>
      </div>
 
  );
}

export default App;
