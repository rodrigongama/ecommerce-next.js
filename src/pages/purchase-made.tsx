import { useEffect, useState } from 'react';
import { Header, Footer, Overlay, Loading } from '../components';
import { useCart } from '../contexts/ShoppingContext';

const PurchaseMade = () => {
  const { purchaseData } = useCart();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Overlay>
          <Loading />
          <p>Processando sua compra...</p>
        </Overlay>
      )}

      <Header />

      <h1>Parabéns pela sua compra!</h1>
      <p>Pedido nº{purchaseData.id}</p>
      <p>Valor da compra: {purchaseData.total}</p>

      <Footer />
    </>
  );
};

export default PurchaseMade;
