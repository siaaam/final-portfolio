import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "@components/Layout";
import { NavContextProvider } from "src/context/Navcontext";

export default function App({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NavContextProvider>
  );
}
