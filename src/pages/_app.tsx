import type { AppProps } from "next/app";
import { RootLayout } from "@components";
import { NextPageWithLayout } from "@common/interfaces/common";
import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
