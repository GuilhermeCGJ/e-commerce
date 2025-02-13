import { createContext, useContext, useState, ReactNode } from 'react';

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

interface CartContextProps {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  cartProducts: Product[];
  setCartProducts: (products: Product[]) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
