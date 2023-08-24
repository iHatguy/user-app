import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BrandNameNav() {
  return(
    <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src="src\assets\react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            User App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/users">User</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}