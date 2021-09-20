// prettier-ignore
import { Header, Footer, Product, Loading, Sidebar, ViewBar, Search, ShoppingCart } from '../../components';

import { ProductsType, useSearch } from '../../contexts/SearchContext';
import { useProductsCategories } from '../../contexts/CategoriesContext';
import api from '../../services/api';

import { useEffect, useState } from 'react';
import { GetStaticPaths } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import {
  MainContainer,
  Navigation,
  MainContent,
  ContainerProducts,
} from '../../styles/pages/Products';

interface ProductsProps {
  slug: string;
  data: ProductsType[];
}

type Params = {
  params: {
    slug: string;
  };
};

const Products = ({ slug, data }: ProductsProps) => {
  const {
    products,
    setProducts,
    productsFiltered,
    isProductsFilter,
    setIsProductsFilter,
    filterSelected,
    productView,
    setProductsView,
    setProductsOrder,
  } = useSearch();
  const { categories } = useProductsCategories();

  const [loading, setLoading] = useState<boolean>(true);
  const [pageName, setPageName] = useState<string | string[]>('');
  const productsArray = isProductsFilter ? productsFiltered : products;

  useEffect(() => {
    setProducts(data);
    setIsProductsFilter(false);
    setLoading(false);
    setProductsOrder('');
    setProductsView(0);
  }, [
    data,
    setIsProductsFilter,
    setProducts,
    setProductsOrder,
    setProductsView,
  ]);

  useEffect(() => {
    const choosedCategorie = categories.filter(
      (categorie) => categorie.path === slug,
    );
    const categorieName = choosedCategorie.map((c) => c.name);

    setPageName(categorieName);
  }, [categories, slug]);

  return (
    <>
      <Head>
        <title>{pageName} | WebJump Ecommerce</title>
      </Head>

      <Header>
        <Search />
        <ShoppingCart />
      </Header>

      <MainContainer>
        <Navigation>
          <Link href="/">Página Inicial</Link>
          <span>&gt;</span>
          <p>{pageName}</p>
          {isProductsFilter && (
            <>
              <span>&gt;</span>
              <p>{filterSelected}</p>
            </>
          )}
        </Navigation>

        <MainContent>
          <Sidebar slug={slug} setProductsOrder={setProductsOrder} />

          <ContainerProducts>
            <div>
              <h1>{pageName}</h1>

              <ViewBar
                productView={productView}
                setProductsView={setProductsView}
                productsArray={productsArray}
              />

              {isProductsFilter ? (
                <p className="resultSearch">
                  {productsArray.length} resultado(s) de sua pesquisa
                </p>
              ) : null}
            </div>

            {loading ? (
              <Loading />
            ) : (
              <div
                className={
                  productView === 0
                    ? 'contentProductsGrid'
                    : 'contentProductsList'
                }
              >
                {productsArray.map(
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
            )}
          </ContainerProducts>
        </MainContent>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Products;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: 'camisetas',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const { data } = await api.get(`/${slug}`);

  return {
    props: {
      slug,
      data,
    },
    revalidate: 60 * 60 * 24, //24h
  };
};
