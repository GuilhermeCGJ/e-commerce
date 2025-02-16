import { Box, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import * as S from './styles';
import { useCart } from '../../hooks/cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      {cartProducts.length > 0 ? (
        <S.CartContainer>
          <S.CartList>
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </S.CartList>
          <CartSummary />
        </S.CartContainer>
      ) : (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <ShoppingCartIcon sx={{ fontSize: 64, color: 'gray' }} />
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Seu carrinho está vazio.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
          >
            Voltar à loja
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
