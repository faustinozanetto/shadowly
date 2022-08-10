import '@styles/globals.css';
import '@fontsource/poppins';
import type { AppProps } from 'next/app';

const ShadowlyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
};

export default ShadowlyApp;
