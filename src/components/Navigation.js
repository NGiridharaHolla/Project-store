import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'

export const Navigation = () => {
    return (
      <section className="nav-bar">
      <Navbar className="navbar" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Logo
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className="nav-body">
          <Nav className="nav-item navbar-nav">
            <Nav.Link href="#Home">HOME</Nav.Link>
             <Nav.Link href="#Project">PROJECTS</Nav.Link>
            <Nav.Link href="#About">ABOUT US</Nav.Link>
             <Nav.Link href="#Faq">FAQ</Nav.Link>
            <Nav.Link href="#Contact">CONTATC US</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
      </section>
    )
}
