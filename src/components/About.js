import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import service_1 from '../Images/service_1.jpg';
import service_2 from '../Images/service_2.jpg';
import service_3 from '../Images/service_3.jpg';
import user_1 from '../Images/user1.jpg';
import user_2 from '../Images/user2.jpg';
import default_user from '../Images/default_user_image.png';

export const About = () => {
    return (
        <React.Fragment>
            <AboutUs/>
            <Testimonials/>
        </React.Fragment>
    )
}

const AboutUs = () => {
    const services =[
        {
            id:1,
            image: service_1,
            alt:"Downlodable service image",
            heading:"DOWNLOAD",
            message:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id:2,
            image:service_2,
            alt:"Report card image",
            heading:"FREE REPORT",
            message:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id:3,
            image:service_3,
            alt:"Video tutorial image",
            heading:"VIDEO TUTORIAL",
            message:"Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ];
    return (
        <section className="about-us" id="About">
            <div className="container text-center">
                <h1 className="title">ABOUT US</h1>
                <div className="row text-center">
                    {services.map(service=>{
                        return (
                        <div className="col-md-4 services" key={service.id}>
                            <img src={service.image} alt={service.alt} className="service-img"/>
                            <h4>{service.heading}</h4>
                            <p>{service.message}</p>
                        </div>
                        );
                    })};
                </div>
            </div>
        </section>    
    );
};

const Testimonials = () => {
      const feedbacks =[
        {
            id:1,
            image:user_1,
            alt:"User Image",
            user_name:"User_1",
            feedback:"One of the best website for getting good projects. Great work. Thank you"
        },
         {
             id:2,
            image:user_2,
            alt:"User Image",
            user_name:"User_2",
            feedback:"One of the best website for getting good projects. Great work. Thank you"
        },
         {
             id:3,
            image:"",
            alt:"User Image",
            user_name:"User_3",
            feedback:"One of the best website for getting good projects. Great work. Thank you"
        }
    ];
    const settings = {
        centerMode: true,
        dots:true,
        arrows:true,
        infinite:false,
        centerPadding: '10px',
        slidesToShow: 1,
        pauseOnDotsHover:true,
        responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            dots:true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
        }
        },
    ]
};
    return (
        <section>
          <div className="container testi-container col-sm-8 col-lg-5">
                <h1 className="title text-center">TESTIMONIALS</h1>
                <div className="row testi-slider">
                <Slider {...settings}>
                    {feedbacks.map(feedback=>{
                        return (
                        <div className="col-md-4 testimonials text-center" key={feedback.id}>
                            <img src={feedback.image || default_user} alt={feedback.alt} />
                            <p>{feedback.user_name}</p>
                            <p className="feedback">{feedback.feedback}</p>
                        </div>
                        );
                    })}
                </Slider>
                </div>
            </div>    
        </section> 
    )
}


