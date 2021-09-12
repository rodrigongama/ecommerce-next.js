import { ReactNode } from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

interface Categories {
  id: number;
  name: string;
  path: string;
}

interface CategoriesContextData {
  categories: Categories[];
  initialLoading: boolean;
}

interface CategoriesProviderProps {
  children: ReactNode;
}

const CategoriesContext = createContext({} as CategoriesContextData);

export default function CategoriesProvider({
  children,
}: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await api.get('/list');

        setCategories(data);
        setInitialLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        initialLoading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useProductsCategories = () => {
  return useContext(CategoriesContext);
};
