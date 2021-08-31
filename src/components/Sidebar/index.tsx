import { Dispatch } from 'react';
import { useEffect, useState } from 'react';
import { useSearch } from '../../contexts/SearchContext';
import CategoriesFilter from '../CategoriesFilter';
import ColorsFilter from '../ColorsFilter';
import TypesFilter from '../TypesFilter';
import { SidebarContainer, ContainerButton } from './style';

interface SidebarProps {
  slug: string | string[] | undefined;
  setProductsOrder: Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ slug, setProductsOrder }: SidebarProps) => {
  const { setIsProductsFilter, setFilterSelected } = useSearch();
  const [colorSelected, setColorSelected] = useState<number | null>(null);

  function handleCleanFilters(): void {
    setIsProductsFilter(false);
    setFilterSelected('');
    setProductsOrder('');
    setColorSelected(null);
  }

  useEffect(() => {
    setColorSelected(null);
  }, [slug]);

  return (
    <SidebarContainer>
      <h2>Filtre por</h2>

      <CategoriesFilter />

      <ColorsFilter
        slug={slug}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />

      <TypesFilter />

      <ContainerButton>
        <button onClick={handleCleanFilters}>Limpar Filtros</button>
      </ContainerButton>
    </SidebarContainer>
  );
};

export default Sidebar;
