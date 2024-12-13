import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import { getUsers, saveContacts} from '../../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from '../../providers/UserProvider';


const AddUserForm = (props) => {
  const {user} = useUserContext()

  const [contactsList, setContactsList] = useState([])
  const [users, setUsers] = useState()

  const listUsers = () => users?.map((data)=>{
    return (
      <ListGroup.Item key={data.username} action onClick={contactsList.push(data.id)} >
        {data.username} 
      </ListGroup.Item>
    )
  })

  const handleSaveContacts = async () =>{
      await saveContacts(user.id, contactsList)
  }

  useEffect(()=>{
    getUsers().then(data =>{
      setUsers(data)
    })
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
            <Row className="mb-3">
              <ListGroup>
                {listUsers()}
              </ListGroup>
            </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default AddUserForm;

