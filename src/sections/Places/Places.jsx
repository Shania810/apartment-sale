import React from 'react'
import { Card } from '../../components/Card/Card'
import kitchen from '../../images/kitchen.jpeg'
import balcony from '../../images/balcony.jpeg'
import garage from '../../images/garage.jpeg'

export const Places = () => {
    return (
        <div id='places' >
            <div className='place' >
                <h2>Cozinha</h2>
                <Card image={kitchen} />
            </div>
            <div className='place' >
                <h2>Sacada</h2>
                <Card image={balcony} />
            </div>
            <div className='place' >
                <h2>Garagem</h2>
                <Card image={garage} />
            </div>
        </div>
    )
}
