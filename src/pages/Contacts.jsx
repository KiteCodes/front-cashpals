import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useState} from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { getContacts, } from '../services/api';
import { useUserContext } from '../providers/UserProvider';

const Contacts = () => {
   const {user} = useUserContext()
   const [modalShow, setModalShow] = useState(false)
   const [contacts, setContacts] = useState()

   const listContacts = () => contacts?.map((data)=>{
      return (
      <ListGroup.Item key={data.id}>
         {data.username} 
      </ListGroup.Item>)
   })

   useEffect(()=>{
      updateUsers()
   }, []);

   const updateUsers = () => {
      getContacts(user.id).then(data =>{
         setContacts(data)
      })
      }

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "200px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >
               <Container fluid className="d-flex flex-column justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                  <Row className="mb-3 w-100">
                     <Col className="text-center">
                        <h1>Contacts</h1>
                     </Col>
                  </Row>
                  <Container className="d-flex flex-column gap-3">
                  <Container className="d-flex gap-2">
                     <h2 className=" align-self-center mb-0">Contacts list</h2>
                     <Button className='ms-auto' variant="primary" onClick={() => setModalShow(true)}>Add contact</Button>
                  </Container>
                     <ListGroup >
                        {listContacts()}
                     </ListGroup>
                  </Container>
               </Container>
            </Container>
         </Container>
         <ContactForm show={modalShow} updateUsers={updateUsers} onHide={() => setModalShow(false)}/>
      </>
   )
}

export default Contacts