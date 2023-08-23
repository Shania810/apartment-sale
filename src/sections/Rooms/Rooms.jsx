import React from 'react'
import { Card } from '../../components/Card/Card'
import roomOne from '../../images/roomOne.jpeg'
import roomTwo from '../../images/roomTwo.jpeg'
import roomThree from '../../images/roomThree.jpeg'
import './style.css'

export const Rooms = () => {
    return (
        <div id='rooms'>
            <h2>Quartos</h2>
            <div id='rooms-cards'>
                <Card image={roomOne} />
                <Card image={roomTwo} />
                <Card image={roomThree} />
            </div>
        </div>
    )
}
