//prettier-ignore
import { CartProductsType, useProductsShopping } from '../../contexts/ShoppingContext';
import { formatValue, handlePurchaseTotal } from '../../utils';

import Image from 'next/image';
import { GrTrash } from 'react-icons/gr';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { TableContainer, ButtonsQuantity } from './style';

interface ShoppingCartItemsProps {
  handleDeleteProduct: (id: number, shoppingCart: CartProductsType[]) => void;
}

const INCREMENT_QUANTITY = 1;
const DECREMENT_QUANTITY = -1;

const ShoppingCartItems = ({ handleDeleteProduct }: ShoppingCartItemsProps) => {
  const { shoppingCart, setShoppingCart } = useProductsShopping();

  function handleProductQuantity(
    id: number,
    quantity_operation: number,
    shoppingCart: any,
  ) {
    const currentProduct = shoppingCart.find(
      (product: any) => product.id === id,
    );
    const finalProducts = shoppingCart.filter(
      (product: any) => product.id !== id,
    );

    setShoppingCart([
      ...finalProducts,
      {
        ...currentProduct,
        purchase_quantity:
          currentProduct.purchase_quantity + quantity_operation,
        purchase_total: handlePurchaseTotal(
          currentProduct.purchase_quantity + quantity_operation,
          currentProduct.price,
        ),
      },
    ]);
  }

  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>

      <tbody>
        {shoppingCart.map(({ id, image, name, price, purchase_quantity }) => (
          <tr key={id}>
            <td>
              <Image width={150} height={150} src={image} alt={name} />
            </td>
            <td>{name}</td>
            <td>{formatValue(price)}</td>

            <ButtonsQuantity>
              {purchase_quantity > 1 && (
                <AiOutlineMinusCircle
                  onClick={() =>
                    handleProductQuantity(id, DECREMENT_QUANTITY, shoppingCart)
                  }
                />
              )}
              <p>{purchase_quantity}</p>
              <AiOutlinePlusCircle
                onClick={() =>
                  handleProductQuantity(id, INCREMENT_QUANTITY, shoppingCart)
                }
              />
            </ButtonsQuantity>

            <td>
              <GrTrash onClick={() => handleDeleteProduct(id, shoppingCart)} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default ShoppingCartItems;
