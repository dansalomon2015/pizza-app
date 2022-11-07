export interface IOption {
    text: string;
    price: number;
}

export interface IProduct {
    _id?: string;
    title: string;
    desc: string;
    img: string;
    prices: number[];
    extraOption: IOption[];
}

export type StoreStateType = {
    products: IProduct[];
    total: number;
    quantity: number;
};
