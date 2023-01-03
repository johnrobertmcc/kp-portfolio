import Layout from 'layouts';
import './App.scss';

/**
 * Function used to render the layout of the portfolio.
 *
 * @returns {Element} The porfolio website.
 */
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
