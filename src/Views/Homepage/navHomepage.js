import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import logo from '../../assets/Logo.png'
export default function NavHomepage(){
    return(
        <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home"><img
        alt=""
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    {/* <Navbar.Brand>
       FOOD SCARCITY ESTIMATION AND SOLUTION
    </Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="#home" disabled style={{fontSize:'20px'}}>HomePage</Nav.Link>
        <Nav.Link href="#link" style={{fontSize:'20px'}}>Search Location</Nav.Link>
        <NavDropdown title="Estimate" id="basic-nav-dropdown" style={{fontSize:'20px'}}>
            <NavDropdown.Item href="#action/3.1">Food Consumption</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Food Production</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Population Growth</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Food Scarcity</NavDropdown.Item>
        </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}