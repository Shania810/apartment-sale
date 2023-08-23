import React from 'react'
import kitchen from '../../images/kitchen.jpeg'
import balcony from '../../images/balcony.jpeg'
import garage from '../../images/garage.jpeg'
import './style.css'
import { CardPlace } from '../../components/CardPlace/CardPlace'

export const Places = () => {
    return (
        <div id='places' >
            <CardPlace title='Sacada' image={balcony} />
            <CardPlace title='Garagem' image={garage} />
            <CardPlace title='Cozinha' image={kitchen} />
        </div>
    )
}
