import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
// import LocationOn from "@material-ui/icons/LocationOn";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Card from "components/Card/Card.js";

import image1 from './../../assets/information1.png';
import image2 from './../../assets/information2.jpg';
import image3 from './../../assets/information3.jpg';
export default function InfoHomepage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return(
        <div> 
        {/* <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card> */}
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  {/* <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States */}
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  {/* <LocationOn className="slick-icons" />Somewhere Beyond,
                  United States */}
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
              />
              <div className="slick-caption">
                <h4>
                  {/* <LocationOn className="slick-icons" />Yellowstone
                  National Park, United States */}
                </h4>
              </div>
            </div>
          </Carousel>
        {/* </Card> */}
      {/* </GridItem>
    </GridContainer> */}
    </div>
    );
}