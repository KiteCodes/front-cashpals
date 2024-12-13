import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { createEvent } from '../../services/api';
import { useUserContext } from '../../providers/UserProvider';
import {useParams} from 'react-router-dom';


const EventForm = (props) => {
  const {user} = useUserContext();
  const { id } = useParams();
  const [event, setEvent] = useState({name: '', description: '', price: '', creatorId: user.id, usersIds: [], partyId: id});

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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCreation}>Create</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default EventForm;

