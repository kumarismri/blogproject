import React from 'react'
import img from '../image/photo-1610878180933-123728745d22.jfif'
import img2 from '../image/imagestiger.jfif'
import img3 from '../image/images-westernghat.jfif'
import '../index2.css'
import Latest from './Latest'
import LatestArt from './LatestArt'
import LatestStories from './LatestStories'
import TopPost from './TopPost'


const Home = () => {

    return (
        <div>
            <img className='img1' src={img} height={420} width={800} alt=""/>
            <img className='img2' src={img2} height={170} width={300} alt=''/>
            <img className='img3' src={img3} height={170} width={300} alt=''/>
            <Latest/>
            <LatestArt/>
            <TopPost/>
            <LatestStories/>
            
        </div>
    )
}

export default Home