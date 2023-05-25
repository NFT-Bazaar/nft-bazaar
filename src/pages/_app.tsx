import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<><Component {...pageProps} /> <ToastContainer /></>);
}
