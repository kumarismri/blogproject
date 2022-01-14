import React from 'react'
import { useContext } from 'react'
import {Contextfr} from './Contextfr'
import './Home.css'

const MoreFroSiren = () => {
    const [rows] = useContext(Contextfr)

    return (
        <div>
            <h5 className='LatestFirstHeading'>More From The Siren</h5>
            <hr/>
            <div className='LatestMainHome'>
            {rows.filter((val) => (val.id) === "4" && (val.catagory === "Bollywood" || val.catagory === "Food" || val.catagory === "Technology")).map((value) => (
                <div className='LatestBox'>
                    <p className='ReleatedReads'>Releated Reads</p>
                    <img className='LatestImageHome' src={value.imgUrl} alt='' width={300} height={200} />
                    <h4 className='LatestHeadingHome'>{value.title}</h4>
                    <img src='https://planw.in/wp-content/uploads/2021/02/avatar-4.png' alt='' width={70} height={70}></img>
                    <p className='p'><strong>{value.catagory}</strong>/ August 01 2022</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MoreFroSiren
