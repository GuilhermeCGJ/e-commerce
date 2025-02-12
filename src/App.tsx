import './App.css';
import ProductCard from './components/ProductCard';
import mockProducts from './mock/products';
import * as S from './styles';

function App() {
  return (
    <>
      <h1>Teste</h1>
      <S.ProductsList>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsList>
    </>
  );
}

export default App;
