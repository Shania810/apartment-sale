import React from 'react'
import { Card } from '../../components/Card/Card'
import roomOne from '../../images/roomOne.jpeg'
import roomTwo from '../../images/roomTwo.jpeg'
import roomThree from '../../images/roomThree.jpeg'

export const Rooms = () => {
    return (
        <div>
            <h2>Quartos</h2>
            <hr></hr>
            <Card image={roomOne} />
            <Card image={roomTwo} />
            <Card image={roomThree} />
        </div>
    )
}
