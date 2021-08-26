import { Dispatch, ReactNode } from 'react';
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
  setProducts: ([]) => void;
  productsFiltered: ProductsType[];
  setProductsFiltered: ([]) => void;
  productsIsSearched: boolean;
  setProductsIsSearched: Dispatch<React.SetStateAction<boolean>>;
  isProductsFilter: boolean;
  setIsProductsFilter: Dispatch<React.SetStateAction<boolean>>;
  filterSelected: string;
  setFilterSelected: Dispatch<React.SetStateAction<string>>;
}

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext({} as SearchContextData);

export default function SearchProvider({ children }: SearchProviderProps) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [productsIsSearched, setProductsIsSearched] = useState<boolean>(false);
  const [productsFiltered, setProductsFiltered] = useState<ProductsType[]>([]);
  const [isProductsFilter, setIsProductsFilter] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>('');

  return (
    <SearchContext.Provider
      value={{
        products,
        setProducts,
        productsFiltered,
        productsIsSearched,
        setProductsIsSearched,
        setProductsFiltered,
        isProductsFilter,
        setIsProductsFilter,
        filterSelected,
        setFilterSelected,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(SearchContext);
};
