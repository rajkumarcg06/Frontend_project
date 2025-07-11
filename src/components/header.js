import React from "react";
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap'

const Header = () => {

    return(
        <header>
        <Navbar className="navbar-style" expand="lg">
            <Container>
           
            <Navbar.Brand href="#home">
            <Image src='images/logo.webp' alt='VTU' className="logo-img" roundedCircle/>
            <h6 className="logo-text">Visvesvaraya Technological University, Belagavi</h6>
            </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">  
                    <Nav.Link href="#">Home</Nav.Link>

                    <Nav.Link href="#">About US</Nav.Link>
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                        <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
                        <NavDropdown.Item href="#">Certificats Issused</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                        <NavDropdown.Item href="#">Result</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="VTU Department" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                        <NavDropdown.Item href="#">CSE</NavDropdown.Item>
                        <NavDropdown.Item href="#">ECE</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header