import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"; // Import the custom CSS file

import imgOne from "../../../assets/automotive/5in1.jpeg";
import imgTwo from "../../../assets/automotive/auto_industry.png";
import imgThree from "../../../assets/automotive/bloOff.jpeg";
import imgFour from "../../../assets/automotive/featherDuster.jpg";
import imgFive from "../../../assets/automotive/car.png";

const imgs = [
  { id: "img1", img: imgOne },
  { id: "img2", img: imgOne },
  { id: "img3", img: imgOne },
  { id: "img4", img: imgOne },
  { id: "img5", img: imgOne },
];

export default function BootstrapSlider() {
  return (
    <div className="carousel-container mx-60 my-10  py-20 bg-gray-900 rounded-lg">
      <Carousel variant="light">
        {imgs.map((img) => (
          <Carousel.Item key={img.id}>
            <img
              className="d-block h-[30rem] m-auto rounded-md"
              src={img.img}
              alt="Slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
