import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Tweety from "../components/tweety";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tweety | AI Generated Tweets for Software Engineers</title>
        <meta
          name="description"
          content="Generate tweets about tech as a software engineer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tweety />
    </div>
  );
};

export default Home;