import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Armen&apos;s blog</title>
      <link rel="icon" href="/assets/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap"
        rel="stylesheet"
      />
    </Head>

    <h1>Hello World</h1>
  </div>
);

export default Home;
