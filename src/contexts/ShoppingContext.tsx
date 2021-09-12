import { ReactNode } from 'react';
import { createContext, useState, useContext } from 'react';
import { ProductsType } from './SearchContext';

interface ShoppingContextData {
  shoppingCart: ProductsType[][];
  setShoppingCart: ([]: ProductsType[][]) => void;
  purchaseData: any
  setPurchaseData: ({}) => void
}

interface ShoppingProviderProps {
  children: ReactNode;
}

interface PurchaseType {
  id: number;
  total: number;
  data: ProductsType[];
}

const ShoppingContext = createContext({} as ShoppingContextData);

export default function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ProductsType[][]>([]);
  const [purchaseData, setPurchaseData] = useState({});

  return (
    <ShoppingContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        purchaseData, 
        setPurchaseData
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export const useProductsShopping = () => {
  return useContext(ShoppingContext);
};
