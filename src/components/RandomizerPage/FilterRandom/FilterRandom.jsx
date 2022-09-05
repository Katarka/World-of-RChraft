import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";

const FilterRandom = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <div>
                <Button variant="primary" className="me-2" onClick={handleShow}>Filter</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <div class="modal-header">
                    <h5 class="modal-title">Выбери что подходит</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                </div>
                <Modal.Body>
                    <Form>
                        <Form.Group className="d-grid gap-2 col-6 mx-auto">
                            <Form.Label>Select Faction</Form.Label>
                        </Form.Group>
                        <Form.Group className="d-grid gap-2 col-6 mx-auto">
                            <Button className="btn btn-primary btn-sm">Alliance</Button>
                            <Button className="btn btn-primary btn-sm disabled">Horde</Button>
                        </Form.Group>
                        <Form.Group className="d-grid gap-2 col-6 mx-auto">
                            <Form.Label>Select Race</Form.Label>
                        </Form.Group>
                        <Form.Group className="d-grid gap-2 col-6 mx-auto">
                            <Button className="btn btn-primary btn-sm">Dwarf</Button>
                            <Button className="btn btn-primary btn-sm">Gnome</Button>
                            <Button className="btn btn-primary btn-sm">Human</Button>
                            <Button className="btn btn-primary btn-sm">Night Elf</Button>
                            <Button className="btn btn-primary btn-sm">Orc</Button>
                            <Button className="btn btn-primary btn-sm">Troll</Button>
                            <Button className="btn btn-primary btn-sm">Tauren</Button>
                            <Button className="btn btn-primary btn-sm">Undead</Button>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="primary" className="me-2">Select</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FilterRandom