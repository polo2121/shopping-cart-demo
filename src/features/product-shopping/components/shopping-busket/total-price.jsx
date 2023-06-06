import React from 'react'
import { useContext } from 'react'


// - assets
import deliveryBike from "@assets/delivery-bike.png"

// - contexts
import { ProductContext } from "@features/product-shopping/stores/product-context"

const TotalPrice = ({ children }) => {

    const { getCartTotalAmount, getCartTotalPrice, openBusket } = useContext(ProductContext)

    const totalAmount = getCartTotalAmount();
    const totalPrice = getCartTotalPrice();

    return (
        <div className='total-price'>
            <div>
                <h1>Total Price</h1>
                <h1>{totalPrice}</h1>
            </div>
            <div>
                <h1>Total Amount</h1>
                <h1>{totalAmount}</h1>
            </div>
            {children}
            <img className="delivery-bike-img" width="50%" src={deliveryBike} alt="delivery-bike" />
            <div className='close-busket' onClick={openBusket}>
                <svg width="64px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default TotalPrice