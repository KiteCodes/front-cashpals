import LoggedNavBar from '../components/LoggedNavBar/LoggedNavBar.jsx';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

const Profile = () => {
   return (
      <>
         <LoggedNavBar/>
         <Container fluid className="d-flex flex-column gap-4 justify-content-center align-items-center" style={{marginTop: "200px"}}>
            <Form className="p-3 border rounded" style={{ width: "100%", maxWidth: "700px", backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
               <Row className="mb-3 w-100">
                  <Col className="text-center">
                     <h1>Profile</h1>
                  </Col>
               </Row>
               <ListGroup variant='flush'>
                  <Row style={{padding: "12px"}}>
                     <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="pepe" />
                     </Form.Group>
                     <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="pepito" />
                     </Form.Group>
                  </Row>
                  <ListGroup.Item style={{padding: "0px 16px"}}>
                  </ListGroup.Item>
                  <Row style={{padding: "12px"}}>
                     <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" placeholder="Jordi" />
                     </Form.Group>
                     <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="García" />
                     </Form.Group>
                  </Row>
                  <ListGroup.Item style={{padding: "0px 16px"}}>
                  </ListGroup.Item>
                  <Row style={{padding: "12px"}}>
                     <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="*****" />
                     </Form.Group>
                     <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="*****" />
                     </Form.Group>
                  </Row>
                  <ListGroup.Item style={{padding: "0px 16px"}}>
                  </ListGroup.Item>
                  <Row style={{padding: "12px"}}>
                     <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="Jordi" style={{maxWidth: "310px"}}/>
                     </Form.Group>
                     <Col className='d-flex justify-content-end align-items-center gap-3 mt-4'>
                        <Button variant="outline-danger" type="button" >
                           Delete Account
                        </Button>
                        <Button variant="primary" type="button">
                           Update
                        </Button>
                     </Col>
                  </Row>
               </ListGroup>
            </Form>
         </Container>
      </>
   )
}

export default Profile