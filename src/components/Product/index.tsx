import { useProductsShopping } from '../../contexts/ShoppingContext';
import { useSearch, ProductsType } from '../../contexts/SearchContext';
import formatValue from '../../utils/formatValue';
import Image from 'next/image';
import Link from 'next/link'
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

  function handleProductPurchase(productId: number, products: ProductsType[]) {
    const purchasedProduct = products.filter(
      (product) => product.id === productId,
    );

    setShoppingCart([...shoppingCart, purchasedProduct]);
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

          <button onClick={() => handleProductPurchase(id, products)}>
            Comprar
          </button>
        </ContentInfo>
      </ContainerInfo>
    </Container>
  );
};

export default Product;
