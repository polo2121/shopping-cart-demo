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
    getCartTotalPrice: () => { },
    openBusket: () => { },
    isBusketOpen: false,
});

export const ProductProvider = ({ children }) => {
    const [shoppingCart, dsipatch] = useReducer(productReducer, initialState)
    const [isBusketOpen, setIsBusketOpen] = useState(false);

    const openBusket = () => {
        // console.log("busket is open at context")
        setIsBusketOpen(!isBusketOpen)
    }

    const addToBusket = (product) => {
        dsipatch({ type: "ADD_TO_BUSKET", payload: product })
    }

    const removeFromBusket = (product) => {
        dsipatch({ type: "REMOVE_FROM_BUSKET", payload: product })
    }

    const getItemAmount = (id) => {
        const { items } = shoppingCart
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

        const { items } = shoppingCart
        // console.log(items)

        const cartTotalAmount = items.length > 0 ? items.reduce((preValue, currentValue) => (preValue + currentValue.amount), 0) : 0

        return cartTotalAmount;
    }

    const getCartTotalPrice = () => {
        const { items } = shoppingCart

        let cartTotalPrice = items.length > 0 ? items.reduce((previousValue, currentValue) => (previousValue + (currentValue.price * currentValue.amount)), 0) : 0

        // console.log(cartTotalPrice.toFixed(2))
        return cartTotalPrice.toFixed(2);
    }

    const getShoppingCartTotalValues = (value) => {

    }

    const value = {
        items: shoppingCart.items,
        totalAmount: shoppingCart.total,
        getItemAmount,
        addToBusket,
        removeFromBusket,
        getCartTotalAmount,
        getCartTotalPrice,
        openBusket,
        isBusketOpen,
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}