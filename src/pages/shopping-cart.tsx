import { Header, Footer, ShoppingCartItems } from '../components';
import { formatValue } from '../utils';
import { CartProductsType, useCart } from '../contexts/ShoppingContext';
import { getNewId } from '../services/idService';
import api from '../services/api';

import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  ContainerCart,
  ContainerButtons,
  ContainerTotalPrice,
} from '../styles/pages/ShoppingCart';

const ShoppingCart = () => {
  const {
    shoppingCart,
    setShoppingCart,
    purchaseData,
    setPurchaseData,
    handleCleanCart,
    handleTotalPrice,
    totalPrice,
  } = useCart();
  const router = useRouter();

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

  function saveShoppingCart(shoppingCart: CartProductsType[]) {
    localStorage.setItem(
      '@e-commerce/shoppingCart',
      JSON.stringify(shoppingCart),
    );
  }

  useEffect(() => {
    if (shoppingCart.length > 0) {
      handleTotalPrice(shoppingCart);
    }
    saveShoppingCart(shoppingCart);
  }, [shoppingCart]);

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
            <ShoppingCartItems />

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
