import { Header, Footer, Overlay, Loading, ShoppingCart } from '../components';
import Head from 'next/head';
import { MainContainer, BackgroundContainer } from '../styles/pages/home';
import { useProductsCategories } from '../contexts/CategoriesContext';

const Home = () => {
  const { initialLoading } = useProductsCategories();

  return (
    <>
      <Head>
        <title>Home | WebJump Ecommerce</title>
      </Head>

      {initialLoading && (
        <Overlay>
          <Loading />
        </Overlay>
      )}

      <Header>
        <ShoppingCart />
      </Header>

      <MainContainer>
        <aside></aside>

        <div>
          <BackgroundContainer></BackgroundContainer>

          <section>
            <h1>Seja bem-vindo!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              assumenda ipsum animi laudantium ipsa odio perspiciatis molestias,
              veniam dolorem debitis, alias facilis dolore quos eaque obcaecati
              ab. Laudantium, necessitatibus eveniet? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam ipsa doloremque eveniet, sunt
              deleniti explicabo eligendi doloribus atque accusantium autem ad.
              Doloremque suscipit similique quae et beatae reprehenderit fugit
              facere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni unde quis laborum quos velit tempore sequi dicta id ab
              aperiam accusamus sit sunt iure consequatur nulla, ullam assumenda
              error praesentium.
            </p>
          </section>
        </div>
      </MainContainer>

      <Footer />
    </>
  );
};

export default Home;
