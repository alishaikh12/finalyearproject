import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import image1 from './../../assets/information1.png';
import image2 from './../../assets/information2.jpg';
import image3 from './../../assets/information3.jpg';

export default function InfoHomepage(){
    return(
      <div>
<Carousel>
  <Carousel.Item>
    <img
      className=""
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=""
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
      </div>
   
    );
}