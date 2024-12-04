import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import {useNavigate} from 'react-router-dom';

const LateralNavButtons = () => {
  const navigate = useNavigate()

  const goNavigate = (dir) =>{
    navigate(dir)
  }
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <ListGroup>
        <ListGroup.Item action href="/home">
          Home
        </ListGroup.Item>
        <ListGroup.Item action href="/groups">
          Groups
        </ListGroup.Item>
        <ListGroup.Item action href="/contacts">
          Contacts
        </ListGroup.Item>
      </ListGroup>

      <Button variant="primary" 
      onClick={()=> goNavigate("/profile")}
      style={{marginBottom: '20px'}}>
        Profile Settings
      </Button>
    </Tab.Container>
  );
}

export default LateralNavButtons;