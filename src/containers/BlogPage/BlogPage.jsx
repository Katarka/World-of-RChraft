import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/img/logo-wow.jpg";

const Blog = () => (
    <>
        <h1>Блог великолепной, Шонни!</h1>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={logo} height={300} alt='#'/>
                </Col>
                <Col md={5}>
                    <h2>Hello guys</h2>
                    <p>
                        Text more...
                    </p>
                </Col>
            </Row>
        </Container>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <h2>Hello guys</h2>
                    <p>
                        Text more...
                    </p>
                </Col>
                <Col md={5}>
                    <img src={logo} height={300} alt='#'/>
                </Col>
            </Row>
        </Container>
    </>
)

export default Blog