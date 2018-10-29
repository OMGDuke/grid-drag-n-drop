// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(props) {
    const { renderPage } = props;
    const initialProps = await Document.getInitialProps(props);
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => appProps =>
      sheet.collectStyles(<App {...appProps} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <html xmlns="http://www.w3.org/1999/xhtml" lang="ja" xmlLang="ja">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
