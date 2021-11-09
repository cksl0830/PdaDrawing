import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

function Navigation(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="#FFFFFF" variant="light">
            <Container fluid>
                <Navbar.Brand href="/"><img src="./img/logo.png" width="150" alt="Line Drawing logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav_font" style={{color:"#000000"}} href="/album">Album</Nav.Link>
                        <Nav.Link className="nav_font" style={{color:"#000000"}} href="/transfer">Line Drawing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav_font" style={{color:"#FFB085"}} href="#SignIn">Sign In</Nav.Link>
                        <Nav.Link className="nav_font" style={{color:"#FF865E"}} href="#SignUp">Sign Up</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
 );
}

 export default Navigation;