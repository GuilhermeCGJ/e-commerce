import styled from 'styled-components';
import { Box, InputBase } from '@mui/material';

export const Container = styled(Box)`
  flex-grow: 1;
  width: 100%;
`;

export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItems = styled(Box)`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled(InputBase)`
  color: inherit;
  background-color: #f2f2f2;
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 10px;
`;

export const Content = styled(Box)`
  padding: 16px;
  width: 80&;
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 600px) {
    height: 20px;
  }
`;
