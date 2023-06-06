import React, { useContext, useEffect } from 'react'
import BusketPNG from "@assets/busket.png"
import { ProductContext } from "@features/product-shopping/stores/product-context.jsx"

import { useState } from 'react'

const Busket = () => {
    const { getCartTotalAmount, openBusket } = useContext(ProductContext)
    const [shake, setShake] = useState(true)
    const amountTotal = getCartTotalAmount();

    useEffect(() => {
        const shakeRemoveTimer = setTimeout(() => {
            setShake(false);
        }, 400)

        return () => {
            clearTimeout(shakeRemoveTimer)
            setShake(true);
        }

    }, [amountTotal])


    return (
        <div className='busket'>
            <div className={`busket-wrapper ${shake && "shake"}`}>
                <img className="my-busket" onClick={openBusket} width="200px" src={BusketPNG} alt="busket" />
                <div className='circle' onClick={openBusket}>{amountTotal}</div>
                <div className='click-to-see'>
                    <svg width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>

                    <span>Click To See Cart</span>
                </div>
            </div>

            <svg className="circleBG" width="416" height="337" viewBox="0 0 416 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="228.5" cy="108.5" r="228.5" fill="url(#paint0_linear_1505_1841)" fillOpacity="0.6" />
                <defs>
                    <linearGradient id="paint0_linear_1505_1841" x1="-348.633" y1="367.962" x2="430.373" y2="-180.066" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CFE9E9" />
                        <stop offset="1" stopColor="#CFE9E9" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default Busket