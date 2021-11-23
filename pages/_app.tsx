import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "../components/GlobalLayout/GlobalLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
