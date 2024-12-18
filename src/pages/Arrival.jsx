import NavBar from "../components/NavBar/NavBar.jsx";
import HorizontalScroll from "../components/HorizontalScroll/HorizontalScroll";
import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../components/Footer/Footer.jsx";


const Arrival = () => {
   return (
      <>
      <NavBar/>
      <Container fluid className="d-flex justify-content-center" style={{maxHeight: 1000, marginTop: 100}}>
         <Row className="justify-content-center">
            <Col className="d-flex flex-column align-items-center">
               <Image src="/logocashpals4.svg" fluid style={{maxWidth: 300}}/>
               <h2 style={{margin: 30}}>Tired of endless calculations?</h2>
               <p style={{maxWidth: 700}}>We get it. Splitting bills is often messy and awkward.
               From calculating who owes what to reminding others to pay up, it can take the fun out of group activities.
               That’s why we created CashPals, your hassle-free way to divide expenses and stay on top of your shared finances.</p> 
            </Col>
         </Row>
      </Container>
      <HorizontalScroll/>
      <Container className="d-flex justify-content-center" style={{maxHeight: 1000}}>
         <Row>
            <Col>
               <h2>Features</h2>
            </Col>
         </Row>
         <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
         </Row>
      </Container>
      <Footer/>
      </>      
   )
}

export default Arrival;