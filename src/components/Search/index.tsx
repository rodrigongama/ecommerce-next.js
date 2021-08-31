import { useState } from 'react';
import { ProductsType, useSearch } from '../../contexts/SearchContext';
import setLowerCase from '../../utils/setLowerCase';
import replaceSpecialChars from '../../utils/replaceSpecialChars';
import useMediaQuery from '../../hooks/useMediaQuery';

import { GiMagnifyingGlass } from 'react-icons/gi';
import { SearchContainer, Label } from './style';

interface SearchProps {
  productsArray: ProductsType[];
}

const Search = ({ productsArray }: SearchProps) => {
  const { setProductsFiltered, setIsProductsFilter } = useSearch();
  const [productsSearch, setProductsSearch] = useState<string>('');
  const [isInputSearch, setIsInputSearch] = useState<boolean>(false);

  function handleFilterProductName(
    productsSearch: string,
    productsArray: ProductsType[],
  ) {
    if (!productsSearch) {
      return;
    }

    const filteredProducts = productsArray.filter(({ name }) => {
      return handleProductName(name).includes(
        handleProductName(productsSearch),
      );
    });

    setIsProductsFilter(true);
    setProductsFiltered(filteredProducts);
    setProductsSearch('');
  }

  function handleProductName(productName: string) {
    return replaceSpecialChars(setLowerCase(productName));
  }

  return (
    <SearchContainer>
      <Label htmlFor="searchProduct" isInputSearch={isInputSearch}>
        {useMediaQuery(765) && (
          <GiMagnifyingGlass
            className="searchIcon"
            onClick={() => setIsInputSearch(true)}
          />
        )}
      </Label>

      <div className={isInputSearch ? 'inputMobile' : undefined}>
        <input
          type="text"
          name="searchProduct"
          id="searchProduct"
          value={productsSearch}
          onChange={({ target }) => setProductsSearch(target.value)}
        />
        <button
          onClick={() => handleFilterProductName(productsSearch, productsArray)}
        >
          Buscar
        </button>
      </div>
    </SearchContainer>
  );
};

export default Search;
