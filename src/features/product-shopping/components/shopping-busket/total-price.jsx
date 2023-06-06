import React from 'react'

// - assets
import deliveryBike from "@assets/delivery-bike.png"

const TotalPrice = ({ children }) => {
    return (
        <div className='total-price'>
            <div>
                <h1>Total Price</h1>
                <h1>$1400</h1>
            </div>
            <div>
                <h1>Total Amount</h1>
                <h1>10</h1>
            </div>
            {children}
            <img className="delivery-bike-img" width="50%" src={deliveryBike} alt="delivery-bike" />
        </div>
    )
}

export default TotalPrice