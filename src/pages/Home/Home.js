import React from 'react'
import "./Home.css"
import montagne from '../../Images/Logos/montagne.jpg'
import Cards from '../../components/Cards/Cards'



export default function Home() {
    return (
        <div className='main'>
            <section className='accueil'>
                <img className='banniere' src={montagne} alt='Image de paysage avec des falaises.' />
                <h1 className='titre_accueil'>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='gallery'>
                <div className="container">
                    <Cards />
                </div>
            </section >
        </div>
    )
}