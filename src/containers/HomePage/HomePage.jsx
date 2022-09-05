import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import Slider from "../../components/HomePage/Slider/Slider";
import Jumbotron from "../../components/HomePage/Jumbotron";

import classic from "../../assets/img/classic.jpg"
import bc from "../../assets/img/bc.jpg"
import lc from "../../assets/img/lc.jpg"
import logo from "../../assets/img/logo-wow.jpg"

const Home = () => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={classic}/>
                        <Card.Body>
                            <Card.Title>Classic</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={bc}/>
                        <Card.Body>
                            <Card.Title>Burning Crusade</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={lc}/>
                        <Card.Body>
                            <Card.Title>Wrath of rhe Lich King</Card.Title>
                            <Card.Text>More text...</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={logo} height={200} alt='#'/>
                </Col>
                <Col md={5}>
                    <h2>Hello guys</h2>
                    <p>
                        Text more...
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)

export default Home