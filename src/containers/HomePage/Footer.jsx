import React from "react";
import {Container} from "react-bootstrap";

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color: 'white', left: '0', bottom: '0'}}>
        <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <p>
                Hello guys! It's WORK!
            </p>
        </Container>
    </Container>
)

export default Footer