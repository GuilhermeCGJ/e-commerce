import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Template from './index';
import { useCart } from '../hooks/cart';

jest.mock('../hooks/cart', () => ({
  useCart: jest.fn()
}));

const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

describe('Template Component', () => {
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

  const renderComponent = (children: React.ReactNode) => {
    return render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Template>{children}</Template>
        </Router>
      </QueryClientProvider>
    );
  };

  it('should render the component', () => {
    renderComponent(<div>Child Component</div>);

    expect(screen.getByText('Nome do Site')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesquisar…')).toBeInTheDocument();
    expect(screen.getByLabelText('Carrinho')).toBeInTheDocument();
  });

  it('should call handleFilterParams on search input change', () => {
    const handleFilterParams = jest.fn();
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
      handleFilterParams
    });

    renderComponent(<div>Child Component</div>);

    const searchInput = screen.getByPlaceholderText('Pesquisar…');
    fireEvent.change(searchInput, { target: { value: 'Tênis' } });

    expect(handleFilterParams).toHaveBeenCalledWith({
      filterBy: 'name',
      value: 'Tênis'
    });
  });

  it('should display loading spinner when isLoading is true', () => {
    renderComponent(<div>Child Component</div>);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
