import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LateralNav from './LateralNav';
import Image from 'react-bootstrap/Image';

const LoggedNavBar = () => {
  return (
    <Navbar fixed='top' bg="primary" data-bs-theme="dark">
    <Container>
        <LateralNav />
        <Nav className="ms-auto">
        <Navbar.Brand href='/home'>
          <Image fluid src="../../public/logoProv_svg.svg"
          style={{ height: '40px', width: 'auto' }}/>
        </Navbar.Brand>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default LoggedNavBar;