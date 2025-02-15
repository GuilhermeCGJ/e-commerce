import styled from 'styled-components';

export const ProductsList = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1024px) {
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;
