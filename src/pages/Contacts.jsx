import {useNavigate} from 'react-router-dom';
import LoggedNavBar from '../components/LoggedNavBar';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState} from 'react';
import ContactForm from '../components/ContactForm';
const Contacts = () => {
   const navigate = useNavigate();
   const [modalShow, setModalShow] = useState(false);

   const goNavigate = (dir) =>{
   navigate(dir)
   }

   const listContacts = () => {

   }

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >
                  
               <h1>Your Balance</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container className="d-flex flex-column gap-3">
                  <Container className="d-flex gap-2">
                     <h2 className=" align-self-center mb-0">Contacts list</h2>
                     <Button className='ms-auto' variant="primary" onClick={() => setModalShow(true)}>Add contact</Button>
                  </Container>
                     
                     <ListGroup >
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")} style={{color: "red"}}>
                        This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                     </ListGroup>

                  </Container>
               </Container>
            </Container>
         </Container>
         <ContactForm show={modalShow} onHide={() => setModalShow(false)}/>
      </>
   )
}

export default Contacts