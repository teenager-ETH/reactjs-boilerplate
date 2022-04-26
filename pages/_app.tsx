import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) { // Rename it to the name of your app
  return <Component {...pageProps} />;
}

export default MyApp;
