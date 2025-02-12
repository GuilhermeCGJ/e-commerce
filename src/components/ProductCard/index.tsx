import { Typography } from '@mui/material';
import * as S from './styles';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount_percentage?: number;
  promotional_price?: number;
  image: string;
  description: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
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
    <S.ProductCard>
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
        <Typography gutterBottom variant="body1" component="div">
          {product.name}
        </Typography>
        <S.PriceWrapper>{handleDisplayPrice(product)}</S.PriceWrapper>
      </S.ContentWrapper>
    </S.ProductCard>
  );
};

export default ProductCard;
