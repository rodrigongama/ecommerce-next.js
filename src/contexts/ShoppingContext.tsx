import { ReactNode, useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import { handlePurchaseTotal } from '../utils';
import { ProductsType } from './SearchContext';

interface ShoppingContextData {
  shoppingCart: CartProductsType[];
  setShoppingCart: ([]: CartProductsType[]) => void;
  purchaseData: PurchaseType;
  setPurchaseData: (value: PurchaseType) => void;
  handleDeleteProduct: (id: number, shoppingCart: any) => void;
  handleCleanCart: () => void;
  handleTotalPrice: (cartProducts: CartProductsType[]) => void;
  totalPrice: number;
  handleProductQuantity: (
    id: number,
    quantity_operation: number,
    shoppingCart: any,
  ) => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

export interface CartProductsType extends ProductsType {
  purchase_quantity: number;
  purchase_total: number;
}

interface PurchaseType {
  id: string;
  total: string;
  data: ProductsType[];
}

const ShoppingContext = createContext({} as ShoppingContextData);

export default function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartProductsType[]>([]);
  const [purchaseData, setPurchaseData] = useState<PurchaseType>(
    {} as PurchaseType,
  );
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function handleDeleteProduct(id: number, shoppingCart: CartProductsType[]) {
    const newShoppingData = shoppingCart.filter((product) => product.id !== id);
    setShoppingCart(newShoppingData);
    handleTotalPrice(newShoppingData);
  }

  function handleTotalPrice(cartProducts: CartProductsType[]) {
    const prices = cartProducts.map((p) => p.purchase_total);

    if (cartProducts.length === 0) {
      handleCleanCart();
      return;
    }

    setTotalPrice(prices.reduce((acc, cc) => acc + cc, 0));
  }

  function handleCleanCart() {
    setShoppingCart([]);
    setTotalPrice(0);
  }

  function handleProductQuantity(
    id: number,
    quantity_operation: number,
    shoppingCart: any,
  ) {
    const currentProduct = shoppingCart.find(
      (product: any) => product.id === id,
    );
    const finalProducts = shoppingCart.filter(
      (product: any) => product.id !== id,
    );

    setShoppingCart([
      ...finalProducts,
      {
        ...currentProduct,
        purchase_quantity:
          currentProduct.purchase_quantity + quantity_operation,
        purchase_total: handlePurchaseTotal(
          currentProduct.purchase_quantity + quantity_operation,
          currentProduct.price,
        ),
      },
    ]);
  }

  function getShoppingCart() {
    const savedShoppingCart = localStorage.getItem('@e-commerce/shoppingCart');

    if (savedShoppingCart) {
      return JSON.parse(savedShoppingCart);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShoppingCart(getShoppingCart());
    }
  }, []);

  return (
    <ShoppingContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        purchaseData,
        setPurchaseData,
        handleProductQuantity,
        handleDeleteProduct,
        handleCleanCart,
        handleTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

export const useCart = (): ShoppingContextData => {
  return useContext(ShoppingContext);
};
