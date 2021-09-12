import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

import Link from 'next/link';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { SearchContainer, Label } from './style';

const Search = () => {
  const [productsSearch, setProductsSearch] = useState<string>('');
  const [isInputSearch, setIsInputSearch] = useState<boolean>(false);

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

        <Link href={`/search-products/${productsSearch}`} passHref>
          <button onClick={() => setProductsSearch('')}>Buscar</button>
        </Link>
      </div>
    </SearchContainer>
  );
};

export default Search;
