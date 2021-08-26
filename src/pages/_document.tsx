import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />

          <meta
            name="description"
            content="A Webjump é especializada no desenvolvimento de eCommerce personalizado para clientes middle market e enterprise e Referência em Magento na América Latina."
          />
          <meta
            name="keywords"
            content="webjump, ecommerce, loja virtual, roupas, calçados"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;