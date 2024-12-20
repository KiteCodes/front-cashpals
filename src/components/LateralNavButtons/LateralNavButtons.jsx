import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import {useNavigate} from 'react-router-dom';

const LateralNavButtons = () => {
  const navigate = useNavigate()

  const goNavigate = (dir) =>{
    navigate(dir)
  }

  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/arrival')
  }
  
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <ListGroup>
        <ListGroup.Item action onClick={() => goNavigate("/")}>
          Home
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => goNavigate("/groups")}>
          Groups
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => goNavigate("/contacts")}>
          Contacts
        </ListGroup.Item>
        <ListGroup.Item action onClick={() => goNavigate("/profile")}>
          Settings
        </ListGroup.Item>
      </ListGroup>

      <Button variant="primary" 
      onClick={handleLogOut}
      style={{marginBottom: '20px'}}>
        Logout
      </Button>
    </Tab.Container>
  );
}

export default LateralNavButtons;