import React from 'react'
import {Nav,Navbar,NavDropDown} from 'react-bootstrap'

export const Navigation = () => {
    return (
      <section className="nav-bar">
      <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className="nav-item">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">PROJECTS</Nav.Link>
            <Nav.Link href="#">CONTATC US</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
      </section>
    )
}
