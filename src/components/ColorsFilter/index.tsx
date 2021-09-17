import { ProductsType, useSearch } from '../../contexts/SearchContext';
import { includesColorCode, setLowerCase } from '../../utils';
import { ContainerColors } from './style';

interface ColorsFilterProps {
  slug: string;
  colorSelected: number | null;
  setColorSelected: (value: number | null) => void;
}

const ColorsFilter = ({
  slug,
  colorSelected,
  setColorSelected,
}: ColorsFilterProps) => {
  const {
    products,
    setProductsFiltered,
    setIsProductsFilter,
    setFilterSelected,
  } = useSearch();
  const productsColors = products.map((p) => p.filter[0].color);
  const reduceProductColors = [...new Set(productsColors)];
  const newProductsColors = reduceProductColors.map((e) => ({
    color: e,
    codeColor: includesColorCode(e),
  }));

  function handleFilterProductColor(
    productColor: string,
    products: ProductsType[],
    index: number,
  ) {
    setColorSelected(index);
    setIsProductsFilter(true);
    const filteredProducts = products.filter(({ filter }) => {
      return filter[0].color
        ?.toLowerCase()
        .includes(setLowerCase(productColor));
    });

    setProductsFiltered(filteredProducts);
    setFilterSelected(productColor);
  }

  return (
    <div>
      <h3>Cores</h3>

      <ContainerColors>
        {slug === 'calcas' ? (
          <>
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
          </>
        ) : (
          newProductsColors.map(({ color, codeColor }, i) => (
            <div
              key={i}
              className={colorSelected === i ? 'colorSelected' : undefined}
              style={{ backgroundColor: codeColor }}
              onClick={() => handleFilterProductColor(color, products, i)}
            ></div>
          ))
        )}
      </ContainerColors>
    </div>
  );
};

export default ColorsFilter;
