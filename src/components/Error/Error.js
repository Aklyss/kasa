import React from 'react'
import "./Error.css"
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div className='error'>
            <h1 className='main_error'>404</h1>
            <h2 className='text_error'>Oups! La page que vous demandez n'existe pas.</h2>
            <div className='link_error'><Link to='/'>Retourner sur la page d'accueil</Link></div>
        </div>
    )
}