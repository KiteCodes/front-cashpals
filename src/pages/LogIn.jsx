import NavBar from "../components/NavBar"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/home");
   }

   return(
      <>
      <NavBar/>
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Form className="p-3 border rounded" style={{ width: "100%", maxWidth: "700px"}}>
               <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridUsername">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" placeholder="Enter username" />
                  </Form.Group>
               </Row>

               <Row className="mb-3">               
                  <Form.Group as={Col} controlId="formGridPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
               </Row>

               <Row>
                <Col md={{ span: 6, offset: 10 }}>
                  <Button variant="primary" type="submit" onClick={handleClick}>
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