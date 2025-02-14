import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CartList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
