import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Featured, PizzaList } from "components";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in Newyork</title>
                <meta name="description" content="Best pizza shop in town" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            <PizzaList />
        </div>
    );
};

export default Home;
