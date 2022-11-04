import React from "react";
import {Container} from "react-bootstrap";

const Footer = () => (
    <Container className="navbar-fixed-bottom" fluid style={{backgroundColor: '#212529', color: 'white', left: '0'}}>
        <Container className="navbar-inner" style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <div>
                Hello guys! It's WORK!
            </div>
        </Container>
    </Container>
)

export default Footer