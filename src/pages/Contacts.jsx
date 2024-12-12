import {useNavigate} from 'react-router-dom';
import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useState} from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { getContacts, getUsers, saveContacts } from '../services/api';
import { useUserContext } from '../providers/UserProvider';

const Contacts = () => {
   const {user} = useUserContext()
   const navigate = useNavigate()
   const [modalShow, setModalShow] = useState(false)
   const [contacts, setContacts] = useState()

   const [contactsList, setContactsList] = useState([])
   const [users, setUsers] = useState()

   const goNavigate = (dir) =>{
      navigate(dir)
   }

   const listUsers = () => users?.map((data)=>{
      return (
      <ListGroup.Item key={data.username} action onClick={contactsList.push(data.id)} >
         {data.username} 
      </ListGroup.Item>)
   })

   const listContacts = () => contacts?.map((data)=>{
      return (
      <ListGroup.Item key={data.id}>
         {data.name} 
      </ListGroup.Item>)
   })

   useEffect(()=>{
      getContacts(user.id).then(data =>{
         setContacts(data)
      })
      getUsers().then(data =>{
         setUsers(data)
      })
   }, []);

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >
                  
               <h1>Contacts</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container className="d-flex flex-column gap-3">
                  <Container className="d-flex gap-2">
                     <h2 className=" align-self-center mb-0">Contacts list</h2>
                     <Button className='ms-auto' variant="primary" onClick={() => setModalShow(true)}>Add contact</Button>
                  </Container>
                     <ListGroup >
                        {listUsers()}
                     </ListGroup>
                  </Container>
               </Container>
            </Container>
         </Container>
         <ContactForm show={modalShow} onHide={() => setModalShow(false)}/>


         {/* <button onClick={()=>localStorage.clear()}>log out</button> */}
      </>
   )
}

export default Contacts