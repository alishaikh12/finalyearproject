import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



import image1 from './../../assets/image1.jpg';
import image2 from './../../assets/image2.png';
import image3 from './../../assets/information3.jpg';

export default function InfoHomepage(){
    return(
  <div style={{paddingLeft:'50px', paddingRight:'50px', paddingBottom:'50px'}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
  </Carousel.Item>
  </Carousel>
      </div>
   
    );
}