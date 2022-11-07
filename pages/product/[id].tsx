import { ChangeEvent, FC, useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { baseAPiUrl } from "util/";
import { IOption, IProduct } from "types";

const Product: FC<{ pizza: IProduct }> = ({ pizza }) => {
    const { img, title, prices, desc, extraOption } = pizza;
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(prices[0]);
    const [extras, setExtras] = useState<IOption[]>([]);
    const [quantity, setQuantity] = useState(1);

    const changePrice = (number: number) => {
        setPrice((price) => number + price);
    };

    const handleSize = (sizeIndex: number) => {
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, option: IOption) => {
        const checked = e.target.checked;
        const { price, text } = option;

        if (checked) {
            changePrice(price);
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(-price);
            setExtras(extras.filter((extra) => extra.text !== text));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {extraOption.map((option, i) => (
                        <div className={styles.option} key={i}>
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={styles.checkbox}
                                onChange={(e) => handleChange(e, option)}
                            />
                            <label htmlFor="double">{option.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input
                        type="number"
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        className={styles.quantity}
                        min={1}
                    />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;

export const getServerSideProps = async (data: { params: { id: string } }) => {
    const {
        params: { id },
    } = data;
    const res = await axios.get(`${baseAPiUrl}products/${id}`);
    return {
        props: {
            pizza: res.data,
        },
    };
};
