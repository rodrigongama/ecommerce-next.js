import { ProductsType, useSearch } from '../../contexts/SearchContext';
import replaceSpecialChars from '../../utils/replaceSpecialChars';

import { MdViewModule, MdViewList } from 'react-icons/md';
import { ContainerView, ContainerOrder } from './style';

interface ViewBarProps {
  productView: number;
  setProductsView: (value: number) => void;
  productsArray: ProductsType[];
}

const ViewBar = ({
  productView,
  setProductsView,
  productsArray,
}: ViewBarProps) => {
  const { setProductsFiltered, productOrder, setProductsOrder } = useSearch();

  function handleProductOrder(value: string, productsArray: ProductsType[]) {
    setProductsOrder(value);

    let newOrder;
    switch (value) {
      case 'lower':
        newOrder = productsArray.sort((a, b) => a.price - b.price);
        break;
      case 'higher':
        newOrder = productsArray.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        newOrder = productsArray.sort((a, b) =>
          replaceSpecialChars(a.name).localeCompare(
            replaceSpecialChars(b.name),
          ),
        );
        break;
      default:
        newOrder = productsArray;
    }

    setProductsFiltered(newOrder);
  }

  return (
    <ContainerView>
      <div>
        <MdViewModule
          onClick={() => setProductsView(0)}
          className={productView === 0 ? 'iconViewSelected' : undefined}
        />
        <MdViewList
          onClick={() => setProductsView(1)}
          className={productView === 1 ? 'iconViewSelected' : undefined}
        />
      </div>

      <ContainerOrder>
        <p>Ordernar por</p>
        <select
          name="filterOrder"
          id="filterOrder"
          value={productOrder}
          onChange={({ target }) =>
            handleProductOrder(target.value, productsArray)
          }
        >
          <option value=""></option>
          <option value="lower">Menor preço</option>
          <option value="higher">Maior preço</option>
          <option value="name">Nome</option>
        </select>
      </ContainerOrder>
    </ContainerView>
  );
};

export default ViewBar;
