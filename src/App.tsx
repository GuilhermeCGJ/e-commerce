import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './template';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/index';
import Cart from './pages/Cart/index';

function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
