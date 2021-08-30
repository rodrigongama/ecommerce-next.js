import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import ViewBar from '../../components/ViewBar';

import { useSearch } from '../../contexts/SearchContext';
import { useProductsCategories } from '../../contexts/CategoriesContext';
import api from '../../services/api';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import {
  MainContainer,
  Navigation,
  MainContent,
  ContainerProducts,
} from '../../styles/pages/Products';

const Products = () => {
  const router = useRouter();
  const { slug } = router.query;
  const {
    products,
    setProducts,
    productsIsSearched,
    setProductsIsSearched,
    productsFiltered,
    isProductsFilter,
    setIsProductsFilter,
    filterSelected,
  } = useSearch();
  const { categories } = useProductsCategories();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [productView, setProductsView] = useState<number>(0);
  const [pageName, setPageName] = useState<string | string[]>('');
  const [productOrder, setProductsOrder] = useState<string>('');
  const productsArray = isProductsFilter ? productsFiltered : products;

  useEffect(() => {
    setLoading(true);

    async function getProducts() {
      try {
        const { data } = await api.get(`/${slug}`);

        setProducts(data);
        setIsProductsFilter(false);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    getProducts();
    setProductsIsSearched(false);
    setProductsOrder('');
    setProductsView(0);
    setError('');
  }, [
    slug,
    setIsProductsFilter,
    setProducts,
    setProductsIsSearched,
    setProductsOrder,
    setProductsView,
  ]);

  useEffect(() => {
    const newCategories = categories.filter((c) => c.path === slug);
    const nameList = newCategories.map((c) => c.name);

    setPageName(nameList);
  }, [slug, categories]);

  return (
    <>
      <Head>
        <title>{pageName} | WebJump Ecommerce</title>
      </Head>
      <Header />

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
          <Sidebar slug={slug} />

          <ContainerProducts>
            <div>
              <h1>{pageName}</h1>

              <ViewBar
                productView={productView}
                setProductsView={setProductsView}
                productOrder={productOrder}
                setProductsOrder={setProductsOrder}
                productsArray={productsArray}
              />

              {productsIsSearched || isProductsFilter ? (
                <p className="resultSearch">
                  {productsArray.length} resultado(s) de sua pesquisa
                </p>
              ) : null}

              <p className="errorMessage">{error}</p>
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
