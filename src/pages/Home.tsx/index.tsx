import * as S from './styles';
import { useCart } from '../../hooks/cart';
import FilterChips from './Filters';
import ProductCard from './ProductCard';

const Home = () => {
  const { filteredProducts } = useCart();

  return (
    <div>
      <FilterChips />
      <S.ProductsList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsList>
    </div>
  );
};

export default Home;
