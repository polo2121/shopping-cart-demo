import React, { useRef, useState } from 'react'
import OrangePNG from "../../assets/orange.png"
import { useEffect } from 'react'
// import { AddToCart } from '../add-to-chart/add-to-chart'

export const ItemCardWrapper = ({ children }) => {
    return (
        <div className='item-card-wrapper'>
            {children}
        </div>
    )
}

const ItemCard = ({ children }) => {
    return (
        <div className='item-card'>
            {children}
        </div>
    )
}
export default ItemCard

export const ItemImage = ({ img }) => {
    return (
        <div className='item-card-img'>
            <img width="160px" src={OrangePNG} alt="orange" />
        </div>
    )
}

export const ItemInfo = ({ name, caption }) => {
    return (
        <>
            <h3 className='item-card-name'>{name}</h3>
            <span className='item-card-caption'>{caption}</span>
        </>
    )
}

export const ItemFooter = ({ itemInfo }) => {
    return (

        <div className='price-add'>
            {/* <ItemPrice price={price} /> */}
            <AddToCart itemInfo={itemInfo} />
        </div>
    )
}

export const ItemPrice = () => {
    return (
        <></>
    )
}



