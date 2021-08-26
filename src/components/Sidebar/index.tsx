import { useEffect, useState } from 'react';
import { ProductsType, useSearch } from '../../contexts/SearchContext';
import includesColorCode from '../../utils/includesColorCode';
import setLowerCase from '../../utils/setLowerCase';
import { SidebarContainer, ContainerColors, ContainerButton } from './style';

interface SidebarProps {
  slug: string | string[] | undefined;
}

const Sidebar = ({ slug }: SidebarProps) => {
  const {
    products,
    setProductsFiltered,
    setIsProductsFilter,
    setFilterSelected,
  } = useSearch();
  const [colorSelected, setColorSelected] = useState<number | null>(null);
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

  function handleCleanFilters(): void {
    setIsProductsFilter(false);
    setFilterSelected('');
    setColorSelected(null);
  }

  useEffect(() => {
    setColorSelected(null);
  }, [slug]);

  return (
    <SidebarContainer>
      <div>
        <h2>Filtre por</h2>

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

        <ContainerButton>
          <button onClick={handleCleanFilters}>Limpar Filtros</button>
        </ContainerButton>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
