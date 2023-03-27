import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { getuser } from "../api/user";
import { LoginDetails } from "../contex/logindetails";

function NavScrollExample() {
  const { loginuser, setloginuser } = useContext(LoginDetails);

  const getData = async (id) => {
    const data = await getuser(id);
    setloginuser(data?.data);
    console.log(loginuser);
  };

  useEffect(() => {
    let id = sessionStorage.getItem("user");
    if (id) getData(id);
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    console.log(loginuser);
  };

  return (
    <Navbar bg="dark" expand="lg" style={{ marginBottom: "4px" }}>
      <Container fluid>
        <Navbar.Brand>
          <span
            style={{ color: "white", fontFamily: "Apple Chancery, cursive" }}
          >
            CRUISEHUB
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>
                <span style={{ color: "white" }}>Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                <span style={{ color: "white" }}>About Us</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>
                <span style={{ color: "white" }}>FeedBack Time</span>
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/feedback">
              <Nav.Link>
                <span style={{ color: "white" }}>What's People Opinion</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          {loginuser ? (
            <Nav>
              <h3 style={{ color: "white" }}>WELCOME {loginuser.name}</h3>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/signup">
                <Nav.Link>
                  <span style={{ color: "white" }}>Sign Up</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <span style={{ color: "white" }}>Log In</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          )}

          <LinkContainer to="/logout">
            <Nav.Link>
              <span style={{ color: "white" }}>LogOut</span>
            </Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
