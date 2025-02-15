import { Box, Typography, Button, Divider } from '@mui/material';
import { useCart } from '../../../hooks/cart';

const CartSummary = () => {
  const { cartProducts, setCartProducts } = useCart();
  const freight = 30.0;

  const subtotal = cartProducts.reduce((acc, product) => {
    return (
      acc + (product.promotional_price || product.price) * product.quantity
    );
  }, 0);

  const totalDiscount = cartProducts.reduce((acc, product) => {
    if (product.promotional_price) {
      return (
        acc + (product.price - product.promotional_price) * product.quantity
      );
    }
    return acc;
  }, 0);

  const total = subtotal + freight - totalDiscount;

  const handleClearCart = () => {
    setCartProducts([]);
  };

  return (
    <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>
        Resumo
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 1
        }}
      >
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1">
          {subtotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 1
        }}
      >
        <Typography variant="body1">Frete</Typography>
        <Typography variant="body1">
          {freight.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Typography>
      </Box>
      {totalDiscount > 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 1
          }}
        >
          <Typography variant="body1">Desconto</Typography>
          <Typography variant="body1">
            -
            {totalDiscount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Typography>
        </Box>
      )}
      <Divider sx={{ marginY: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2
        }}
      >
        <Typography variant="h6">Total a pagar</Typography>
        <Typography variant="h6">
          {total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        Finalizar Compra
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleClearCart}
      >
        Limpar Carrinho
      </Button>
    </Box>
  );
};

export default CartSummary;
