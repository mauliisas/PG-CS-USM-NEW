import '@/styles/globals.css'
import { Poppins } from 'next/font/google';


const inter = Poppins({
  subsets: ['latin'],
  weight: '400',
  style: ['normal']
});


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}