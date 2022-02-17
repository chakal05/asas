import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Container } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </Provider>
  );
}

export default MyApp;
