import '../styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';
import { store } from '@state/store';
import { Provider } from 'react-redux';

const ShadowlyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default ShadowlyApp;
