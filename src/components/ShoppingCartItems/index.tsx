import { useCart } from '../../contexts/ShoppingContext';
import { formatValue } from '../../utils';

import Image from 'next/image';
import { GrTrash } from 'react-icons/gr';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { TableContainer, ButtonsQuantity } from './style';

const INCREMENT_QUANTITY = 1;
const DECREMENT_QUANTITY = -1;

const ShoppingCartItems = () => {
  const { shoppingCart, handleProductQuantity, handleDeleteProduct } =
    useCart();

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
