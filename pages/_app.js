import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';

// App.js default code 

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
