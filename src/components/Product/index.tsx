import formatValue from '../../utils/formatValue';
import Image from 'next/image';
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
  name: string;
  price: number;
  image: string;
  specialPrice?: number;
}

const Product = ({ name, price, image, specialPrice }: ProductProps) => {
  return (
    <Container>
      <ContainerImage>
        <Image width={300} height={300} src={image} alt={name} />
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

          <button>Comprar</button>
        </ContentInfo>
      </ContainerInfo>
    </Container>
  );
};

export default Product;
