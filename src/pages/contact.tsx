import { Header, Footer, ShoppingCart } from '../components';
import Head from 'next/head';
import { ContainerContact, ContainerAdress } from '../styles/pages/contact';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contato | WebJump Ecommerce</title>
      </Head>
      <Header>
        <ShoppingCart />
      </Header>

      <ContainerContact>
        <h2>SÃO PAULO</h2>

        <ContainerAdress>
          <p>
            Av. Pres. Juscelino Kubitschek, 50 – 7º andar – Vila Nova Conceição
          </p>
          <p>São Paulo – SP • CEP: 04543-000 • Brasil</p>
        </ContainerAdress>

        <p>
          <span>T.</span> +55 11 2338-6889
        </p>
        <p>
          <span>E.</span> contato@webjump.com.br
        </p>
      </ContainerContact>

      <Footer />
    </>
  );
};

export default Contact;
