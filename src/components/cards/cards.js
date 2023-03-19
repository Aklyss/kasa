import React from 'react'
import {stockData} from "../../datas/datas"
import "./cards.css"
import { Link } from 'react-router-dom'


export default function Cards() {
    return (
        <div className='cards'>
            {stockData.map(datas => {
                return(
                    <Link to={`/Logement/${datas.id}`} key={datas.id} className='card' >
            <img className='card__img' src={datas.cover} alt={datas.title}></img>
            <p className='card__p'>{datas.title}</p>
            </Link>
            )})}
        </div>
    )
}