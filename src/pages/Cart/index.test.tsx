import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cart from './index';
import { useCart } from '../../hooks/cart';

jest.mock('../../hooks/cart', () => ({
  useCart: jest.fn()
}));

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

describe('Cart Component', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseCart.mockReturnValue({
      selectedProduct: null,
      setSelectedProduct: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn(),
      filteredProducts: [],
      handleFilterParams: jest.fn(),
      cartProducts: [],
      setCartProducts: jest.fn()
    });
  });

  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Cart />
        </Router>
      </QueryClientProvider>
    );
  };

  it('should render the empty cart message when there are no products', () => {
    renderComponent();

    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument();
    expect(screen.getByText('Seu carrinho está vazio.')).toBeInTheDocument();
    expect(screen.getByText('Voltar à loja')).toBeInTheDocument();
  });

  it('should render the cart items when there are products', () => {
    mockUseCart.mockReturnValue({
      selectedProduct: null,
      setSelectedProduct: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn(),
      filteredProducts: [],
      handleFilterParams: jest.fn(),
      cartProducts: [
        {
          id: 1,
          category: 'Category',
          name: 'Produto 1',
          description: 'Descrição do Produto 1',
          price: 100,
          promotional_price: 80,
          quantity: 1,
          image: 'image1.jpg'
        },
        {
          id: 2,
          category: 'Category',
          name: 'Produto 2',
          description: 'Descrição do Produto 2',
          price: 200,
          quantity: 2,
          image: 'image2.jpg'
        }
      ],
      setCartProducts: jest.fn()
    });

    renderComponent();

    expect(screen.getByText('Carrinho de Compras')).toBeInTheDocument();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
    expect(screen.getByText('Finalizar Compra')).toBeInTheDocument();
    expect(screen.getByText('Limpar Carrinho')).toBeInTheDocument();
  });
});
