// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import TeamD from "../Constant/TeamDetail";

function Team() {
  // Active on select a tab
  function active(e) {
    let act = document.querySelectorAll(".active");
    act[0].classList.remove("active");
    e.target.classList.add("active");
  }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles className="title" title="Our Team" />

        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {TeamD.map((item) => {
              return (
                <SwiperSlide>
                  {" "}
                  <Card className="bg-black-100 rounded">
                    <Card.Body className="p-2">
                      <div className="rounded overflow-hidden position-relative">
                        <Card.Img variant="top" alt="img" src={item.Src} />
                      </div>
                      <p className="gray-90">{item.Role}</p>
                      <h5 className="mt-2 text-white fw-normal">{item.Name}</h5>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Team;
