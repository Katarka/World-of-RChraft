import React, {useState} from "react";
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {THEME_DARK, THEME_LIGHT, useTheme} from "../../context/ThemeContext";

import styled from "styled-components";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`

const Navibar = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand>World-of-RChar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                            <Nav.Link><Link to="/randomizer">Randomizer</Link></Nav.Link>
                            <Nav.Link><Link to="/questions">Questions</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Log in</Button>
                            <Button variant="primary" className="me-2" onClick={handleShow}>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header classButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">We'll never share your email</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="pass" placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Navibar