import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import * as S from './styles';
import { useCart } from '../../hooks/cart';
import Toast from '../../components/Toast';

const ProductDetail = () => {
  const { selectedProduct, cartProducts, setCartProducts } = useCart();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    if (selectedProduct) {
      const existingProduct = cartProducts.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingProduct) {
        setCartProducts(
          cartProducts.map((item) =>
            item.id === selectedProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCartProducts([...cartProducts, { ...selectedProduct, quantity: 1 }]);
      }
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <S.ProductDetail>
      <S.ProductImage
        src={selectedProduct?.image}
        alt={selectedProduct?.name}
      />
      <S.SideWrapper>
        <S.InfoWrapper>
          <Typography variant="h4">{selectedProduct?.name}</Typography>
          {selectedProduct?.promotional_price ? (
            <>
              <Typography
                variant="body2"
                sx={{ textDecoration: 'line-through' }}
              >
                {selectedProduct.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </Typography>
              <Typography variant="h5" color="primary">
                {selectedProduct.promotional_price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </Typography>
            </>
          ) : (
            <Typography variant="h5">
              {selectedProduct?.price?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </Typography>
          )}
          <Typography variant="h6">Descrição</Typography>
          <Typography variant="body1">
            {selectedProduct?.description}
          </Typography>
        </S.InfoWrapper>
        <Button variant="contained" color="info" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </Button>
      </S.SideWrapper>
      <Toast
        open={open}
        onClose={handleClose}
        message="Item adicionado ao carrinho com sucesso!"
        severity="success"
      />
    </S.ProductDetail>
  );
};

export default ProductDetail;
