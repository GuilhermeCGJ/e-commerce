import styled from 'styled-components';
import { Box } from '@mui/material';

export const ProductDetail = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const SideWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  text-align: left;
  gap: 30vh;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }

  @media (max-width: 767px) {
    min-height: 30vh;
  }
`;

export const InfoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
