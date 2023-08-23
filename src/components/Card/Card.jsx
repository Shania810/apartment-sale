import React from 'react'
import './style.css'

export const Card = ({ image }) => {
    return (
        <div className='card-image' >
            <figure>
                <img src={image} alt={image} />
            </figure>
        </div>
    )
}
