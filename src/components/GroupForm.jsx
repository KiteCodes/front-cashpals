import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';


const GroupForm = (props) => {
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
                    <Form.Control type="text" placeholder="Enter group name" />
                </Form.Group>
            </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Create</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default GroupForm;

