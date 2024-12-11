import { Col, Row, Stack, Container, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid>
        <Row className='bg-primary'>
            <Col>
                <Stack className='align-items-center gap-2 m-3'>
                    <Image src="/logoProv_svg.svg" style={{ height: '40px', width: 'auto' }}/>
                    <p className='text-white'>Help</p>
                    <p className='text-white'>© 2024 CashPals</p>
                </Stack>
            </Col>
            <Col>
                <Stack className='align-items-center gap-2 m-3'>
                    <p className='text-white'>About</p>
                    <p className='text-white'>Contact</p>
                    <p className='text-white'>Terms of Service</p>
                </Stack>
            </Col>

        </Row>
    </Container>
  );
}

export default Footer;