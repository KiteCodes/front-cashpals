import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from 'react';
import { getContacts, getUsers, saveContacts} from '../../services/api';
import ListGroup from 'react-bootstrap/ListGroup';
import {useUserContext} from '../../providers/UserProvider';
import InputGroup from 'react-bootstrap/InputGroup';

const ContactForm = (props) => {
  const {user} = useUserContext()
  const [c, setC] = useState([])
  const [u, setU] = useState({id: user.id, contactIDs: []})
  const [contactsList, setContactsList] = useState([])
  const [users, setUsers] = useState()

  const setContacts = (id) => {
    const newList = contactsList.some((contact) => contact === id) ? contactsList.filter((contact) => contact !== id) : [...contactsList, id]
    setContactsList(newList)
  }

  const listUsers = () => users?.map((data)=>{
    if(data.id !== user.id) return c.some((contact) => contact === data.username) || c.length > 0 ? <></> : 
    <ListGroup.Item key={data.id} className='d-flex justify-content-between align-items-center' >
      <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          onChange={() => setContacts(data.id)}
          checked={contactsList.includes(data.id)}
        />
          <p style={{margin: 0}}>{data.username}</p>
    </ListGroup.Item>
  })

  const handleSaveContacts = async () =>{
    u.contactIDs = contactsList
    await saveContacts(u)
    props.updateUsers()
    props.onHide()
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

