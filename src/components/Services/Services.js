import React from 'react'
import "../Home/Home"
import "./Services.css"
import riviere from '../../Images/Logos/riviere.jpg'
import { useState } from 'react'



export default function Services() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        
        <main className='propos'>
            <section className='accueil'>
                <img className='banniere' src={riviere} alt='Image de paysage avec des falaises.' />
            </section>
            <section className='main__rectangle'>
                <div className='tit'>
                    <div className='rectangle' onClick={()=>{setOpen1(!open1)}}>
                        <h3>Fiabilité</h3>
                        <i className="fa-solid fa-chevron-down" id={`${open1 ? 'up1' : 'down1'}`}></i>
                    </div>
                    <p className={`${open1 ? 'ouvert1' : 'ferme1'}`} >Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </div>
                <div className='tit'>
                    <div className='rectangle' onClick={() => { setOpen2(!open2) }}>
                        <h3>Respect</h3>
                        <i className="fa-solid fa-chevron-down " id={`${open2 ? 'up2' : 'down2'}`}></i>
                    </div>
                    <p className={`${open2 ? 'ouvert2' : 'ferme2'}`}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
                <div className='tit'>
                    <div className='rectangle' onClick={() => { setOpen3(!open3) }}>
                        <h3>Service</h3>
                        <i className="fa-solid fa-chevron-down" id={`${open3 ? 'up3' : 'down3'}`}></i>
                    </div>
                    <p className={`${open3 ? 'ouvert3' : 'ferme3'}`}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
                <div className='tit'>
                    <div className='rectangle' onClick={() => { setOpen4(!open4) }}>
                        <h3>Sécurité</h3>
                        <i className="fa-solid fa-chevron-down" id={`${open4 ? 'up4' : 'down4'}`}></i>
                    </div>
                    <p className={`${open4 ? 'ouvert4' : 'ferme4'}`}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </section>
        </main>
    )
}