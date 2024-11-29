import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LateralNav from './LateralNav';

const LoggedNavBar = () => {
  return (
    <Navbar fixed='top' bg="primary" data-bs-theme="dark">
    <Container>
        <LateralNav />
        <Nav className="ms-auto">
        <Navbar.Brand href='/home'>Logo</Navbar.Brand>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default LoggedNavBar;