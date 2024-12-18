import NavBar from "../components/NavBar/NavBar.jsx"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import { useState } from "react";
import { login } from "../services/api"

const LogIn = () => {
   const navigate = useNavigate()
   const {setUser} = useUserContext()
   const [u, setU] = useState({username: '', password: ''})

   const goNavigate = (dir) =>{
     navigate(dir)
   }

   const handleLogIn = async () => {
      const response = await login(u) 
      localStorage.setItem('user', JSON.stringify(response))
      setUser(response) 
      goNavigate("/")
   }

   return(
      <>
      <NavBar/>
      <Container fluid className="d-flex flex-column gap-5 justify-content-center align-items-center" style={{marginTop: "200px"}}>      
            <Form className="p-3 border rounded" style={{ width: "100%", maxWidth: "700px", backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
               <Row className="mb-3 w-100">
                  <Col className="text-center">
                     <h1>Log in</h1>
                  </Col>
               </Row>
               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridUsername">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Enter username" onChange={(e) => setU({...u, username: e.target.value})}/>
                  </Form.Group>
               </Row>

               <Row className="mb-3">               
                  <Form.Group as={Col} controlId="formGridPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" onChange={(e) => setU({...u, password: e.target.value})}/>
                  </Form.Group>
               </Row>

               <Row>
                <Col md={{ span: 6, offset: 10 }}>
                  <Button variant="primary" type="button" onClick={handleLogIn}>
                     Log In
                  </Button>
                </Col>
               </Row>
            </Form>
         </Container>
         </>
   )
}

export default LogIn