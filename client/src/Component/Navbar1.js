import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function NavScrollExample() {
  
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand>CruiseHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to= "/about">
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to= "/contact">
            <Nav.Link>
              Contact Us
            </Nav.Link>
            </LinkContainer>
            
            
            
          </Nav>
          <Nav>
          <LinkContainer to= "/signup"><Nav.Link>SignUp</Nav.Link></LinkContainer>
          <LinkContainer to= "/login"><Nav.Link>Login</Nav.Link></LinkContainer>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;