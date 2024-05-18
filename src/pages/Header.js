import { Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Loading() {
  // Like button of properties
  // function like(e) {
  //   return e.target.classList.value === "fa-regular fa-heart like"
  //     ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
  //     : (e.target.classList.value = "fa-regular fa-heart like");
  // }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Welcome to Anantam Aerials & Robotics" />
          <p className="gray-90 mt-3 fs-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            tempora iste fuga hic distinctio quasi, aut labore nostrum provident
            molestiae ipsum ex amet? Blanditiis, et? Rerum odio sunt dolor?
            Atque.
          </p>
          <Button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">Explore</Button>
          <div
            style={{ color: "white" }}
            className="d-none d-md-flex justify-content-between align-items-center my-4"
          >
            <div>
              <h5 className="fw-bold fs-1">50+</h5>
              <span className="gray-100">Customers</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">100+</h5>
              <span className="gray-100">Product Delivered </span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">30+</h5>
              <span className="gray-100">Event Organized</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5"
        >
          {/* <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/H1.jpg")}
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../images/properties/house_big.webp")}
                  />
                </div>
              </Card.Body>
            </Card>
          </div> */}
          <Carousel fade>
            <Carousel.Item>
              <Image
                height={"300px"}
                src={require("../images/h2.png")}
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                height={"300px"}
                src={require("../images/H1.webp")}
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                height={"300px"}
                src={require("../images/h2.png")}
                rounded
              />
            </Carousel.Item>
          </Carousel>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
