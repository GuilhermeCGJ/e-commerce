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
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        cartProducts,
        setCartProducts,
        isDrawerOpen,
        setIsDrawerOpen
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
