import React from 'react'
import './style.css'

export const CardPlace = ({ title, image }) => {
    return (
        <div className='card-place' >
            <h2>{title}</h2>
            <div className='card-place-image' >
                <figure>
                    <img src={image} alt={image} />
                </figure>
            </div>
        </div>
    )
}