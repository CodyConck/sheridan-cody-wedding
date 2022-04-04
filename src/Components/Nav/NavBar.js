import { Container, Nav, Navbar } from 'react-bootstrap'
//import logo from '';
import React from 'react';

function NavBar(props) {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    {/* below is box image from navbar bootstrap */}
                    {/* <img
                        alt=""
                        src="https://media-exp1.licdn.com/dms/image/C5603AQForKoF0a0EnQ/profile-displayphoto-shrink_800_800/0/1585159973912?e=1635984000&v=beta&t=W4byoP7pZ7XCguLwyqcRoAM4KlPNQQBVbfd_c3XV_BM"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '} */}
      </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.handlePageChange('Home')} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('RSVP')} href="#home">RSVP</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Wedding Details')} href="#home">Wedding Details</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Events')} href="#home">Events</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Registry')} href="#home">Registry</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('FAQs')} href="#home">FAQs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar