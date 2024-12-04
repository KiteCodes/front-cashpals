import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import {useNavigate} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const LateralNavButtons = () => {
  const navigate = useNavigate()

  const goNavigate = (dir) =>{
    navigate(dir)
  }
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col >
          <ListGroup>
            <ListGroup.Item action onClick={()=> goNavigate("/home")}>
              Home
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=> goNavigate("/groups")}>
              Groups
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=> goNavigate("/contacts")}>
              Contacts
            </ListGroup.Item>
          </ListGroup>
        </Col>  
      </Row>
    </Tab.Container>
  );
}

export default LateralNavButtons;