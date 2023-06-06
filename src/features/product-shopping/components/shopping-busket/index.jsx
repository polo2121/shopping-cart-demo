import React from 'react'
import { useContext } from 'react'

// - contexts
import { ProductContext } from "@features/product-shopping/stores/product-context"

// - components
import CartItems, { CartItem } from './cart-item'
import TotalPrice from './total-price'
import CheckoutButton from './checkout-button'

const ShoppingBusket = () => {

    const { items, isBusketOpen, openBusket } = useContext(ProductContext)

    return (
        <>
            {
                isBusketOpen && (<div className='shopping-busket-backdrop' onClick={openBusket}>
                    <div className='shopping-busket-wrapper' onClick={(e) => e.stopPropagation()}>
                        <CartItems>
                            {items.map(item =>
                                (<CartItem key={item.id} product={item} />)
                            )}
                        </CartItems>
                        <TotalPrice>
                            <CheckoutButton />
                        </TotalPrice>
                    </div>

                </div>)
            }
        </>
    )
}

export default ShoppingBusket