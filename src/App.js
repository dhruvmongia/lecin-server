// Package Dependencies
import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap'

// Custom dependencies
import './App.css';
import img from './assets/img/about_img.jpg'
import underline from './assets/img/underline.png'
class App extends Component {

  constructor(props){
     super(props);
  }
  render() {
    return (
       <Container className="App">
          <Row style={{marginTop: "20px"}}>
             <Col lg="3"></Col>
             <Col lg="auto">
                <Nav>
                   <NavItem>
                      <NavLink href="#">
                         About
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Programs
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Initiatives
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         Events
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#">
                         News
                      </NavLink>
                   </NavItem>
                   <NavItem>
                      <NavLink href="#" className="highlighted">
                         Contact
                      </NavLink>
                   </NavItem>
                </Nav>
             </Col>
             <Col lg="3"></Col>
          </Row>
          <Row style={{marginTop: "4em"}}>
            <Col lg={{ size: 5, offset: 1 }} xs="12" sm="12" md={{ size: 5, offset: 1 }}>
                <Row>
                  <Col style={{letterSpacing: "4px"}}>
                  <img src={underline} className="stick-1"/>
                    <h1 style={{position: "relative"}}>LET'S EDUCATE</h1>
                    <img src={underline} className="stick-2" />
                    <h1 style={{ position: "relative" }}> CHILDREN IN NEED</h1>
                  </Col>
                  <Col xs={{size: 10, offset: 1}}>
                    <h2>
                      Learning today.
                    </h2>
                    <h2>
                      Leading tomorrow.
                    </h2>
                  </Col>
                  <Col xs={{ size: 5, offset: 1 }} style={{marginTop: "2em"}}>
                    <Button color="success" className="donate-btn">
                      Donate Now
                    </Button>
                  </Col>
                </Row>
             </Col>
             <Col lg={{size:4, offset: 1}} className="about_img">
                <img src={img} style={{height: "30em"}}/>
             </Col>
          </Row>
       </Container>
    );
  }
}

export default App;
