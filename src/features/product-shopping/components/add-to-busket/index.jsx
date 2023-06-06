
// - react
import { useContext, useEffect, useRef } from "react";
import { useState } from "react";

// - context
import { ProductContext } from "@features/product-shopping/stores/product-context"

// - third-party
import clsx from 'clsx';

const AddToBusket = ({ product }) => {
    const { addToBusket, removeFromBusket, getItemAmount } = useContext(ProductContext)
    const [isRemoveShown, setIsRemoveShown] = useState(false)

    const productAmount = getItemAmount(product.id);

    // add to busket
    const add = () => {
        addToBusket(product);
        // console.log(amount)

    }

    // remove from basket
    const remove = () => {
        removeFromBusket(product)
    }

    // - class
    const amountClass = clsx("amount", { "bounce-in-top": productAmount > 0 });

    return (
        <div className="price-add">
            <span>${product.price}</span>
            <div className='manage-cart'>
                <RemoveButton productAmount={productAmount} onRemove={remove} />
                <div className='amountWrapper'>
                    <span className={amountClass}>{productAmount}</span>
                </div>
                <AddButton productAmount={productAmount} onAdd={add} />
            </div>


        </div>
    )
}
export default AddToBusket;

export const RemoveButton = ({ onRemove, productAmount }) => {

    const firstClickRef = useRef("not_clicked");

    if (productAmount === 0) {
        firstClickRef.current = "not_clicked"
    }

    if (productAmount === 2) {
        firstClickRef.current = "clicked"
    }


    const removeBtn = clsx("remove",
        {
            "bounce-in-right": firstClickRef.current === "not_clicked",
            "shown": productAmount >= 1,
            "bounce-to-right": productAmount === 0,

        });

    console.log(removeBtn)
    return (
        <button className={removeBtn} onClick={onRemove}>
            <a>
                <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#272343" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </a>
        </button>

    )
}

export const AddButton = ({ productAmount, onAdd }) => {

    const svgMoveUP = clsx({ "move-up": productAmount > 0, "move-down": productAmount === 0 })

    return (
        <button className="add" onClick={onAdd}>
            <a>
                <svg className={svgMoveUP} width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <svg className={svgMoveUP} width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </a>
        </button>

    )
}