import React from 'react'
import { useContext } from 'react'
import {Contextfr} from './Contextfr'
import './Home.css'

const Latest = () => {
    const [rows] = useContext(Contextfr)
    
    return (
        <div>
            <h2 className='LatestFirstHeading'>The Latest</h2>
            <div className='LatestMainHome'>
            {rows.filter((val) => (val.id) === "4" && (val.catagory === "Bollywood" || val.catagory === "Food" || val.catagory === "Technology")).map((value) => (
                <div className='LatestBox'>
                    <img className='LatestImageHome' src={value.imgUrl} alt='' width={300} height={200} />
                    <h4 className='LatestHeadingHome'>{value.title}</h4>
                    <p className='LatestPara'>{value.body}</p>
                    <p className='p'><strong>{value.catagory}</strong>/ August 01 2022</p>
                </div>
            ))}
            </div>
            <hr/>

        </div>
    )
}

export default Latest
