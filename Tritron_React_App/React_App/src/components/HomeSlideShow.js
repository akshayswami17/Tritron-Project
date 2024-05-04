import { Carousel } from 'react-bootstrap';
import image1 from './Images/online1.jpg';
import image2 from './Images/online2.jpg';
import image3 from './Images/online3.jpg';
import image4 from './Images/online4.jpg';
import image5 from './Images/online5.jpg';
import image6 from './Images/online6.jpg';
import image7 from './Images/VU_PC._CB582778228_.jpg';

function HomeSlideShow() {
  return (
    <Carousel data-bs-theme="dark" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Shop Smart, Live Smart: Tritron E-Commerce Destination</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5>Tritron E-Commerce</h5>

          <p>Empowering Your Shopping Experience: Where Convenience Meets Quality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Discover, Explore, Shop: Unleash the Possibilities with Us</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="fourth slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Simplify Your Shopping Journey: Seamless Solutions, Endless Selections</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="fifth slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Elevate Your Online Experience: Where Innovation Meets Satisfaction</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          alt="sixth slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Connect, Click, Shop: Transforming Your Shopping Experience, One Click at a Time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image7}
          alt="seventh slide"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        <h5 >Tritron E-Commerce</h5>

          <p>Connect, Click, Shop: Transforming Your Shopping Experience, One Click at a Time</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlideShow;
