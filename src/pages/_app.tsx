import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "@src/styles/globalStyles";
import Head from "next/head";
import Navbar from "@src/components/organisms/Navbar";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import { useState, useEffect } from "react";
import Drawer from "@src/components/organisms/Drawer";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      {asPath === "/" ? null : (
        <Navbar
          setDrawerOpen={(drawerOpen: boolean) => setDrawerOpen(drawerOpen)}
        />
      )}
      <Component {...pageProps} />
      {drawerOpen && (
        <Drawer
          setDrawerOpen={(drawerOpen: boolean) => setDrawerOpen(drawerOpen)}
        />
      )}
    </>
  );
}

export default MyApp;

const styleRoot = css`
  height: 100%;
`;
