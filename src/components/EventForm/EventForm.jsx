import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';
import { createEvent } from '../../services/api';
import { useUserContext } from '../../providers/UserProvider';
import {useParams} from 'react-router-dom';
import {getUsersByGroupId} from '../../services/api.js';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';


const EventForm = (props) => {
  const {user} = useUserContext();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [event, setEvent] = useState({name: '', description: '', price: '', creatorId: user.id, usersIds: [], partyId: id});


  useEffect(()=>{
    getUsersByGroupId(id).then(data =>{
      setUsers(data)
    })
  }, []);

  const handleCheckboxChange = (userId) => {
    if(event.usersIds.includes(userId)){
      setEvent({...event, usersIds: event.usersIds.filter(id => id !== userId)})
    } else {
      setEvent({...event, usersIds: [...event.usersIds, userId]})
    }
    console.log(event)
  }

  const listUsers = () => users?.map((data) => { 
      return (
        <ListGroup.Item key={data.id} className='d-flex justify-content-between align-items-center'>
          <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          onChange={() => handleCheckboxChange(data.id)}
          checked={event.usersIds.includes(data.id)}
        />
          <p style={{margin: 0}}>{data.username}</p>
        </ListGroup.Item>
      ) 
  });

  const handleCreation = async () => {
    await createEvent(event);
    props.updateEvents();
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="text" placeholder="Enter event name" onChange={(e) => setEvent({...event, name: e.target.value})}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Event description</Form.Label>
                    <Form.Control type="text" placeholder="Enter event description" onChange={(e) => setEvent({...event, description: e.target.value})} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Event price</Form.Label>
                    <Form.Control type="number" step={0.01} placeholder="Enter event name" onChange={(e) => setEvent({...event, price: e.target.value})}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Participants</Form.Label>
                    <ListGroup>
                      {listUsers()}
                    </ListGroup>
                </Form.Group>
            </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCreation}>Create</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default EventForm;

