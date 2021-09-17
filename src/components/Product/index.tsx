import {
  CartProductsType,
  useProductsShopping,
} from '../../contexts/ShoppingContext';
import { useSearch, ProductsType } from '../../contexts/SearchContext';
import { formatValue, handlePurchaseTotal } from '../../utils';

import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  ContainerImage,
  ContainerInfo,
  ContentInfo,
  ProductName,
  ContainerSpecialPrice,
  ProductPrice,
} from './style';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  specialPrice?: number;
}

const Product = ({ name, price, image, specialPrice, id }: ProductProps) => {
  const { shoppingCart, setShoppingCart } = useProductsShopping();
  const { products } = useSearch();

  function handleProductPurchase(
    productId: number,
    products: any,
    shoppingCart: CartProductsType[],
  ) {
    const purchasedProduct = products.find(
      (product: any) => product.id === productId,
    );

    const cartProduct = shoppingCart.find(
      (product) => product.id === productId,
    );

    const finalProducts = shoppingCart.filter(
      (product) => product.id !== productId,
    );

    setShoppingCart([
      ...finalProducts,
      {
        ...purchasedProduct,
        purchase_quantity: cartProduct ? cartProduct.purchase_quantity + 1 : 1,
        purchase_total: cartProduct
          ? handlePurchaseTotal(cartProduct.purchase_quantity + 1, price)
          : price,
      },
    ]);
  }

  return (
    <Container>
      <ContainerImage>
        <Link href={`/search-products/${name}`} passHref>
          <Image width={300} height={300} src={image} alt={name} />
        </Link>
      </ContainerImage>

      <ContainerInfo>
        <ProductName>{name}</ProductName>

        <ContentInfo>
          {specialPrice ? (
            <ContainerSpecialPrice>
              <p>{formatValue(price)}</p>
              <p>{formatValue(specialPrice)}</p>
            </ContainerSpecialPrice>
          ) : (
            <ProductPrice>{formatValue(price)}</ProductPrice>
          )}

          <button
            onClick={() => handleProductPurchase(id, products, shoppingCart)}
          >
            Comprar
          </button>
        </ContentInfo>
      </ContainerInfo>
    </Container>
  );
};

export default Product;
