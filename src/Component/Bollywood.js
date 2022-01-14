import React from 'react'
import { useState, useContext } from 'react'
import { Contextfr } from './Contextfr'
import img from '../image/download.png'
import { Link, useParams } from 'react-router-dom'
import '../index2.css'

const Bollywood = () => {

    const [state, setState] = useState(true)

    const {b}=useParams();
    
    const handle = () => {
        setState(!state)
        console.log("pop");
    }

    const [rows] = useContext(Contextfr)
    return (
        <div>
            <h2 className='head1'>{b}</h2>
            <div className='main1'>
                {(rows.filter((val) => state ? (val.id <= "5" && val.catagory === b) :( val.id <= "6" && val.catagory === b))).map((row) => (

                    <div >
                        <Link className='linkbolly' to={`/bolly/article/:${row.id}/${b}`} style={{textDecoration:"none"}}>
                            <img className='imgg' src={row.imgUrl} alt=''/>
                            <h5 className='heading1'>{row.title}</h5>
                            <p className='para1'>{row.body}</p>
                            <p className='aut1'><strong>{row.catagory}</strong>/jan 06 2022</p>
                        </Link>
                        <hr className='hr1' />
                    </div>
                ))}
                <img onClick={handle} src={img} alt="" width={70} height={70} />
            </div>
            <h2 className='top'>Top Post</h2>
            <div className='main2'>
                {rows.filter((val) => val.id === "0" && val.catagory === b).map((row) => (
                    <div className='inner1'>
                        <img className='imgg2' src={row.imgUrl} alt='' />
                        <h5 className='heading2'>{row.title}</h5>
                        <p className='aut2'><strong>{row.catagory}</strong>/jan 06 2022</p>
                        <p className='bolld'>{parseInt(row.id+1)}</p>
                    </div>
                ))}
                {rows.filter((val) => val.id <= "3" && val.catagory === b && val.id >= "1").map((row) => (
                    <div className='inner2'>
                        <hr className='hr2' />
                        <img className='imgg3' src={row.imgUrl} alt='' />
                        <h5 className='heading3'>{row.title}</h5>
                        <p className='aut2'><strong>{row.catagory}</strong>/jan 06 2022</p>
                        <p className='bolld2'>{parseInt(row.id)+1}</p>
        
                    </div>

                ))}
                <div className='last'>
                    <h3>Advertisement</h3>
                </div>

            </div>

        </div>
    )
}

export default Bollywood