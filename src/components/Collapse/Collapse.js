import React from 'react'
import "./Collapse.css"
import {useState} from 'react'

export default function Collapse({title, description}) {

    const [ open, setOpen ] = useState(false);

    return (
        <div className='tit'>
            <div className='rectangle' onClick={() => { setOpen(!open) }}>
                <h3>{title}</h3>
                <i className="fa-solid fa-chevron-down u" id={`${open ? 'up1' : 'down1'}`}></i>
            </div>
            {open && <p className={`${open ? 'ouvert' : ''}`} >{description}</p>}    
        </div>
    )
}