import "../styles/globals.css";
import { AppProvider } from '../features/getProducts'
import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider >
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </AppProvider>
  );
}

export default MyApp;
