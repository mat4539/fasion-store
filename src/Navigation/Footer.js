import React from "react";
import {Container, Navbar} from "react-bootstrap";

export const Footer = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Text>
                    Developed by <a href="https://www.borgdevelopment.ca">Borg Development</a>, corp. All Rights Reserved &copy; {new Date().getFullYear()} | <a href="/">Terms of Use</a> | <a href="/">Affiliations</a>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}