import GlobalStyle from '../styles/global';
import type { AppProps } from 'next/app';

import SearchProvider from '../contexts/SearchContext';
import CategoriesProvider from '../contexts/CategoriesContext';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <CategoriesProvider>
          <Component {...pageProps} />
        </CategoriesProvider>
      </SearchProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
