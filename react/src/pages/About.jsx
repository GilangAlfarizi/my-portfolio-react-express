import Header from "../components/header"
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaBirthdayCake} from 'react-icons/fa'
import {RiPhoneFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import selfie2 from "../assets/about/selfie-2.png"
import arrow from "../assets/arrow.svg"

export default function About() {
    return (
        <div>
            <Header />

                {/* LANDING */}
                <Container className='py-2'>
                    <Row className="p-4">
                        <Col sm={5} className="d-flex justify-content-center">
                            <img className='border border-success rounded shadow' src={selfie2} alt="" style={{width: '350px'}}/>
                        </Col>
                        <Col sm={7} className="justify-content-center">
                            <Row className="m-4">
                                <h1>Meet Gilang Alfarizi!</h1>
                            </Row>
                            <Row className="m-4">
                                <hr className='border-4 border-success my-4' />
                            </Row>
                            <Row className="m-4">
                                <p>Gilang Alfarizi is an adept back-end web developer with a strong foundation in utilizing Node.js, demonstrating a commendable level of proficiency in this technology. His experience includes working with Golang and Laravel Fullstack, where he showcases a competent understanding, particularly in Golang and Laravel Fullstack, altough in a relatively early stage. With a primary focus on Node.js, Gilang brings robust skills and expertise in crafting efficient and scalable back-end solutions, showing promising potential in Golang and Laravel Fullstack as well.</p>
                            </Row>
                            <Row className="d-flex justify-content-end mt-4">
                                <img src={arrow} alt="" style={{width: '100px', opacity: '30%'}}/>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                {/* CONTACT */}
                <div className="bg-dark my-4">
                    <Row className="text-center text-white mt-4 pt-4">
                        <h1 className="mt-4">CONTACT</h1>
                    </Row>
                    <Row className="justify-content-center p-4 m-4">
                        <Col className="d-flex justify-content-center">
                            <Card className="align-items-center p-2 bg-dark text-center text-light border-success mb-4" style={{ width: '18rem' }}>
                                <AiFillInstagram size={100} color="lightgreen" />
                                <Card.Body>
                                <Card.Title>Instagram</Card.Title>
                                <Card.Text>
                                    Get to know me from my personal instagram.
                                </Card.Text>
                                <Button variant="success" className="rounded-pill my-2">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Card className="align-items-center p-2 bg-dark text-center text-light border-success mb-4" style={{ width: '18rem' }}>
                                <IoLogoWhatsapp size={100} color="lightgreen" />
                                <Card.Body>
                                <Card.Title>Whatsapp</Card.Title>
                                <Card.Text>
                                    Get it touch and contact my personal Whatsapp directly.
                                </Card.Text>
                                <Button variant="success" className="rounded-pill my-2">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <Card className="align-items-center p-2 bg-dark text-center text-light border-success mb-4" style={{ width: '18rem' }}>
                                <AiFillGithub size={100} color="lightgreen" />
                                <Card.Body>
                                <Card.Title>Github</Card.Title>
                                <Card.Text>
                                    Review my finished projects from my public repositories.
                                </Card.Text>
                                <Button variant="success" className="rounded-pill my-2">Visit Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* OTHER INFORMATIONS */}
                <Container>
                    <Row>
                        <Col className="m-2 p-2">
                            <Row className="d-flex align-items-center m-4">
                                <Col sm={2} className="d-flex justify-content-end">
                                    <FaBirthdayCake size={30} color="green" />
                                </Col>
                                <Col>Jakarta, 16 November 2002</Col>
                                <hr className="border-success mx-4 my-2"/>
                            </Row>
                            <Row className="d-flex align-items-center m-4">
                                <Col sm={2} className="d-flex justify-content-end">
                                    <RiPhoneFill size={30} color="green" />
                                </Col>
                                <Col>+62 878 8876 0035</Col>
                                <hr className="border-success mx-4 my-2"/>
                            </Row>
                            <Row className="d-flex align-items-center m-4">
                                <Col sm={2} className="d-flex justify-content-end">
                                    <MdEmail size={30} color="green" />
                                </Col>
                                <Col>alfarizigilang666@gmail.com</Col>
                                <hr className="border-success mx-4 my-2"/>
                            </Row>
                            <Row className="d-flex align-items-center m-4">
                                <Col sm={2} className="d-flex justify-content-end">
                                    <AiFillInstagram size={30} color="green" />
                                </Col>
                                <Col>@alfarizigilang</Col>
                                <hr className="border-success mx-4 my-2"/>
                            </Row>
                            <Row className="d-flex align-items-center mx-4 my-2">
                                <Col sm={2} className="d-flex justify-content-end">
                                    <AiFillGithub size={30} color="green" />
                                </Col>
                                <Col>github.com/GilangAlfarizi</Col>
                                <hr className="border-success mx-4 my-2"/>
                            </Row>
                        </Col>
                        <Col className="my-4">
                            <h1>My Address</h1>
                            <iframe className="mt-4" width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.18887466292273!2d110.39411933811121!3d-7.05361928623373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bfee13d614d%3A0xb5e32d15a50e439e!2sKos%20Shafa%20Putra!5e0!3m2!1sen!2sid!4v1699436090207!5m2!1sen!2sid">
                            </iframe>
                        </Col>
                    </Row>    
                </Container>
            <Footer />
        </div>
    )
}