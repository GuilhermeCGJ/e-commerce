import { Typography, Button } from '@mui/material';
import * as S from './styles';
import { useCart } from '../../hooks/cart';

const ProductDetail = () => {
  const { selectedProduct } = useCart();

  return (
    <S.ProductDetail>
      <S.ProductImage
        src={selectedProduct?.image}
        alt={selectedProduct?.name}
      />
      <S.SideWrapper>
        <S.InfoWrapper>
          <Typography variant="h4">{selectedProduct?.name}</Typography>
          <Typography variant="h5">
            {selectedProduct?.price?.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Typography>
          <Typography variant="h6">Descrição</Typography>
          <Typography variant="body1">
            {selectedProduct?.description}
          </Typography>
        </S.InfoWrapper>
        <Button variant="contained" color="info">
          Adicionar ao carrinho
        </Button>
      </S.SideWrapper>
    </S.ProductDetail>
  );
};

export default ProductDetail;
