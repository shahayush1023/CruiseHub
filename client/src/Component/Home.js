import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import {LinkContainer} from 'react-router-bootstrap'
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={require("./2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>The View</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./final.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Our Balcony</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="text-center mt-4">
        <h1> ABOUT US </h1>
      </div>
      <div className="d-flex justify-content-between mt-2 ">
        <div className="w-25 mt-4 h11">
          <h3 style={{color:'red'}}>Helping People to enjoy their Vacation </h3>
          <h6 style={{color:'black'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing officia nemo
            amet! Vitae, quas magnam.Hii i am am ammm vaaa bb mm. Necessitatibus
            reprehenderit deleniti magni nobis doloribus error a eos hic dolores
            vero?To know more about us click on the button
          </h6>
          <LinkContainer to="/about"><button type="button" class="btn btn-primary">
            About Us
          </button>
          </LinkContainer>
        </div>
        
      </div>
      <h1 className="mt-4 text-center">OTHER FACILITIES</h1>
      <div className="container d-flex flex-wrap">
  <article class='card col-12 col-md-6 col-lg-3'>
    <img src={require('./food.jpg')} style={{height:'350px',width:'366px'}}/>
    <section class='card-title text-center' style={{color:'red' ,fontSize:'22px'}}>FOOD</section>
  </article>
  <article class='card col-12 col-md-6 col-lg-3'>
    <img src={require('./spa.jpg')}  style={{height:'350px',width:'366px'}}/>
    <section class='card-title text-center' style={{color:'red' ,fontSize:'22px'}}>SPA</section>
  </article>
  <article class='card col-12 col-md-6 col-lg-3'>
    <img src={require('./hotel.jpg')}  style={{height:'350px',width:'366px'}}  />
    <section class='card-title text-center' style={{color:'red' ,fontSize:'22px'}}>LUXRIOUS ROOM</section>
  </article>
  <article class='card col-12 col-md-6 col-lg-3'>
    <img src= {require('./dolphin.jpg')} style={{height:'350px',width:'366px'}} />
    <section class='card-title text-center' style={{color:'red' ,fontSize:'22px'}}> SIGHTSEEING</section>
  </article>
  </div>
      
      <div >
        <p>Proceed Further to Book! <LinkContainer to="/Home1"><a href="">Click Me</a></LinkContainer></p>
      </div>
      
        


        
      
    </>
  );
};

export default Home;
