import React from 'react'

import ThreeLineSVG from "../../assets/three-line.svg"

const Logo = () => {
    return (
        <div className='logo'>
            <h1 className='logo-text'>
                Foodie
                <img className="logo-three-line" src={ThreeLineSVG} alt="three-line" />
                <svg className="logo-underline" width="140" height="8" viewBox="0 0 171 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="171" height="8" fill="#BAE8E8" />
                </svg>
            </h1>
        </div>
    )
}

export default Logo