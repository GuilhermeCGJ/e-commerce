import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  AccountCircle,
  Search as SearchIcon,
  ShoppingCart
} from '@mui/icons-material';
import * as S from './styles';
import { useCart } from '../hooks/cart';
import axiosInstance from '../services/axios';
import { useQuery } from '@tanstack/react-query';
import logo from '../assets/e-com-logo.svg';

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {
  const { cartProducts, setListOfProducts, handleFilterParams } = useCart();
  const [searchItem, setSearchItem] = useState('');

  const { isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axiosInstance.get('/products');
      setListOfProducts(response.data);
      return response.data;
    },
    refetchOnWindowFocus: false
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchItem(value);
    handleFilterParams({ filterBy: 'name', value });
  };

  return (
    <S.Container>
      <AppBar position="static">
        <Toolbar>
          <S.NavMenu>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <S.Logo src={logo} alt="Logo do Site" />
            </Link>
            <S.MenuItems>
              <S.SearchInput
                placeholder="Pesquisar…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchItem}
                onChange={handleSearchChange}
                startAdornment={<SearchIcon />}
              />
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
              <IconButton
                component={Link}
                to="/cart"
                color="inherit"
                aria-label="Carrinho"
              >
                <Badge badgeContent={cartProducts.length} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </S.MenuItems>
          </S.NavMenu>
        </Toolbar>
      </AppBar>
      <S.Content>
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </S.Content>
    </S.Container>
  );
};

export default Template;
