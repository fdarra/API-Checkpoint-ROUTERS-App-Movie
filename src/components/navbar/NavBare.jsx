import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBare = () => {
  return (
    <div><Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Movies App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
   
        
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default NavBare