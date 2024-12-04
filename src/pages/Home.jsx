import { useNavigate } from "react-router-dom"
import LoggedNavBar from "../components/LoggedNavBar"
import { Container } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"

const Home = () => {
   const navigate = useNavigate()

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const listLatestGroup = () =>{
      <div>

      </div>
   }

   const listBalance = () =>{
      <>
         <div>
            te deben logic
         </div>
         <div>
            debes logic
         </div>
      </>
   }

   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex justify-content-center" style={{marginTop: "100px"}}>
            <Container fluid className="d-flex flex-column justify-content-center align-items-center" >
               <h1>Your Balance</h1>
               <Container fluid className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "800px"}}>
                  <Container className="d-flex flex-column">
                     <p className="align-self-center">Deben</p>
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
                  <p className="align-self-center">Debo</p>
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
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")}>
                        This one is a button
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Link 2
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={()=> goNavigate("/group/1")}>
                        This one is a button
                        </ListGroup.Item>
                     </ListGroup>
                  </Container>
               </Container>
            </Container>
         </Container>
      </>
      
   )
}

export default Home