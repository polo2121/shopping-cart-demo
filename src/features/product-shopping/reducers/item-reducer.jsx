
export const initialState = {
    total: 0,
    items: []
}

export const productReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_BUSKET":
            const itemInfo = payload
            const foundUpdateItem = state.items.find(({ id: cartItemId }) => cartItemId === itemInfo.id)
            if (!foundUpdateItem) {
                return {
                    ...state,
                    items: [...state.items, { ...itemInfo, amount: 1 }]
                }
            }
            else {
                const updateItem = manageCartAmount(itemInfo, "add")
                return {
                    ...state,
                    items: updateItem
                }
            }

        case "REMOVE_FROM_BUSKET":
            const removeItemInfo = payload
            const foundRemoveItem = state.items.find(({ id: cartItemId }) => cartItemId === removeItemInfo.id)

            if (foundRemoveItem) {
                const removedItem = manageCartAmount(removeItemInfo, "remove")
                return {
                    ...state,
                    items: removedItem
                }
            }
            else {
                return {
                    ...state,
                }
            }
        default:
            throw new Error('No case for such action')
    }

    function manageCartAmount(itemInfo, action) {

        const itemInCart = [...state.items]
        const updateItemIndex = itemInCart.findIndex(item => item.id === itemInfo.id);
        console.log(itemInCart)

        if (action === "add")
            itemInCart[updateItemIndex] = { ...itemInCart[updateItemIndex], amount: itemInCart[updateItemIndex].amount + 1 };
        else
            itemInCart[updateItemIndex] = { ...itemInCart[updateItemIndex], amount: itemInCart[updateItemIndex].amount - 1 };

        const updatedItem = itemInCart;

        return updatedItem;


    }
}

