import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './index';
import { useCart } from '../../hooks/cart';

jest.mock('../../hooks/cart', () => ({
  useCart: jest.fn()
}));

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

describe('Home Component', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    mockUseCart.mockReturnValue({
      selectedProduct: null,
      setSelectedProduct: jest.fn(),
      cartProducts: [],
      setCartProducts: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn(),
      filteredProducts: [],
      handleFilterParams: jest.fn()
    });
  });

  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Home />
        </Router>
      </QueryClientProvider>
    );
  };

  it('should render the filter chips', () => {
    renderComponent();

    expect(screen.getByText('Tênis')).toBeInTheDocument();
    expect(screen.getByText('Camisetas')).toBeInTheDocument();
    expect(screen.getByText('Calças')).toBeInTheDocument();
  });

  it('should render the product cards when there are filtered products', () => {
    mockUseCart.mockReturnValue({
      selectedProduct: null,
      setSelectedProduct: jest.fn(),
      cartProducts: [],
      setCartProducts: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn(),
      filteredProducts: [
        {
          id: 1,
          category: 'Category',
          name: 'Produto 1',
          description: 'Descrição do Produto 1',
          price: 100,
          promotional_price: 80,
          image: 'image1.jpg'
        },
        {
          id: 2,
          category: 'Category',
          name: 'Produto 2',
          description: 'Descrição do Produto 2',
          price: 200,
          image: 'image2.jpg'
        }
      ],
      handleFilterParams: jest.fn()
    });

    renderComponent();

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });

  it('should call handleFilterParams when a filter chip is clicked', () => {
    const handleFilterParams = jest.fn();
    mockUseCart.mockReturnValue({
      filteredProducts: [],
      handleFilterParams,
      selectedProduct: null,
      setSelectedProduct: jest.fn(),
      cartProducts: [],
      setCartProducts: jest.fn(),
      isDrawerOpen: false,
      setIsDrawerOpen: jest.fn(),
      listOfProducts: [],
      setListOfProducts: jest.fn()
    });

    renderComponent();

    fireEvent.click(screen.getByText('Tênis'));

    expect(handleFilterParams).toHaveBeenCalledWith({
      filterBy: 'category',
      value: 'Tênis'
    });
  });
});
