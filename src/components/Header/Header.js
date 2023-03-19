import React from 'react'
import "./Header.css"
import logor from '../../Images/Logos/logor.png'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <img src={logor} alt="Logo" />
            <nav>
                <ul>
                    <li><Link to="/" className='nav'>Accueil</Link></li>
                    <li><Link to="/services" className='nav'>A Propos</Link></li>
                </ul>
            </nav>
        </header>

    )
}