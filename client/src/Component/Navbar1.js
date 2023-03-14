import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function NavScrollExample() {
  
  return (
    <Navbar bg="dark"  expand="lg" style={{marginBottom:'4px'}}>
      <Container fluid>
        <Navbar.Brand><span style={{color:'white' ,fontFamily:'Apple Chancery, cursive'}}>CRUISEHUB</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <LinkContainer to="/">
            <Nav.Link><span style={{color:'white'}}>Home</span></Nav.Link>
            </LinkContainer>
            <LinkContainer to= "/about">
            <Nav.Link><span style={{color:'white'}}>About Us</span></Nav.Link>
            </LinkContainer>
            <LinkContainer to= "/contact">
            <Nav.Link>
            <span style={{color:'white'}}>FeedBack Time</span>
            </Nav.Link>
            </LinkContainer>

            <LinkContainer to= "/feedback">
            <Nav.Link>
            <span style={{color:'white'}}>What's People Opinion</span>
            </Nav.Link>
            </LinkContainer>
            
            
            
          </Nav>
          <Nav>
          <LinkContainer to= "/signup"><Nav.Link><span style={{color:'white'}}>Sign Up</span></Nav.Link></LinkContainer>
          <LinkContainer to= "/login"><Nav.Link><span style={{color:'white'}}>Log In</span></Nav.Link></LinkContainer>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;