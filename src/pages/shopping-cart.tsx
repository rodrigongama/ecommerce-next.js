import { Header, Footer } from '../components';
import { formatValue, handlePurchaseTotal } from '../utils';
import {
  CartProductsType,
  useProductsShopping,
} from '../contexts/ShoppingContext';
import { getNewId } from '../services/idService';
import api from '../services/api';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GrTrash } from 'react-icons/gr';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import {
  ContainerCart,
  ButtonsQuantity,
  ContainerButtons,
  ContainerTotalPrice,
} from '../styles/pages/ShoppingCart';

const INCREMENT_QUANTITY = 1;
const DECREMENT_QUANTITY = -1;

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

  function handleProductQuantity(
    id: number,
    quantity_operation: number,
    shoppingCart: any,
  ) {
    const currentProduct = shoppingCart.find(
      (product: any) => product.id === id,
    );
    const finalProducts = shoppingCart.filter(
      (product: any) => product.id !== id,
    );

    setShoppingCart([
      ...finalProducts,
      {
        ...currentProduct,
        purchase_quantity:
          currentProduct.purchase_quantity + quantity_operation,
        purchase_total: handlePurchaseTotal(
          currentProduct.purchase_quantity + quantity_operation,
          currentProduct.price,
        ),
      },
    ]);
  }

  useEffect(() => {
    handleTotalPrice(shoppingCart);
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
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                </tr>
              </thead>

              <tbody>
                {shoppingCart.map(
                  ({ id, image, name, price, purchase_quantity }) => (
                    <tr key={id}>
                      <td>
                        <Image
                          width={150}
                          height={150}
                          src={image}
                          alt={name}
                        />
                      </td>
                      <td>{name}</td>
                      <td>{formatValue(price)}</td>
                      <ButtonsQuantity>
                        <button
                          disabled={purchase_quantity <= 1 ? true : false}
                          onClick={() =>
                            handleProductQuantity(
                              id,
                              DECREMENT_QUANTITY,
                              shoppingCart,
                            )
                          }
                        >
                          <AiOutlineMinusCircle />
                        </button>

                        <p>{purchase_quantity}</p>
                        <button
                          onClick={() =>
                            handleProductQuantity(
                              id,
                              INCREMENT_QUANTITY,
                              shoppingCart,
                            )
                          }
                        >
                          <AiOutlinePlusCircle />
                        </button>
                      </ButtonsQuantity>
                      <td>
                        <GrTrash
                          onClick={() => handleDeleteProduct(id, shoppingCart)}
                        />
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>

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
