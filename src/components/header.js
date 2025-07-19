import React from "react";
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {

    return(
        <header>
        <Navbar className="navbar-style" expand="lg">
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand href="/">
            <Image src='images/logo.webp' alt='VTU' className="logo-img" roundedCircle/>
            <h6 className="logo-text">ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ<br/>Visvesvaraya Technological University, Belagavi</h6>
            </Navbar.Brand>
            </LinkContainer>
           
            
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">  
                    <LinkContainer to='/'>
                        <Nav.Link href="#">Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/about'>
                    <Nav.Link href="#">About US</Nav.Link>
                    </LinkContainer>
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <LinkContainer to='/admission'>
                                <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/circular_&_notification'>
                                    <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/certiicate_issued'>
                                    <NavDropdown.Item href="#">Certificats Issused</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                        <LinkContainer to='/result'>
                            <NavDropdown.Item href="#">Result</NavDropdown.Item>
                        </LinkContainer>
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