import React from 'react'
import imageMain from '../../../images/view.jpeg'

export const Main = () => {
    return (
        <main>
            <div id='main-description' >
                <h1>Apartamento no centro de Balneário Camboriú</h1>
                <p>Lindo apartamento, segunda quadra mar, no centro.
                    Um apartamento por andar sendo três quartos e três banheiros ( duas suítes , um quarto e um banheiro social ).
                    Prédio com apenas seis andares.Garagem privativa para um carro grande e portão exclusivo para vaga térreo.
                    Sacada com churrasqueira á carvão e pia.
                </p>
                <button><a href='https://api.whatsapp.com/send?phone=47997290020'>Contate-nos</a></button>
            </div>
            <div id='main-image' >
                <img src={imageMain} alt={imageMain} />
            </div>
        </main>
    )
}
