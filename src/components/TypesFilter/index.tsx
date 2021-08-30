import { ProductsType, useSearch } from '../../contexts/SearchContext';
import setLowerCase from '../../utils/setLowerCase';

const TypesFilter = () => {
  const {
    products,
    setProductsFiltered,
    setIsProductsFilter,
    setFilterSelected,
  } = useSearch();

  function handleFilterProductType(
    productType: string,
    products: ProductsType[],
  ) {
    setIsProductsFilter(true);
    const filteredProducts = products.filter(({ name }) => {
      return name.toLowerCase().includes(setLowerCase(productType));
    });

    setProductsFiltered(filteredProducts);
    setFilterSelected(productType);
  }

  return (
    <div>
      <h3>Tipo</h3>

      <ul>
        <li>
          <label htmlFor="raceProduct">Corrida</label>
          <input
            type="radio"
            name="raceProduct"
            id="raceProduct"
            value="corrida"
            onClick={({ currentTarget }) =>
              handleFilterProductType(currentTarget.value, products)
            }
          />
        </li>
        <li>
          <label htmlFor="walkProduct">Caminhada</label>
          <input
            type="radio"
            name="walkProduct"
            id="walkProduct"
            value="caminhada"
            onClick={({ currentTarget }) =>
              handleFilterProductType(currentTarget.value, products)
            }
          />
        </li>
        <li>
          <label htmlFor="casualProduct">Casual</label>
          <input
            type="radio"
            name="casualProduct"
            id="casualProduct"
            value="slip"
            onClick={({ currentTarget }) =>
              handleFilterProductType(currentTarget.value, products)
            }
          />
        </li>
        <li>
          <label htmlFor="socialProduct">Social</label>
          <input
            type="radio"
            name="socialProduct"
            id="socialProduct"
            value="social"
            onClick={({ currentTarget }) =>
              handleFilterProductType(currentTarget.value, products)
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default TypesFilter;
