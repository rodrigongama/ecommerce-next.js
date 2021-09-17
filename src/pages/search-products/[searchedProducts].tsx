//prettier-ignore
import { Header, Footer, Product, ViewBar, Overlay, Loading } from '../../components';
import { ProductsType, useSearch } from '../../contexts/SearchContext';
import { replaceSpecialChars, setLowerCase } from '../../utils';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import {
  MainContainer,
  Navigation,
  MainContent,
  ContainerProducts,
} from '../../styles/pages/Products';
import { useEffect, useState } from 'react';

const SearchedProducts = () => {
  const router = useRouter();
  const { searchedProducts } = router.query;
  const {
    productsFiltered,
    productView,
    setProductsView,
    setIsProductsFilter,
    setProductsFiltered,
    products,
  } = useSearch();
  const [loading, setLoading] = useState(true);

  function handleFilterProductName(
    searchedProducts: any,
    products: ProductsType[],
  ) {
    if (!searchedProducts) {
      return;
    }

    const filteredProducts = products.filter(({ name }) => {
      return handleProductName(name).includes(
        handleProductName(searchedProducts),
      );
    });

    setIsProductsFilter(true);
    setProductsFiltered(filteredProducts);

    setInterval(() => {
      setLoading(false);
    }, 500);
  }

  function handleProductName(productName: string) {
    return replaceSpecialChars(setLowerCase(productName));
  }

  useEffect(() => {
    handleFilterProductName(searchedProducts, products);
  }, []);

  return (
    <>
      <Head>
        <title>{searchedProducts} | WebJump Ecommerce</title>
      </Head>

      {loading && (
        <Overlay>
          <Loading />
          <p>Realizando sua pesquisa...</p>
        </Overlay>
      )}

      <Header />

      <MainContainer>
        <Navigation>
          <Link href="/">Página Inicial</Link>
          <span>&gt;</span>
          <p>{searchedProducts}</p>
        </Navigation>

        <MainContent style={{ justifyContent: 'center' }}>
          <ContainerProducts>
            <div>
              <ViewBar
                productView={productView}
                setProductsView={setProductsView}
                productsArray={productsFiltered}
              />

              <p className="resultSearch">
                {productsFiltered.length} resultado(s) para {searchedProducts}
              </p>
            </div>

            <div
              className={
                productView === 0
                  ? 'contentProductsGrid'
                  : 'contentProductsList'
              }
            >
              {productsFiltered.map(
                ({ name, id, price, image, specialPrice }) => (
                  <Product
                    key={id}
                    name={name}
                    price={price}
                    image={image}
                    specialPrice={specialPrice}
                    id={id}
                  />
                ),
              )}
            </div>
          </ContainerProducts>
        </MainContent>
      </MainContainer>

      <Footer />
    </>
  );
};

export default SearchedProducts;
