import React from 'react'
// import img from '../image/photo-1610878180933-123728745d22.jfif'
// import img2 from '../image/imagestiger.jfif'
// import img3 from '../image/images-westernghat.jfif'
import '../index2.css'
import Latest from './Latest'
import LatestArt from './LatestArt'
import LatestStories from './LatestStories'
import { useContext } from 'react'
import { Contextfr } from './Contextfr'
import TopPost from './TopPost'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
    const [rows] = useContext(Contextfr)


    return (
        <div>
            {
                rows.filter((val) => val.id === "3" && val.catagory === "Sports").map((row) =>
                    <Link className='linkbolly' to={`/home/article/:${row.id}/${row.catagory}`} style={{ textDecoration: "none" }}>

                        <img className='img1' src={row.imgUrl} height={420} width={800} alt="" />
                       <p className='sports'> {row.catagory}/jan 06 2022</p>
                    </Link>
                )
            }
            <div className='MainContainer'>{
                rows.filter((val) => val.id === "1" && (val.catagory === "Food" || val.catagory === "Hollywood")).map((roww)=>
                    <Link className='linkbolly' to={`/home/article/:${roww.id}/${roww.catagory}`} style={{ textDecoration: "none" }}>

                    <img src={roww.imgUrl} alt='' width={300} height={205} />
                    <div className='upperCatarogy'>
                    <p> {roww.catagory}</p>
                    </div>

                    </Link>
                )}
            </div>

            <Latest />
            <LatestArt />
            <TopPost />
            <LatestStories />

        </div>
    )
}

export default Home