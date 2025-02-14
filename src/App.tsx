import './App.css';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import mockProducts from './mock/products';
import * as S from './styles';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <h1>Teste</h1>
      <S.ProductsList>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsList>
      <ProductDetail />
      <h2>Itens no Carrinho</h2>
      <Cart />
    </>
  );
}

export default App;
