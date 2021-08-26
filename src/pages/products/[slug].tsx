import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';

import { ProductsType, useSearch } from '../../contexts/SearchContext';
import { useProductsCategories } from '../../contexts/CategoriesContext';
import api from '../../services/api';
import replaceSpecialChars from '../../utils/replaceSpecialChars';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { MdViewModule, MdViewList } from 'react-icons/md';
import {
  MainContainer,
  Navigation,
  MainContent,
  ContainerProducts,
  ContainerView,
  ContainerOrder,
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

  function handleProductOrder(value: string, products: ProductsType[]) {
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
        newOrder = products;
    }

    setProducts(newOrder);
  }

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

              <ContainerView>
                <div>
                  <MdViewModule
                    onClick={() => setProductsView(0)}
                    className={
                      productView === 0 ? 'iconViewSelected' : undefined
                    }
                  />
                  <MdViewList
                    onClick={() => setProductsView(1)}
                    className={
                      productView === 1 ? 'iconViewSelected' : undefined
                    }
                  />
                </div>

                <ContainerOrder>
                  <p>Ordernar por</p>
                  <select
                    name="filterOrder"
                    id="filterOrder"
                    value={productOrder}
                    onChange={({ target }) =>
                      handleProductOrder(target.value, products)
                    }
                  >
                    <option value=""></option>
                    <option value="lower">Menor preço</option>
                    <option value="higher">Maior preço</option>
                    <option value="name">Nome</option>
                  </select>
                </ContainerOrder>
              </ContainerView>

              {productsIsSearched && (
                <p className="resultSearch">
                  {products.length} resultado(s) de sua pesquisa
                </p>
              )}

              {isProductsFilter && (
                <p className="resultSearch">
                  {productsFiltered.length} resultado(s) para filtro selecionado
                </p>
              )}
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
