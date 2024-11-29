import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const LateralNavButtons = () => {

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col >
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
        </Col>  
      </Row>
    </Tab.Container>
  );
}

export default LateralNavButtons;