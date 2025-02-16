import styled from 'styled-components';
import { Box, Select, Typography } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
  align-items: center;
  width: 100%;
`;

export const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const LeftSection = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const StyledSelect = styled(Select)`
  height: 30px;
  font-size: 0.875rem;
`;

export const StyledTypography = styled(Typography)`
  margin-right: 8px;
`;
