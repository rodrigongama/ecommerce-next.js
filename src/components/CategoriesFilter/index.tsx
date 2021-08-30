import { ProductsType, useSearch } from '../../contexts/SearchContext';
import setLowerCase from '../../utils/setLowerCase';

const CategoriesFilter = () => {
  const {
    products,
    setProductsFiltered,
    setIsProductsFilter,
    setFilterSelected,
  } = useSearch();

  function handleFilterProductGender(
    productGender: string,
    products: ProductsType[],
  ) {
    setIsProductsFilter(true);
    const filteredProducts = products.filter(({ filter }) => {
      return filter[0].gender
        ?.toLowerCase()
        .includes(setLowerCase(productGender));
    });

    setProductsFiltered(filteredProducts);
    setFilterSelected(productGender);
  }

  return (
    <div>
      <h3>Categorias</h3>
      <ul>
        <li>
          <label htmlFor="maleProduct">Masculina</label>
          <input
            type="radio"
            name="maleProduct"
            id="maleProduct"
            value="masculina"
            onClick={({ currentTarget }) =>
              handleFilterProductGender(currentTarget.value, products)
            }
          />
        </li>
        <li>
          <label htmlFor="femaleProduct">Feminina</label>
          <input
            type="radio"
            name="femaleProduct"
            id="femaleProduct"
            value="feminina"
            onClick={({ currentTarget }) =>
              handleFilterProductGender(currentTarget.value, products)
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default CategoriesFilter;
