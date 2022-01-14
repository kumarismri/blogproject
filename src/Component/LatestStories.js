import React from 'react'
import { useContext } from 'react'
import {Contextfr} from './Contextfr'
import './Home.css'

const LatestStories = () => {
    const [rows] = useContext(Contextfr)

    return (
        <div className="StoryParent">
            <h2 className='StoryHeading'>Latest Stories</h2>
            <hr/>
            <div className='StoryMain'>
            {rows.filter((val) => (val.id) === "0" && (val.catagory === "Bollywood" || val.catagory === "Food" || val.catagory === "Technology")).map((value) => (
                <div className='StoryBox'>
                    <h4 className='StoryTitle'>{value.title}</h4>
                    <p className='StoryPara'>{value.body}</p>
                    <p className='p'><strong>{value.catagory}</strong>/ January 06 2022</p>
                </div>
            ))}
            <hr/>
            </div>
            
        </div>
    )
}

export default LatestStories
