import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
    return (
        <Carousel style={{ height: "400px", margin: "20px" }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/clothing/199/under-199-desktop-header.jpg"
                    alt="First slide"
                    height={"400px"}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Event_page/Launches_Page/1500a.jpg"
                    alt="Second slide"
                    height={"400px"}
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://paisebachaoindia.com/wp-content/uploads/2016/01/banner.png"
                    alt="Third slide"
                    height={"400px"}
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;