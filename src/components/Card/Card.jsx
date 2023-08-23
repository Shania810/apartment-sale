import React from 'react'
import './style.css'

export const Card = ({ image }) => {
    return (
        <div>
            <figure>
                <img src={image} alt={image} />
            </figure>
        </div>
    )
}
