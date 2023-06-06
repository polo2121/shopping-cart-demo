import { createContext, useState } from "react";
import { useReducer } from "react";

import { productReducer, initialState } from "../reducers/item-reducer";
import foods from "../../../data/foods.json"


export const ProductContext = createContext({
    items: [],
    totalAmount: 0,
    getItemAmount: (id) => { },
    addToBusket: (product) => { },
    removeFromBusket: (product) => { },
    getCartTotalAmount: () => { },
    openBusket: () => { },
    isBusketOpen: false,
});

export const ProductProvider = ({ children }) => {
    const [shoppingCart, dsipatch] = useReducer(productReducer, initialState)
    const [isBusketOpen, setIsBusketOpen] = useState(false);


    const addToBusket = (product) => {
        dsipatch({ type: "ADD_TO_BUSKET", payload: product })
    }

    const removeFromBusket = (product) => {
        dsipatch({ type: "REMOVE_FROM_BUSKET", payload: product })
    }

    const getItemAmount = (id) => {
        const { items } = shoppingCart
        console.log(items)
        const result = items.find(({ id: item_id }) => item_id === id);
        let amount;
        if (!result) {
            amount = 0;
        } else {
            amount = result.amount
        }
        return amount;
    }

    const getCartTotalAmount = () => {
        let cartTotalAmount = 0;

        shoppingCart.items.map(cartItem => {
            cartTotalAmount += cartItem.amount;
        })
        return cartTotalAmount;
    }

    const openBusket = () => {
        // console.log("busket is open at context")
        setIsBusketOpen(!isBusketOpen)
    }

    const value = {
        items: shoppingCart.items,
        totalAmount: shoppingCart.total,
        getItemAmount,
        addToBusket,
        removeFromBusket,
        getCartTotalAmount,
        openBusket,
        isBusketOpen,
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}