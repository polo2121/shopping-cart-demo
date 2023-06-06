import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { ItemContext } from "../../store/item-context"

const AddToCart = ({ itemInfo }) => {
    const { addToBusket, removeFromBusket, getItemAmount } = useContext(ItemContext)

    const [showRemove, setShowRemove] = useState(false);
    const [amount, setAmount] = useState(0)
    const [isRemoveClicked, setIsRemoveClicked] = useState(false)
    const [isAddClicked, setIsAddClicked] = useState(false)
    const [isSlideStart, setIsSlideStart] = useState(false);

    const amountRef = useRef();

    const itemAmount = getItemAmount(itemInfo.id);

    // for add button
    useEffect(() => {
        const addPulseTimer = setTimeout(() => {
            setIsAddClicked(false)
        }, 100)
        return () => clearTimeout(addPulseTimer);
    }, [isAddClicked])

    // for add button
    useEffect(() => {
        const addPulseTimer = setTimeout(() => {
            setIsRemoveClicked(false)
        }, 100)
        return () => clearTimeout(addPulseTimer);
    }, [isRemoveClicked])

    // for button slide animation
    useEffect(() => {
        const slideTimer = setTimeout(() => {
            console.log("slide disabled")
            setIsSlideStart(false)
        }, 1000)
        return () => clearTimeout(slideTimer);
    }, [isSlideStart])

    // add to busket
    const add = () => {
        console.log(amount)
        addToBusket(itemInfo);
        setIsAddClicked(true);
        if (amount === 0) {
            setShowRemove(!showRemove)
            setIsSlideStart(true)
        }
        setAmount(prevAmount => prevAmount + 1)
    }

    // remove from basket
    const remove = () => {
        removeFromBusket(itemInfo)
        // if (amount > 0) {
        //     setIsRemoveClicked(true);

        // }
        // if (amount === 0 || amount === 1) {
        //     setShowRemove(!showRemove)
        // }
    }

    const removeBtnClass = `remove ${showRemove ? 'shown' : 'shown bounce-to-right'} ${isSlideStart ? "bounce-in-right" : ''} ${isRemoveClicked ? 'pulse' : ''}`

    const addBtnClass = `add ${isAddClicked ? 'pulse' : ""}`;

    return (
        <>
            <span>${itemInfo.price}</span>
            <div className='manage-cart'>
                <RemoveButton removeClass={removeBtnClass} onRemove={remove} />
                <div className='amountWrapper'>
                    <span ref={amountRef} className={showRemove ? "amount bounce-in-top" : "amount"}>{itemAmount}</span>
                </div>
                <AddButton addClass={addBtnClass} onAdd={add} />
            </div>


        </>
    )
}
export default AddToChart;

export const RemoveButton = ({ removeClass, onRemove }) => {

    return (
        <a className={removeClass} onClick={onRemove}>
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#272343" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </a>
    )
}

export const AddButton = ({ addClass, onAdd }) => {

    return (
        <a className={addClass} onClick={onAdd}>
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

        </a>
    )
}