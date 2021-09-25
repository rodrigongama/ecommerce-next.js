import { useProductsShopping } from '../../contexts/ShoppingContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { CartContainer } from './style';

const CartIcon = () => {
  const { shoppingCart } = useProductsShopping();

  return (
    <Link href="/shopping-cart" passHref>
      <CartContainer>
        <AiOutlineShoppingCart />
        {shoppingCart.length === 0 ? null : shoppingCart.length}
      </CartContainer>
    </Link>
  );
};

export default CartIcon;
