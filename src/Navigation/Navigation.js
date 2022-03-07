import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Fashion Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Login</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Created By: <a href="https://github.com/mat4539/fashion-store">Mathew Borg</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}