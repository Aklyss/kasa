import React from 'react'
import "./Footer.css"
import logow from '../../Images/Logos/logow.png'


export default function Footer() {
    return (
        <div className='main-footer'>
            <img className='logow' src={logow} alt="Logo" />
            <h1>© 2020 Kasa. All rights reserved</h1>
        </div>
    )

}