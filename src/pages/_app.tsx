import GlobalStyle from '../styles/global';
import type { AppProps } from 'next/app';

import SearchProvider from '../contexts/SearchContext';
import CategoriesProvider from '../contexts/CategoriesContext';
import ShoppingProvider from '../contexts/ShoppingContext';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ShoppingProvider>
        <SearchProvider>
          <CategoriesProvider>
            <Component {...pageProps} />
          </CategoriesProvider>
        </SearchProvider>
      </ShoppingProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
