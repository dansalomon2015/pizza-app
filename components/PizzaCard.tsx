import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "types";
import styles from "../styles/PizzaCard.module.css";

export const PizzaCard: FC<{ pizza: IProduct }> = ({ pizza }) => {
    const { title, prices, desc, img, _id } = pizza;
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src={img} alt="" width="500" height="500" />
            </Link>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.price}>${prices[0]}</span>
            <p className={styles.desc}>{desc}</p>
        </div>
    );
};
