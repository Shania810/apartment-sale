import React from 'react'
import { FaHome } from 'react-icons/fa'
import './style.css'

export const Navbar = () => {
    return (
        <nav>
            <FaHome size={50}/>
            <a href='https://api.whatsapp.com/send?phone=47997290020'><b>Contato</b></a>
        </nav>
    )
}

