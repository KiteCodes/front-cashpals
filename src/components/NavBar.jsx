import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar fixed='top' bg="primary" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Nav className="ms-auto">
        <Nav.Link href='/login'>Login</Nav.Link>
        <Nav.Link href='/register'>Register</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default NavBar;