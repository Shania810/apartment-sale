import React from 'react'
import kitchen from '../../images/kitchen.jpeg'
import './style.css'

export const View = () => {
    return (
        <div id='view' >
            <h2>Cozinha</h2>
            <div>
                <figure>
                    <img src={kitchen} alt={kitchen} />
                </figure>
            </div>
        </div>
    )
}
