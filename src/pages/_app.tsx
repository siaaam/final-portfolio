import Layout from "@components/NavLayout/Layout";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { NavContextProvider } from "src/context/Navcontext";
import "../styles/globals.css";
import "../styles/highlight.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavContextProvider>
        <ThemeProvider attribute="class">
          <Layout>
            <NextNProgress
              color="#87CEEB"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NavContextProvider>
    </>
  );
}
