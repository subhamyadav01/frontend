import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom";
// import Header from './Header.js';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';

function App() {
  return (
      <BrowserRouter>
      <Header/> 
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
