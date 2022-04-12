import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import web_project from "../Images/web_project.jpg"

const cards =[
  {
    id:100,
    class:"card card-1",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
     id:101,
    class:"card card-2",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
     id:103,
    class:"card card-3",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
     id:104,
    class:"card card-4",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
     id:105,
    class:"card card-5",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  },
   {
     id:106,
    class:"card card-6",
    heading:"Card titile",
    message:"Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots:true,
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500,
       responsive: [
    {
      breakpoint:1000,
      settings:{
        centerMode: true,
        dots:true,
        arrows:true,
        centerPadding: '-10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '-10px',
        slidesToShow: 1
      }
    },
  ]
    };
    return (
      <section class="project" id="Project">
        <div class="container-fluid project-slider col-lg-12 ">
        <h2 className="title text-center">PROJECT</h2>
        <p class="text-center project-text">List of all the projects that you can get. 
        Just click the card which contains your desire project and you will get it easily.</p>
        <div className="row slider">
        <Slider {...settings}>
            {cards.map(card =>{
              return(
                <div className="col-md-4 card-container" key={card.id}>
                  <div className={card.class} style={{width:"18rem"}}>
                <img className="card-img-top img-circle img-fluid rounded-img" src={web_project} alt="DBMS Project card"/>
                <div className="card-body">
                  <h5 className="card-title text-center">{card.heading}</h5>
                  <p className="card-text text-center">{card.message}</p>
                  <a href="#Project" className="btn btn-primary">Explore</a>
                </div>
              </div>
              </div>
              );
            })}
        </Slider>
        </div>
          </div>
            </section>
    );
  }
}

