import { Box, Typography, IconButton, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import * as S from '../CartSummary/styles';
import { CartProduct, useCart } from '../../hooks/cart';

interface Props {
  product: CartProduct;
}

const CartItem = ({ product }: Props) => {
  const { setCartProducts, cartProducts } = useCart();

  const handleRemove = () => {
    setCartProducts(cartProducts.filter((item) => item.id !== product.id));
  };

  const handleIncrease = () => {
    setCartProducts(
      cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <S.CartItem>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 1 }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          marginLeft: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6">{product.name}</Typography>
          <IconButton onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 1
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1" sx={{ margin: '0 8px' }}>
              {product.quantity}
            </Typography>
            <IconButton onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            {product.promotional_price ? (
              <>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Typography>
                <Typography variant="body1" color="primary">
                  {product.promotional_price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Typography>
              </>
            ) : (
              <Typography variant="body1">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </S.CartItem>
  );
};

export default CartItem;
