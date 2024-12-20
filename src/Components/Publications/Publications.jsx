import React from 'react'
import "./Publications.css"
import logo2 from '../../assets/logo2.png'
import PublicationsData from '../../assets/publications'


const Publications = () => {
  return (
    <div id = 'publications' className='publications'>
        <div className="publications-title">
            <h1>Publications</h1>
            <img src={logo2} alt=''/>
        </div>
        <div className='publications-container'>
            {PublicationsData.map((publication, index) =>{
                return <div key ={index} className='publications-format'>
                    <h3>{publication.p_no}</h3>
                    <h2>{publication.p_title}</h2>
                    <p>{publication.p_desc}</p>
                    <div className='publications-readmore'/>
                    <p>Read More</p>

                </div>
            })}
        </div>
    </div>
  )
}

export default Publications
