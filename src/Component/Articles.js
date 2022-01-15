import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Contextfr } from './Contextfr'
import { FaHandsWash } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import MoreFroSiren from './MoreFroSiren';
import '../App.css'

const Articles = () => {
    const [rows] = useContext(Contextfr)

    const { ID } = useParams();
    const { b } = useParams();
    console.log(ID)

    return (
        <div>
            {
                rows.filter((val) => ":" + val.id === ID && val.catagory === b).map((value) => (
                    <div className='artMain'>
                        <h2>{value.title}</h2>
                        <img src={value.imgUrl} alt="" width={370} height={200} />
                        <p className='paraArticle'>{value.body}</p>
                        <p>let's talk about them</p>
                        <p >The news about {value.title} is one of the most intresting viral news on the social media platform.Here is the some interesting factor about this news {value.body} </p>
                        <div className='iconss'>
                            <p className='artitle'>{value.catagory}</p>
                            <span className='handclap'>
                                <FaHandsWash />
                                95k
                            </span>
                            <BsShare />

                        </div>
                        <hr />
                        <div className='iconss2'>
                            <img src='https://planw.in/wp-content/uploads/2021/02/avatar-4.png' alt='' width={70} height={70}></img>
                            <p>Written By jhon olivia</p>
                            <p>jan 06 2022</p>
                        </div>
                    </div>
                ))
            }
            <MoreFroSiren />
        </div>
    )
}

// css of this page in app.css file

export default Articles
