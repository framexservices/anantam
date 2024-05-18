import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";

// const { Container } = require("react-bootstrap");

function Services() {
  return (
    <div className="join">
      <Container>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className=" px-3 align-items-start flex-column">
            <img
              className="rounded my-3"
              src={require("../images/h2.png")}
              alt="img"
            />
            <AnimationTitles
              title="Services Name"
              className="text-white mb-2 h4"
            />
            <p className="gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis officia suscipit eius, ut nihil minus!
            </p>
          </SwiperSlide>
          <SwiperSlide className=" px-3 align-items-start flex-column">
            <img
              className="rounded my-3"
              src={require("../images/h2.png")}
              alt="img"
            />
            <AnimationTitles
              title="Services Name"
              className="text-white mb-2 h4"
            />
            <p className="gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis officia suscipit eius, ut nihil minus!
            </p>
          </SwiperSlide>
          <SwiperSlide className=" px-3 align-items-start flex-column">
            <img
              className="rounded my-3"
              src={require("../images/h2.png")}
              alt="img"
            />
            <AnimationTitles
              title="Services Name"
              className="text-white mb-2 h4"
            />
            <p className="gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis officia suscipit eius, ut nihil minus!
            </p>
          </SwiperSlide>
          <SwiperSlide className=" px-3 align-items-start flex-column">
            <img
              className="rounded my-3"
              src={require("../images/h2.png")}
              alt="img"
            />
            <AnimationTitles
              title="Services Name"
              className="text-white mb-2 h4"
            />
            <p className="gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis officia suscipit eius, ut nihil minus!
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Services;
