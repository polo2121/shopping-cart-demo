import React from 'react'



const CartItems = ({ children }) => {
    return (
        <div className='cart-item-wrapper'>
            <h1>My Busket</h1>
            {children}
        </div>
    )
}

export const CartItem = ({ product }) => {

    return (
        <div className='cart-item' >
            <div className='item-image'>
                <img width="100px" src={`/src/${product.imgUrl}`} alt="product-image" />
            </div>
            <div className='title-caption'>
                <h2>{product.title}</h2>
                <p>{product.caption}</p>
            </div>
            <span>{product.amount}</span>
            <span>${product.price}</span>
        </div >
    )
}

export default CartItems

