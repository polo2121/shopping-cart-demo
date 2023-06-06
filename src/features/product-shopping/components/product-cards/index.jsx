import React from 'react'

// - assets
import OrangePNG from "@assets/orange.png"

// - data 
import foods from "@data/foods.json"

// - components
import AddToBusket from '../add-to-busket'

const ProductCards = () => {

    return (
        <section className='item-card-wrapper'>
            {
                foods.map(food => (
                    <ProductCard key={food.id}>
                        <ProductCard.Image image={food.image} />
                        <ProductCard.Title title={food.title} />
                        <ProductCard.Caption caption={food.caption} />
                        <ProductCard.Action product={food} />
                    </ProductCard>))
            }

        </section>
    )
}

export default ProductCards

export const ProductCard = ({ children }) => {

    return (
        <div className='item-card'>
            {children}
        </div>
    )
}

export const ProductImage = ({ img }) => {

    return (
        <div className='item-card-img'>
            <img width="160px" src={OrangePNG} alt="orange" />
        </div>
    )
}

export const ProductTitle = ({ title }) => {
    return (
        <>
            <h3 className='item-card-name'>{title}</h3>
        </>
    )
}

export const ProductCaption = ({ caption }) => {
    return (
        <>
            <span className='item-card-caption'>{caption}</span>
        </>
    )
}

export const ProductAction = ({ product }) => {
    return (
        <AddToBusket product={product} />
    )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Caption = ProductCaption;
ProductCard.Action = ProductAction;