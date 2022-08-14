import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/css';
import { Button } from '@src/components/atoms/Button';

const Home: NextPage = () => {
  return (
    <div className={container}>
      <Head>
        <title>Routines</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p
          className={css`
            font-weight: 800;
            font-size: 64px;
            letter-spacing: -0.04em;
          `}
        >
          Routines
        </p>
        <Button>구글로 로그인</Button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

const container = css`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;