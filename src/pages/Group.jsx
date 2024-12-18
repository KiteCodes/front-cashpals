import { useEffect, useState } from 'react';
import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar.jsx';
import {Container, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate, useParams} from 'react-router-dom';
import { getGroupById, getUsersByGroupId, getEventsByGroupId } from '../services/api.js';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';
import { useUserContext } from '../providers/UserProvider.jsx';
import AddUserForm from '../components/AddUserForm/AddUserForm.jsx';
import EventForm from '../components/EventForm/EventForm.jsx';

const Group = () => {
   const { user } = useUserContext();
   const { id } = useParams();
   const [group, setGroup] = useState();
   const navigate = useNavigate();
   const [users, setUsers] = useState();
   const [events, setEvents] = useState();
   const [modalShowUser, setModalShowUser] = useState(false);
   const [modalShowEvent, setModalShowEvent] = useState(false);
   
   const goNavigate = (dir) =>{
      navigate(dir)
   }

   useEffect(() => {
      updateGroups();
      updateUsers();
      updateEvents();
   }, []);

   const updateGroups = () => {
      getGroupById(id).then((data) => {
         setGroup(data)
      })
   }
   const updateUsers = () => {
      getUsersByGroupId(id).then(data => {
         setUsers(data)
      })
   }

   const updateEvents = () => {
      getEventsByGroupId(id).then(data => {
         setEvents(data)
      })
   }  

   const showGroup = () => {
      if(group){
         return (
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >      
               <h1>{group.name}</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container className="d-flex flex-column gap-3">
                     <Container className='d-flex gap-2 align-items-center'>
                        <h4 style={{margin: 0}}>{group.description}</h4>
                        <Button className='ms-auto' variant="primary" onClick={() => setModalShowUser(true)}>Add User</Button>
                        <Button variant="primary" onClick={() => setModalShowEvent(true)}>Add Event</Button>
                     </Container>
                  <Container fluid className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px"}}>
                  <Container className="d-flex flex-column">
                     <h3 className="align-self-center">Users</h3>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        {users?.map((user) => {
                           return (
                              <ListGroup.Item key={user.id}>
                                 {user.username}
                              </ListGroup.Item>
                           )
                        })}
                     </ListGroup>
                  </Container>
                  <Container className="d-flex flex-column">
                     <h3 className="align-self-center">Events</h3>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        {events?.map((event) => {
                           return (
                              <ListGroup.Item key={event.id}>
                                 {event.name}
                              </ListGroup.Item>
                           )
                        })}
                     </ListGroup>
                  </Container>
               </Container>
                  </Container>
               </Container>
            </Container>
         )
      }else{
         return <LoadingSpinner />
      }
   }

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
               {showGroup()}
         </Container>
         <EventForm show={modalShowEvent} updateEvents={updateEvents} onHide={() => setModalShowEvent(false)} users={users} setusers={setUsers} updateUsers={updateUsers}/>
         <AddUserForm show={modalShowUser} updateUsers={updateUsers} onHide={() => setModalShowUser(false)}/>
      </>
   )
}  

export default Group