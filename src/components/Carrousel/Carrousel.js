import React from 'react'
import "./Carrousel.css"
import {useState} from 'react'

export default function Carrousel({pictures}) {
    const [index , setIndex] = useState(0);
    function next() {
        setIndex( index < pictures.length - 1 ? index + 1 : 0);
        
    }
    function prec() {
        setIndex(index > 0 ? index - 1 : pictures.length -1);

    }
    console.log(pictures)
    return (
            <section className='sec_car'>
                <div>
                    <img className='car_img' key={index} src={pictures[index]} ></img>
                </div>
                <i className="fa-solid fa-chevron-down dg" id='d' onClick={() => {
                    next()

                }}></i>
                <i className="fa-solid fa-chevron-down dg" id='g' onClick={() => {
                    prec()

                }}></i>
            <p className='indic'>{index + 1}/{pictures.length}</p>
            </section>
    )
}