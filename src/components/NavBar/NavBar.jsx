import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const NavBar = () => {
  return (
    <Navbar fixed='top' bg="primary" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href='/'>
        <Image fluid src="/logocashpals.svg"
        style={{ height: '40px', width: 'auto' }}/>
        </Navbar.Brand>
        <Nav className="ms-auto">
        <Nav.Link href='/login'>Login</Nav.Link>
        <Nav.Link href='/register'>Register</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default NavBar;