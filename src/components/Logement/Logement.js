import React from 'react'
import './Logement.css'
import { useParams } from 'react-router-dom'
import { stockData } from "../../datas/datas"


export default function Logement() {
    const params = useParams()
    const data = stockData.find(x => x.id === params.id)
    console.log(data)
    return (
        <div className='main'>
        <section className='sec_car'>
            <div className='carrousel'>
                {data.pictures.map((x, index) => <img className='car_img' key={index} src={x}></img>)}
            </div>
        </section>
        <section>
            <div className='affiche'>
                <div>
                <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                    <ul>
                    {data.tags.map((x, index)=><li key={index}>{x}</li>)}
                    </ul>
                </div>
                <div className='host'>
                    <span>
                    <p>{data.host.name}</p>
                    <img src={data.host.picture}></img>
                    </span>
                    <p>{data.rating}</p>
                </div>
            </div>
            <div className='info'>
                <div className='desc'>
                    <div className='rectangle'>
                        <h2>Description</h2>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <p>{data.description}</p>
                </div>
                <div className='desc'>
                    <div className='rectangle'>
                        <h3>Equipments</h3>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                        <ul>
                            {data.equipments.map((x, index) => <li key={index}>{x}</li>)}
                        </ul>
                </div>
            </div>
        </section>
        </div>
    )
}