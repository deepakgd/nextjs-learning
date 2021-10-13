import Layout from '@components/Layout';
import '@styles/global.css';
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

import { AppContextProvider } from '@context/app-context';


function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
