//import logo from '';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="navBar" variant="light">
      <Container className="justify-content-center">
        <Nav className="mr-auto">
          <Link to="/">
            Home
          </Link>
          <Link to="rsvp">
            RSVP
          </Link>
          <Link to="weddingdetails">
            Wedding Details
          </Link>
          <Link to="events">
            Events
          </Link>
          <Link to="registry">
            Registry
          </Link>
          <Link to="faqs">
            FAQs
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
