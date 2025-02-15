import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount_percentage?: number;
  promotional_price?: number;
  image: string;
  description: string;
}

export interface FilterParams {
  category: string;
  name: string;
}

export interface HandleFilterParams {
  filterBy: string;
  value: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

interface CartContextProps {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  cartProducts: CartProduct[];
  setCartProducts: (products: CartProduct[]) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  listOfProducts: Product[];
  setListOfProducts: (products: Product[]) => void;
  filteredProducts: Product[];
  handleFilterParams: ({ filterBy, value }: HandleFilterParams) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [listOfProducts, setListOfProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [filterParams, setFilterParams] = useState<FilterParams>({
    category: '',
    name: ''
  });

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleFilterParams = ({ filterBy, value }: HandleFilterParams) => {
    setFilterParams({
      ...filterParams,
      [filterBy]: value
    });
  };

  const OnFilterProducts = () => {
    let filtered = listOfProducts;

    if (filterParams.category) {
      filtered = filtered.filter(
        (product) => product.category === filterParams.category
      );
    }

    if (filterParams.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filterParams.name.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    OnFilterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParams, listOfProducts]);

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
        isDrawerOpen,
        setIsDrawerOpen,
        listOfProducts,
        setListOfProducts,
        filteredProducts,
        handleFilterParams
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
