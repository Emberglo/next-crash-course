import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    //layout now wraps every page that is displayed instead of having the component be the top level
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
