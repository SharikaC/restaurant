import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src="data:image/png;base64,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"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Taco Bell
          </Navbar.Brand>
        </Container>
      </Navbar>
        
    </>
  )
}

export default Header