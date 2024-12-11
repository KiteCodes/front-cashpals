import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar.jsx';
import {Container} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Group = () => {

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center gap-3" >
                  
               <h1>Group name</h1>
               <Container fluid className="d-flex justify-content-center p-3 border rounded"  style={{ width: "100%", maxWidth: "800px", backgroundColor: "white"}}>
                  <Container className="d-flex flex-column gap-3">
                  <Container fluid className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px"}}>
                  <Container className="d-flex flex-column">
                     <h3 className="align-self-center">Users</h3>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")} style={{color: "red"}}>
                        This one is a button
                        </ListGroup.Item>
                     </ListGroup>
                  </Container>
                  <Container className="d-flex flex-column">
                     <h3 className="align-self-center">Events</h3>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")} style={{color: "red"}}>
                        This one is a button
                        </ListGroup.Item>
                     </ListGroup>
                  </Container>
                  <Container className="d-flex flex-column">
                  <h3 className="align-self-center">Balance</h3>
                     {/*Esto lo hará iterando sobre las transacciones del usuario logueado*/}
                     <ListGroup>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")}>
                        This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
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
            </Container>
         </Container>

         {/* <button onClick={()=>localStorage.clear()}>log out</button> */}
      </>
   )
}  

export default Group