import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavBar from "../components/NavBar";

const Register = () => {
   const navigate = useNavigate();

   function handleClick(e) {
      e.preventDefault(); // Para evitar el comportamiento por defecto del formulario
      navigate("/login");
   }

   return (
      <>
         <NavBar/>
         <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Form className="p-3 border rounded" style={{ width: "100%", maxWidth: "700px"}}>
               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstname">
                     <Form.Label>Firstname</Form.Label>
                     <Form.Control type="text" placeholder="Enter firstname" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastname">
                     <Form.Label>Lastname</Form.Label>
                     <Form.Control type="text" placeholder="Enter lastname" />
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridUsername">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Enter username" />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="formGridPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                     <Form.Label>Phone</Form.Label>
                     <Form.Control type="text" placeholder="Enter phone" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
               </Row>

               <Row>
                <Col md={{ span: 6, offset: 10 }}>
                  <Button variant="primary" type="submit" onClick={handleClick}>
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