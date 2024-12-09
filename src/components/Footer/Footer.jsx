import { Col, Row, Stack, Container, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid>
        <Row className='bg-primary'>
            <Col>
                <Stack>
                    <Image src="/logoProv_svg.svg" style={{ height: '40px', width: 'auto' }}/>
                    <p className='text-white'>Prov</p>
                    <p className='text-white'>© 2021</p>
                </Stack>
            </Col>
            <Col>
                <Stack>
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