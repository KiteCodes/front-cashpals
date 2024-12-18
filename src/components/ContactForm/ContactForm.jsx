import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import { getContacts, getUsers, saveContacts} from '../../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from '../../providers/UserProvider';

const ContactForm = (props) => {
  const {user} = useUserContext()
  const [c, setC] = useState([])
  const [contactsList, setContactsList] = useState([])
  const [users, setUsers] = useState()

  const setContacts = (id, e) => {
    e.preventDefault();
    const newList = contactsList.some((contact) => contact === id) ? contactsList.filter((contact) => contact !== id) : [...contactsList, id]
    setContactsList(newList)
  }

  const listUsers = () => users?.map((data)=>{
    return c.some((contact) => contact === data.username) || c.length > 0 ? <></> : 
    <ListGroup.Item key={data.username} action onClick={(e) => setContacts(data.username, e)} >
      {data.username} 
    </ListGroup.Item>
  })

  const handleSaveContacts = async () =>{
    console.log(contactsList)
      //await saveContacts(user.id, contactsList)
  }

  useEffect(()=>{
    getUsers().then(data =>{
      setUsers(data)
    })
    getContacts(user.id).then(data =>{
      setC(data)
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

