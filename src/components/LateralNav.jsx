import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LateralNavButtons from './LateralNavButtons';
import Image from 'react-bootstrap/Image';

const LateralNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <Image fluid src="/white-menu.png"
          style={{ height: '40px', width: 'auto' }}/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column justify-content-between'>
          <LateralNavButtons/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LateralNav;