import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Featured, Navbar, PizzaList } from "components";
import { NextPage } from "next";
import axios from "axios";
import { baseAPiUrl } from "util/";
import { IProduct } from "types";

const Home: NextPage<{ pizzalist: IProduct[] }> = ({ pizzalist }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in Newyork</title>
                <meta name="description" content="Best pizza shop in town" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            <PizzaList pizzalist={pizzalist} />
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const res = await axios.get(`${baseAPiUrl}products`);
    return {
        props: {
            pizzalist: res.data,
        },
    };
};
