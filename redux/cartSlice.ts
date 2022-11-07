import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, StoreStateType } from "types";

const initialState: StoreStateType = {
    products: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload);
            state.quantity += 1;
            // state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export default cartSlice;
