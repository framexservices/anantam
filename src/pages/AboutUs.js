import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="What is Anantam?" className="title" />
          <p className="gray-50 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, qui enim et modi, ab sequi eius facilis at officia
            debitis rem, quas voluptate repellat? Obcaecati sit corrupti vero
            nulla praesentium.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("../images/H1.jpg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("../images/H1.jpg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("../images/H1.jpg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("../images/H1.jpg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
