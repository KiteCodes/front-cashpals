import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavBar from "../components/NavBar/NavBar.jsx";
import { useState } from "react";
import { register } from "../services/api";

const Register = () => {
   const navigate = useNavigate();

   const [u, setU] = useState({firstName: '', lastName: '', username: '', password: '', phone: '', email: ''})

   const handleRegister = async () => {
      await register(u)
      navigate("/login");
   }

   return (
      <>
         <NavBar/>
         <Container fluid className="d-flex flex-column gap-5 justify-content-center align-items-center" style={{marginTop: "200px"}}>
            <Form className="p-3 border rounded" style={{ width: "100%", maxWidth: "700px", backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
               <Row className="mb-3 w-100">
                  <Col className="text-center">
                     <h1>Register</h1>
                  </Col>
               </Row>
               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstname">
                     <Form.Label>Firstname</Form.Label>
                     <Form.Control type="text" placeholder="Enter firstname" onChange={(e) => setU({...u, firstName: e.target.value})} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastname">
                     <Form.Label>Lastname</Form.Label>
                     <Form.Control type="text" placeholder="Enter lastname" onChange={(e) => setU({...u, lastName: e.target.value})} />
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridUsername">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Enter username" onChange={(e) => setU({...u, username: e.target.value})} />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="formGridPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" onChange={(e) => setU({...u, password: e.target.value})} />
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                     <Form.Label>Phone</Form.Label>
                     <Form.Control type="text" placeholder="Enter phone" onChange={(e) => setU({...u, phone: e.target.value})} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" onChange={(e) => setU({...u, email: e.target.value})}/>
                  </Form.Group>
               </Row>

               <Row>
                <Col md={{ span: 6, offset: 10 }}>
                  <Button variant="primary" type="button" onClick={handleRegister}>
                     Register
                  </Button>
                </Col>
               </Row>
            </Form>
         </Container>
         </>
   );
};

export default Register;