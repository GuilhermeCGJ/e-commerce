import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetail from './index';
import { useCart } from '../../hooks/cart';

jest.mock('../../hooks/cart', () => ({
  useCart: jest.fn()
}));

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

describe('ProductDetail Component', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseCart.mockReturnValue({
      selectedProduct: {
        id: 1,
        name: 'Produto 1',
        category: 'Categoria 1',
        description: 'Descrição do Produto 1',
        price: 100,
        promotional_price: 80,
        image: 'image1.jpg'
      },
      filteredProducts: [],
      handleFilterParams: jest.fn(),
      setSelectedProduct: jest.fn(),
      cartProducts: [],
      setCartProducts: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn()
    });
  });

  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <ProductDetail />
        </Router>
      </QueryClientProvider>
    );
  };

  it('should render the product details', () => {
    renderComponent();

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Descrição do Produto 1')).toBeInTheDocument();
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
    expect(screen.getByText('R$ 80,00')).toBeInTheDocument();
  });

  it('should display a toast message when the product is added to the cart', () => {
    renderComponent();

    fireEvent.click(screen.getByText('Adicionar ao carrinho'));

    expect(
      screen.getByText('Item adicionado ao carrinho com sucesso!')
    ).toBeInTheDocument();
  });
});
