import { ReactNode } from 'react';
import { createContext, useState, useContext } from 'react';

export interface ProductsType {
  id: number;
  sku: string;
  path: string;
  name: string;
  image: string;
  price: number;
  specialPrice: number;
  filter: Filters[];
}

type Filters = {
  color: string;
  gender?: string;
};

interface SearchContextData {
  products: ProductsType[];
  productsFiltered: ProductsType[];
  setProducts: ([]: ProductsType[]) => void;
  setProductsFiltered: ([]: ProductsType[]) => void;
  isProductsFilter: boolean;
  setIsProductsFilter: (value: boolean) => void;
  filterSelected: string;
  setFilterSelected: (value: string) => void;
  productView: number;
  setProductsView: (value: number) => void;
  productOrder: string;
  setProductsOrder: (value: string) => void;
  productsArray: ProductsType[];
}

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext({} as SearchContextData);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [productsFiltered, setProductsFiltered] = useState<ProductsType[]>([]);
  const [isProductsFilter, setIsProductsFilter] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>('');
  const [productView, setProductsView] = useState<number>(0);
  const [productOrder, setProductsOrder] = useState<string>('');
  const productsArray = isProductsFilter ? productsFiltered : products;

  return (
    <SearchContext.Provider
      value={{
        products,
        setProducts,
        productsFiltered,
        setProductsFiltered,
        isProductsFilter,
        setIsProductsFilter,
        filterSelected,
        setFilterSelected,
        productView,
        setProductsView,
        productOrder,
        setProductsOrder,
        productsArray,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(SearchContext);
};
