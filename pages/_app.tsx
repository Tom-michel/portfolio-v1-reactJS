import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff6600",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
