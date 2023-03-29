import React from 'react'
import './Logement.css'
import { useParams } from 'react-router-dom'
import { stockData } from "../../datas/datas"
import Carrousel from '../../components/Carrousel/Carrousel'
import Collapse from '../../components/Collapse/Collapse'
import note1 from '../../Images/Logos/icone1.png'
import note2 from '../../Images/Logos/icone2.png'
import Error from '../Error/Error'

export default function Logement() {
    const params = useParams()
    const data = stockData.find(x => x.id === params.id)
    if(!data){
        return(<Error></Error>)
    }
    
    return (
        <div className='main'>
            <Carrousel pictures={data.pictures}>

            </Carrousel>
            <section>
                <div className='affiche'>
                    <div>
                        <h1>{data.title}</h1>
                        <h2>{data.location}</h2>
                        <ul>
                            {data.tags.map((x, index) => <li key={index}>{x}</li>)}
                        </ul>
                    </div>
                    <div className='host'>
                        <span>
                            <p>{data.host.name}</p>
                            <img src={data.host.picture}></img>
                        </span>
                        <div>
                            {[...Array(5)].map((star, index) => {
                            return (
                                <img className='etoile' key={index} src={index + 1 <= data.rating  ? note1 : note2 } alt="star" />
                            )
                        })}</div>
                    </div>
                </div>
                <div className='info'>
                    <div className='desc'>
                        <Collapse title="Description" description={data.description}></Collapse>
                    </div>
                    <div className='desc'>
                        <Collapse title="Equipements" description={data.equipments.map((x, index) => <li key={index}>{x}</li>)}></Collapse>
                    </div>
                </div>
            </section>
        </div>
    )
}