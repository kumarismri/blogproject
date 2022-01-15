import React from 'react'
import { useContext } from 'react'
import { Contextfr } from './Contextfr'
import '../index2.css'
import './Home.css'
import { Link } from 'react-router-dom'


const TopPost = () => {
    const [rows] = useContext(Contextfr)
        
    return (
        <div>
            <h2 className='topHome'>Top Post</h2>
            <div className='mainHome'>
                {rows.filter((val) => val.id === "0" && val.catagory === "Bollywood").map((row) => (
                    <div className='inner1'>
                        <Link className='linkbolly' to={`/home/article/:${row.id}/${row.catagory}`} style={{ textDecoration: "none" }}>

                        <img className='imgg2' src={row.imgUrl} alt='' />
                        <h5 className='heading2'>{row.title}</h5>
                        <p className='aut2'>{row.catagory}</p>
                        <p className='bolld'>{parseInt(row.id)+1}</p>
                        </Link>
                    </div>
                ))}
                {rows.filter((val) => val.id <= "3" && val.catagory === "Hollywood" && val.id >= "1").map((row) => (
                    <div className='inner2'>
                        <hr className='hr2' />
                        <Link className='linkbolly' to={`/home/article/:${row.id}/${row.catagory}`} style={{ textDecoration: "none" }}>

                        <img className='imgg3' src={row.imgUrl} alt='' />
                        <h5 className='heading3'>{row.title}</h5>
                        <p className='aut2'>{row.catagory}</p>
                        <p className='bolld2'>{parseInt(row.id)+1}</p>
                        </Link>
                    </div>

                ))}
                <div className='last'>
                    <h3>Advertisement</h3>
                </div>
            </div>

        </div>
    )
}

export default TopPost
