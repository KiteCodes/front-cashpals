import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import { getUsers, saveContacts} from '../../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from '../../providers/UserProvider';


const ContactForm = (props) => {
  const {user} = useUserContext()

  const [contactsList, setContactsList] = useState([])
  const [users, setUsers] = useState()

  const setContacts = (id, e) => {
    e.preventDefault();
    console.log(contactsList)
    contactsList.push(id)
    setContactsList(contactsList)
  }

  const listUsers = () => users?.map((data)=>{
    return (
      <ListGroup.Item key={data.username} action onClick={(e)=>setContacts(data.id, e)} >
        {data.username} 
      </ListGroup.Item>
    )
  })

  const handleSaveContacts = async () =>{
    console.log(contactsList)
      //await saveContacts(user.id, contactsList)
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
        <Button onClick={handleSaveContacts}>Add</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
export default ContactForm;

