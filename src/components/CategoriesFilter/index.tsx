import { ProductsType, useSearch } from '../../contexts/SearchContext';
import setLowerCase from '../../utils/setLowerCase';

interface CategoriesFilterProps {
  slug: string;
}

const CategoriesFilter = ({ slug }: CategoriesFilterProps) => {
  const {
    products,
    setProductsFiltered,
    setIsProductsFilter,
    setFilterSelected,
  } = useSearch();
  const productsByGender = products.map((p) => p.filter[0].gender);
  const reduceProductsByGender = [...new Set(productsByGender)];

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
        {slug === 'calcas' ? (
          reduceProductsByGender.map((gender, i) => (
            <li key={i}>
              <label htmlFor={gender}>{gender}</label>
              <input
                type="radio"
                name={gender}
                id={gender}
                value={gender}
                onClick={({ currentTarget }) =>
                  handleFilterProductGender(currentTarget.value, products)
                }
              />
            </li>
          ))
        ) : (
          <>
            <li>Masculina</li>
            <li>Feminina</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
