import React from 'react'
import { Card } from '../../components/Card/Card'
import bathroomOne from '../../images/bathroomOne.jpeg'
import bathroomTwo from '../../images/bathroomTwo.jpeg'
import bathroomThree from '../../images/roomThree.jpeg'

export const Bathrooms = () => {
  return (
    <div id='bathrooms'>
      <h2>Banheiros</h2>
      <div id='bathrooms-cards'>
        <Card image={bathroomOne} />
        <Card image={bathroomTwo} />
        <Card image={bathroomThree} />
      </div>
    </div>
  )
}
