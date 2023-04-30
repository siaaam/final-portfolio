import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Header from "@components/Header";
import Layout from "@components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
