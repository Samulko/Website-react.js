import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import hypar from './Images/Hypar001.JPG';
import Info from './components/Info';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar className="fs-1 nav-fill w-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-fill w-100">
              <Nav.Link href="/">WORK</Nav.Link>
              <Nav.Link href="/info">INFO</Nav.Link>
              <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid>
          <Row>
            <Col>
              <div className="main-content">
                <Container fluid>
                  <Row>
                    <Col md={4} className="d-flex justify-content-center">
                      <img src={hypar} alt="project 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                      <img src={hypar} alt="project 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    </Col>
                    <Col md={4} className="d-flex justify-content-center">
                      <img src={hypar} alt="project 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
