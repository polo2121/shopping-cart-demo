import React from 'react'

const CheckoutButton = () => {
    return (
        <button className='checkout'>
            Checkout
            <svg width="24px" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
    )
}

export default CheckoutButton