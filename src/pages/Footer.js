import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={"#"} alt="logo" className="mb-3" />
            <p className="gray-100">
              Please contact us if you have any specific <br /> Services or
              Collaborations.
            </p>
            <Link
              target="_blank"
              className="link-primary link-underline-opacity-0"
              to={""}
            >
              Email
            </Link>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
          >
            <div>
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Socials
              </h6>
              <ul className="p-0">
                <li>
                  {" "}
                  <a href="#" target="_blank">
                    {" "}
                    Instagram
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" target="_blank">
                    {" "}
                    Twitter
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" target="_blank">
                    {" "}
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <p>© 2024 Anantam. All rights reserved</p>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
