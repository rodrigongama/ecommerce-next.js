import { useEffect, useState } from 'react';
import { useSearch } from '../../contexts/SearchContext';
import { CategoriesFilter, ColorsFilter, TypesFilter } from '../index';
import { SidebarContainer, ContainerButton } from './style';

interface SidebarProps {
  slug: string;
  setProductsOrder: (value: string) => void;
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

      <CategoriesFilter slug={slug} />

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
