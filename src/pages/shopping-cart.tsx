import { Header, Footer, ShoppingCartItems } from '../components';
import { formatValue } from '../utils';
//prettier-ignore
import { CartProductsType, useProductsShopping } from '../contexts/ShoppingContext';
import { getNewId } from '../services/idService';
import api from '../services/api';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  ContainerCart,
  ContainerButtons,
  ContainerTotalPrice,
} from '../styles/pages/ShoppingCart';

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart, purchaseData, setPurchaseData } =
    useProductsShopping();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  function reduceProductsPrice(shoppingCart: CartProductsType[]) {
    const prices = shoppingCart.map((p) => p.purchase_total);
    setTotalPrice(prices.reduce((acc, cc) => acc + cc));
  }

  function handleDeleteProduct(id: number, shoppingCart: CartProductsType[]) {
    const newShoppingData = shoppingCart.filter((product) => product.id !== id);
    setShoppingCart(newShoppingData);
    handleTotalPrice(newShoppingData);
  }

  function handleTotalPrice(cartProducts: CartProductsType[]) {
    if (cartProducts.length === 0) {
      handleCleanCart();
      return;
    }

    reduceProductsPrice(cartProducts);
  }

  async function purchaseProducts(shoppingCart: CartProductsType[]) {
    router.push('/purchase-made');
    setPurchaseData({
      id: getNewId(),
      total: formatValue(totalPrice),
      data: shoppingCart,
    });

    try {
      await api.post('/compras', purchaseData);
      handleCleanCart();
    } catch (error) {
      console.log(error);
    }
  }

  function handleCleanCart() {
    setShoppingCart([]);
    setTotalPrice(0);
  }

  function saveShoppingCart(shoppingCart: CartProductsType[]) {
    localStorage.setItem(
      '@e-commerce/shoppingCart',
      JSON.stringify(shoppingCart),
    );
  }

  function getShoppingCart() {
    const savedShoppingCart = localStorage.getItem('@e-commerce/shoppingCart');

    if (savedShoppingCart) {
      return JSON.parse(savedShoppingCart);
    }
  }

  useEffect(() => {
    if (shoppingCart.length > 0) {
      handleTotalPrice(shoppingCart);
    }
    saveShoppingCart(shoppingCart);
  }, [shoppingCart]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShoppingCart(getShoppingCart());
    }
  }, []);

  return (
    <>
      <Head>Carrinho de Compras | Webjump Ecommerce</Head>

      <Header />

      <ContainerCart>
        <h1>Carrinho de Compras</h1>

        {shoppingCart.length === 0 ? (
          'Carrinho vazio'
        ) : (
          <>
            <ShoppingCartItems handleDeleteProduct={handleDeleteProduct} />

            <ContainerTotalPrice>{formatValue(totalPrice)}</ContainerTotalPrice>

            <ContainerButtons>
              <button onClick={handleCleanCart}>Limpar Carrinho</button>
              <button onClick={() => purchaseProducts(shoppingCart)}>
                Finalizar Compra
              </button>
            </ContainerButtons>
          </>
        )}
      </ContainerCart>

      <Footer />
    </>
  );
};

export default ShoppingCart;
