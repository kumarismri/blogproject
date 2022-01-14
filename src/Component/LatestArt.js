import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Contextfr } from './Contextfr'

const LatestArt = () => {
    const [state,setState] = useState(true)

    const [rows] = useContext(Contextfr) 

    const handle =()=>{
          setState(!state)
    }

    return (
        
            <div>
            <h2 className='ArticleFirstHeading'>Latest Article</h2>
            <div className='ArticleMain'>
            {rows.filter((val) =>state ? (val.id) === "0" && val.catagory!=="Food": val.id<="1" && val.catagory!=="Food" && val.catagory!=="Sports").map((value) => (
                <div className='ArticleBox'>
                    <hr/>
                    <img className='ArticleImageHome' src={value.imgUrl} alt='' width={260} height={150} />
                    <div className='main3'>
                    <h4 className='ArticleHeadingHome'>{value.title}</h4>
                    <p className='ArticlePara'>{value.body}</p>
                    <p className='p'><strong>{value.catagory}</strong>/ August 01 2022</p>
                    </div>
                </div>
            ))}
            </div>
            <button onClick={handle} className='arrow'>Load More</button>
        </div>
    
    )
}

export default LatestArt
