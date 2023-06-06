import React from 'react'

// - contexts
import { ProductProvider } from "@features/product-shopping/stores/product-context.jsx"

// - assets
import ThreeLineSVG from "@assets/three-line.svg"
import ParagraphLineSVG from "@assets/paragraph-line.svg"

// - components
import { Busket, ProductCards } from "./components"
import ShoppingBusket from './components/shopping-busket'

const ProductShopping = () => {
    return (
        <ProductProvider>
            <section className='logo-busket'>
                <div className='logo'>
                    <h1 className='logo-text'>
                        Foodie
                        <img className="logo-three-line" src={ThreeLineSVG} alt="three-line" />
                        <svg className="logo-underline" width="140" height="8" viewBox="0 0 171 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="171" height="8" fill="#BAE8E8" />
                        </svg>
                    </h1>
                </div>
                <div>
                    <p className='intro-text'>
                        Let us take care of you - just put all of your favorite products in the<br />
                        basket, and we will assemble the products, pack them and<br />
                        deliver to you home. Too lazy to cook or go grocery,<br />
                        we are just one click away!
                        <img src={ParagraphLineSVG} alt="underline" />
                    </p>
                </div>
                <Busket />
            </section>
            <ProductCards />
            <ShoppingBusket />
        </ProductProvider>

    )
}

export default ProductShopping


