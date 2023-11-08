import Header from './components/header'
import React from 'react'
import Footer from './components/Footer'
import './App.css'
import {Container, Carousel, Card, Row, Col, Button} from 'react-bootstrap'
import CarouselImage from './components/carouselImage'
import image1 from "./assets/carousel-1.png"
import image2 from "./assets/carousel-2.jpg"
import image3 from "./assets/carousel-3.jpg"
import cardImage1 from "../src/assets/cardImage-1.jpg"
import cardImage2 from "../src/assets/cardImage-2.jpg"
import cardImage3 from "../src/assets/cardImage-3.jpeg"
import jumbotron from "../src/assets/jumbotron-edit.jpg"
import arrow from './assets/arrow.svg'

function App() {

  return (
    <>
      <div>
      <Header />
      <main>
        <Container className='py-2'>
          {/* CAROUSEL PART */}
          <Carousel>
            <Carousel.Item interval={1000}>
              <CarouselImage src={image1} alt="carousel-1" style={{filter: 'brightness(70%)'}}/>
              <Carousel.Caption>
                <h3>Node JS Back End</h3>
                <p>Seamless, scalable, and efficient back-end solutions, tailored to elevate your digital presence.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <CarouselImage src={image2} alt="carousel-2" />
              <Carousel.Caption>
                <h3>Golang Back End</h3>
                <p>Explore high-performance, concurrent operations for a smarter, faster backend.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <CarouselImage src={image3} alt="carousel-3" />
              <Carousel.Caption>
                <h3>Laravel Fullstack</h3>
                <p>An all-in-one, robust framework providing an elegant, end-to-end solution for your digital ambitions.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Row className='d-flex justify-content-center align-items-center mt-4'>
            <img src={arrow} alt="test" style={{width: '100px'}} />
          </Row>

          {/* CARD PART */}
          <h1 className='p-4 text-center'>FIND OUT MORE</h1>
          <Row className='p-4 m-2 d-flex justify-content-center'>
            <Col className='d-flex justify-content-center'>
              <Card className="text-center border-success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImage1} style={{objectFit: 'cover', height: '200px'}}/>
                <Card.Body>
                  <Card.Title>Portfolio</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="success" className='rounded-pill'>More Info</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Card className="text-center border-success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImage2} style={{objectFit: 'cover', height: '200px'}}/>
                <Card.Body>
                  <Card.Title>About</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="success" className='rounded-pill'>More Info</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Card className="text-center border-success" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardImage3} style={{objectFit: 'cover', height: '200px'}}/>
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="success" className='rounded-pill'>More Info</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            
          {/* CALL TO ACTION */}
          </Row>
          <Row className='p-4 m-4 d-flex justify-content-center align-items-center bg-success bg-opacity-50 rounded'>
            <Col sm={7}>
              <h1 className='fw-light'>Let's build captivating and engaging website. Bring your vision to life!</h1>
            </Col>
            <Col sm={5}>
              <img src={jumbotron} alt="" style={{width: '400px'}}/>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
