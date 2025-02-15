import { Typography, CardContent, Box, Card, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const ProductCard = styled(Card)`
  max-width: 160px;
  background-color: transparent;
  border-radius: 5px;
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px); /* Move o card ligeiramente para cima */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra */
  }

  @media (min-width: 1024px) {
    width: 160px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 140px;
  }

  @media (max-width: 767px) {
    width: 120px;
  }
`;

export const ProductMedia = styled(CardMedia)`
  height: 0;
  padding-top: 75%;
  border-radius: 5px;
  background-color: none;
`;

export const ProductCategory = styled(Typography)`
  color: rgb(6, 120, 250);
  align-items: flex-start;
  display: flex;
`;

export const ContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 16px; /* Default padding for larger screens */

  @media (max-width: 1024px) {
    padding: 12px !important;
  }

  @media (max-width: 768px) {
    padding: 8px !important;
  }

  @media (max-width: 480px) {
    padding: 4px !important;
  }
`;

export const DiscountPercentage = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 204, 255, 0.8);
  padding: 4px 8px;
  border-radius: 0 0 0 8px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  flex-direction: row-reverse;
`;

export const OriginalPrice = styled(Typography)`
  text-decoration: line-through;
  color: #888;
`;
