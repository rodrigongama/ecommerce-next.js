import { ReactNode } from 'react';
import { createContext, useState, useContext } from 'react';
import { ProductsType } from './SearchContext';

interface ShoppingContextData {
  shoppingCart: ProductsType[][];
  setShoppingCart: ([]: ProductsType[][]) => void;
  purchaseData: PurchaseType;
  setPurchaseData: (value: PurchaseType) => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

interface PurchaseType {
  id: string;
  total: string;
  data: ProductsType[];
}

const ShoppingContext = createContext({} as ShoppingContextData);

export default function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<ProductsType[][]>([]);
  const [purchaseData, setPurchaseData] = useState<PurchaseType>(
    {} as PurchaseType,
  );

  return (
    <ShoppingContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        purchaseData,
        setPurchaseData,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export const useProductsShopping = () => {
  return useContext(ShoppingContext);
};
