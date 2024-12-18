import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const FeaturesCarousel = () => {
    return (
      <Carousel variant='dark' className='mb-5 mt-5' style={{ maxWidth: '1000px', maxHeight: '600px', margin: '0 auto' }}>
        <Carousel.Item interval={1000}>
          <Image src='/balance.png' text="First slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 20}}>
            <h3>Keep track of your money</h3>
            <p>You enjoy, we track your debts.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src='/groups.png' text="Second slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 20}}>
            <h3>Create as many groups as you want</h3>
            <p>Feel free to create a group for your different social circles.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image src='/group.png' text="Third slide" style={{ width: '100%', height: 'auto' }} />
          <Carousel.Caption style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 20}}>
          <h3>Manage your groups</h3>
          <p>Make groups with friends and family and share expenses together.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
export default FeaturesCarousel;