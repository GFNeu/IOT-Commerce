import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import oferta1 from '../assets/oferta1.png'
import oferta2 from '../assets/oferta2.png'
import oferta3 from '../assets/oferta3.png'

const Carrousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oferta1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oferta2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={oferta3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default Carrousel
