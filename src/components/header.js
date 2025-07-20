import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-style" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src="images/logo.webp"
                alt="VTU"
                className="logo-img"
                roundedCircle
              />
              <h6 className="logo-text">
                ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾನಿಲಯ
                <br />
                Visvesvaraya Technological University, Belagavi
              </h6>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <LinkContainer to="/admission">
                  <NavDropdown.Item>Admission</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/circular">
                  <NavDropdown.Item>Circular</NavDropdown.Item>
                </LinkContainer>

                {/* Nested Dropdown for Certificates */}
                <div className="nested-dropdown">
                  <NavDropdown.Item>Certificates Issued ▸</NavDropdown.Item>
                  <div className="submenu">
                    <a
                      href="/pdf/bonafied.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      Bonafide Student
                    </a>
                    <LinkContainer to="/courses">
                      <NavDropdown.Item>
                        Eligibility for UG and PG Courses
                      </NavDropdown.Item>
                    </LinkContainer>
                    <a
                      href="/pdf/readmission.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      Readmission
                    </a>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown title="Examination" id="exam-dropdown">
                <NavDropdown.Item href="#">
                  Examination Guidelines
                </NavDropdown.Item>
                <NavDropdown.Item href="https://prexam.vtu.ac.in/">
                  Examination Application
                </NavDropdown.Item>
                <LinkContainer to="/result_login">
                  <NavDropdown.Item>Result</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="VTU Department" id="dept-dropdown">
                <NavDropdown.Item href="pdf/civil.pdf">Civil Engineering</NavDropdown.Item>
                <NavDropdown.Item href="pdf/CSE-1.pdf">Computer Science Engineering</NavDropdown.Item>
                <NavDropdown.Item href="pdf/EEE-1.pdf">Electrical and Electronics Engineering</NavDropdown.Item>
                <NavDropdown.Item href="pdf/mech.pdf">Mechanical Engineering</NavDropdown.Item>
                <NavDropdown.Item href="pdf/aiml.pdf">Artificial Intelligence and Machine Learning</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Staff Login" id="staff-dropdown">
                <NavDropdown.Item>Login as Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* <Image
                src="images/Karnataka-rightlogo.png"
                alt="VTU"
                className="logo-img"
                roundedCircle
              /> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
