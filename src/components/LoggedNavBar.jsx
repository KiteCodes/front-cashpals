import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LateralNav from './LateralNav';
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom';

const LoggedNavBar = () => {
  const navigate = useNavigate()

  const goNavigate = (dir) =>{
    navigate(dir)
  }

  return (
    <Navbar fixed='top' bg="primary" data-bs-theme="dark">
    <Container>
        <LateralNav />
        <Nav className="ms-auto">
        <Navbar.Brand style={{ cursor: 'pointer'}} onClick={() => goNavigate("/")}>
          <Image fluid src="/logoProv_svg.svg"
          style={{ height: '40px', width: 'auto' }}/>
        </Navbar.Brand>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default LoggedNavBar;