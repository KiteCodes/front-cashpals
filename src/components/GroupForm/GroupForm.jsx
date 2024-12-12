import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { createGroup } from '../../services/api';
import { useUserContext } from '../../providers/UserProvider';


const GroupForm = (props) => {
  const [group, setGroup] = useState({name: '', description: '', ownerId: ''})
  const {user} = useUserContext()
  const handleCreation = async () => {
    setGroup({...group, ownerId: user.id})
    await createGroup(group)
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
          New Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Group name</Form.Label>
                    <Form.Control type="text" placeholder="Enter group name" onChange={(e) => setGroup({...group, name: e.target.value})}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGroupName">
                    <Form.Label>Group description</Form.Label>
                    <Form.Control type="text" placeholder="Enter group description" onChange={(e) => setGroup({...group, description: e.target.value})} />
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
export default GroupForm;

