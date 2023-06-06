import { createContext } from "react";
import { useReducer } from "react";

import { itemReducer, initialState } from "../reducer/item-reducer";
import foods from "../data/foods.json"


export const ItemContext = createContext({
    items: [],
    totalAmount: 0,
    getItemAmount: (id) => { },
    addToBusket: (itemInfo) => { },
    removeFromBusket: (itemInfo) => { },
    getCartTotalAmount: () => { }
});

export const ItemProvider = ({ children }) => {
    const [shoppingCart, dsipatch] = useReducer(itemReducer, initialState)


    const addToBusket = (itemInfo) => {
        dsipatch({ type: "ADD_TO_BUSKET", payload: itemInfo })
    }


    const removeFromBusket = (itemInfo) => {
        dsipatch({ type: "REMOVE_FROM_BUSKET", payload: itemInfo })
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



    const value = {
        items: shoppingCart.items,
        totalAmount: shoppingCart.total,
        getItemAmount,
        addToBusket,
        removeFromBusket,
        getCartTotalAmount,
    }
    return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}