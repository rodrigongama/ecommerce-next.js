import { Header, Footer } from "../components";
import formatValue from "../utils/formatValue";
import { ProductsType } from "../contexts/SearchContext";
import { useProductsShopping } from "../contexts/ShoppingContext";
import { getNewId } from "../services/idService";
import api from "../services/api";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { GrTrash } from "react-icons/gr";
import {
  ContainerCart,
  ContainerButtons,
  ContainerTotalPrice,
} from "../styles/pages/ShoppingCart";
import { useRouter } from "next/router";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart, purchaseData, setPurchaseData } =
    useProductsShopping();
  const PRODUCTS_CART = shoppingCart.map((p) => p[0]);
  const [productsData, setProductsData] = useState(PRODUCTS_CART);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  function reduceProductsPrice(productsData: ProductsType[]) {
    const prices = productsData.map((p) => p.price);
    setTotalPrice(prices.reduce((acc, cc) => acc + cc));
  }

  function handleDeleteProduct(id: number, productsData: ProductsType[]) {
    const newShoppingData = productsData.filter((product) => product.id !== id);
    setProductsData(newShoppingData);
    handleTotalPrice(newShoppingData);
  }

  function handleTotalPrice(productsDataArray: ProductsType[]) {
    if (productsDataArray.length === 0) {
      handleCleanCart();
      return;
    }

    reduceProductsPrice(productsDataArray);
  }

  function handleCleanCart() {
    setProductsData([]);
    setShoppingCart([]);
    setTotalPrice(0);
  }

  async function purchaseProducts(productsData: ProductsType[]) {
    router.push("/purchase-made");
    setPurchaseData({
      id: getNewId(),
      total: formatValue(totalPrice),
      data: productsData,
    });

    try {
      await api.post("/compras", purchaseData);
    } catch (error) {
      console.log(error);
    }

    handleCleanCart();
  }

  useEffect(() => {
    handleTotalPrice(productsData);
  }, []);

  return (
    <>
      <Head>Carrinho de Compras | Webjump Ecommerce</Head>

      <Header />

      <ContainerCart>
        <h1>Carrinho de Compras</h1>

        {productsData.length === 0 ? (
          "Carrinho vazio"
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Preço</th>
                </tr>
              </thead>

              <tbody>
                {productsData.map(({ id, image, name, price }) => (
                  <tr key={id}>
                    <td>
                      <Image width={150} height={150} src={image} alt={name} />
                    </td>
                    <td>{name}</td>
                    <td>{formatValue(price)}</td>
                    <td>
                      <GrTrash
                        onClick={() => handleDeleteProduct(id, productsData)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ContainerTotalPrice>{formatValue(totalPrice)}</ContainerTotalPrice>

            <ContainerButtons>
              <button onClick={handleCleanCart}>Limpar Carrinho</button>
              <button onClick={() => purchaseProducts(productsData)}>
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
