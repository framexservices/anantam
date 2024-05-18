import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import Collabs from "../Constant/Collabs";

function Collab() {
  return (
    <div className="developers">
      <div className="container-fluid">
        <AnimationTitles title="Our Collaborations" className="title mx-auto" />
        <p className="gray-50 text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quibusdam?{" "}
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            {Collabs.map((item) => {
              return (
                <SwiperSlide>
                  <div className="d-flex justify-content-between align-items-center py-2 px-3">
                    <img className="pe-3" src={item.Src} alt="img" />
                    <h6 className="text-white m-0">{item.Name}</h6>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Collab;
