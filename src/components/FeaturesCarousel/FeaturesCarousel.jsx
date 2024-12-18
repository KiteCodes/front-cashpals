import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const FeaturesCarousel = () => {
    return (
      <Carousel className='mt-5' style={{ maxWidth: '1000px', maxHeight: '600px', margin: '0 auto' }}>
        <Carousel.Item interval={1000}>
          <Image src='/group.png' text="First slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src='/group.png' text="Second slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src='/group.png' text="Third slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
export default FeaturesCarousel;