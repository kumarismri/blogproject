import React from 'react'
import '../App.css'
import { Contextfr } from './Contextfr'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const ComponentOne = () => {
    const [value]=useContext(Contextfr)
    
    console.log(value.id);
    return (
        <div>
            <h1>Siren</h1>
            <h5 className='the'>The</h5>
            <h5>{value.id}</h5>
            <nav className="nav nav-pills nav-justified p-3 mb-2 bg-light text-dark">
                <Link to="/home" className="nav-item text-dark">Home</Link>
                {value.filter((val)=>(val.id)%7===0 ).map((row) => (
                
                <Link to={`/bolly/${row.catagory}`} className="nav-item text-dark" >{row.catagory}</Link>
                ))}
            </nav>
        </div>
    )
}

export default ComponentOne
