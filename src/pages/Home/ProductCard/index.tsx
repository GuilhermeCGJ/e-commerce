import { CardActionArea, Typography } from '@mui/material';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { Product, useCart } from '../../../hooks/cart';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { setSelectedProduct } = useCart();
  const handleClick = () => {
    setSelectedProduct(product);
  };
  const handleDisplayPrice = (product: Product) => {
    if (product.promotional_price) {
      return (
        <>
          <S.OriginalPrice variant="caption">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </S.OriginalPrice>
          <Typography variant="body1">
            {product.promotional_price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Typography>
        </>
      );
    }
    return (
      <Typography variant="body1">
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </Typography>
    );
  };
  return (
    <S.Container onClick={handleClick} aria-label={`Produto ${product.name}`}>
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        {product.discount_percentage && (
          <S.DiscountPercentage>
            <Typography variant="body1" fontWeight={600}>
              -{product.discount_percentage}%
            </Typography>
          </S.DiscountPercentage>
        )}
        <S.ProductMedia image={product.image} title={product.name} />
        <S.ContentWrapper>
          <S.ProductCategory variant="caption">
            {product.category}
          </S.ProductCategory>
          <Typography gutterBottom variant="body2">
            {product.name}
          </Typography>
          <S.PriceWrapper>{handleDisplayPrice(product)}</S.PriceWrapper>
        </S.ContentWrapper>
      </CardActionArea>
    </S.Container>
  );
};

export default ProductCard;
