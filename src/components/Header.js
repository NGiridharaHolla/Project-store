import React from 'react'
import homeImage from '../Images/home2.png'
import play from '../Images/play.png'
import wave1 from '../Images/wave1.png'

 export const Header = ()=>{
    return(
       <section className="banner" id="Home">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="pro-title">PROJECT STORE</p>
                    <p className="pro-txt">Here you can find pool of projects on various domains and we also included VTU projects to help students.</p>
                    <a href="#"><img src={play} className="play-button"/>Watch Tutorial</a>
         </div>
        <div className="col-md-6 text-center">
        <img src={homeImage} alt="A Simple SVG image" className="img-fluid"/>
         </div>
        </div>
        </div>
        <img src={wave1} className="bottom-img"/>
       </section>
    )
}
