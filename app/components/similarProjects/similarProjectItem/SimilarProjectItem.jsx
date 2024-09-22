import styles from "../SimilarProjects.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SimilarProjectItem = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className={styles.similar__main_content}>
        <Swiper
          key={"project-slider"}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".arrow-right-projects",
            prevEl: ".arrow-left-projects",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          className="projectsSwiper"
        >
          <SwiperSlide>
            <div className={styles.similar__main_item}>
              <img
                src="../images/similar-image-1.jpg"
                alt="similar img"
                className={styles.similar__item_banner}
              />
              <div className={styles.similar__item_info}>
                <div className={styles.similar__info_inner}>
                  <h3 className={styles.similar__inner_name}>Project Name</h3>
                  <button className={styles.similar__inner_visit} type="button">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className={styles.similar__info_type}>
                  <p className={styles.similar__type_text}>Landing Page</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.similar__main_item}>
              <img
                src="../images/similar-image-1.jpg"
                alt="similar img"
                className={styles.similar__item_banner}
              />
              <div className={styles.similar__item_info}>
                <div className={styles.similar__info_inner}>
                  <h3 className={styles.similar__inner_name}>Project Name</h3>
                  <button className={styles.similar__inner_visit} type="button">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className={styles.similar__info_type}>
                  <p className={styles.similar__type_text}>Landing Page</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.similar__main_item}>
              <img
                src="../images/similar-image-1.jpg"
                alt="similar img"
                className={styles.similar__item_banner}
              />
              <div className={styles.similar__item_info}>
                <div className={styles.similar__info_inner}>
                  <h3 className={styles.similar__inner_name}>Project Name</h3>
                  <button className={styles.similar__inner_visit} type="button">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className={styles.similar__info_type}>
                  <p className={styles.similar__type_text}>Landing Page</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <span
        onClick={() => swiper && swiper.slidePrev()}
        className={`arrow-left-projects ${styles.arrow__slide_left} arrow-projects`}
      >
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.41498 11.6333L10.1677 20.9258C10.3305 21.0809 10.5467 21.1675 10.7715 21.1675C10.9963 21.1675 11.2125 21.0809 11.3752 20.9258L11.3857 20.9153C11.4649 20.8401 11.5279 20.7496 11.571 20.6493C11.6141 20.5489 11.6363 20.4409 11.6363 20.3317C11.6363 20.2225 11.6141 20.1145 11.571 20.0141C11.5279 19.9138 11.4649 19.8233 11.3857 19.7481L2.20173 10.9981L11.3857 2.25156C11.4649 2.17636 11.5279 2.08584 11.571 1.98551C11.6141 1.88517 11.6363 1.77713 11.6363 1.66794C11.6363 1.55875 11.6141 1.4507 11.571 1.35037C11.5279 1.25004 11.4649 1.15952 11.3857 1.08431L11.3752 1.07381C11.2125 0.918684 10.9963 0.832146 10.7715 0.832146C10.5467 0.832146 10.3305 0.918684 10.1677 1.07381L0.41498 10.3663C0.329209 10.448 0.260925 10.5463 0.214269 10.6552C0.167613 10.7641 0.143555 10.8813 0.143555 10.9998C0.143555 11.1183 0.167613 11.2355 0.214269 11.3444C0.260925 11.4533 0.329209 11.5516 0.41498 11.6333Z"
            fill="white"
            fill-opacity="0.75"
          />
        </svg>
      </span>
      <span
        onClick={() => swiper && swiper.slideNext()}
        className={`arrow-right-projects ${styles.arrow__slide_right} arrow-projects`}
      >
        <svg
          width="12"
          height="22"
          viewBox="0 0 12 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.585 11.6333L1.83227 20.9258C1.66954 21.0809 1.45334 21.1675 1.22852 21.1675C1.0037 21.1675 0.7875 21.0809 0.62477 20.9258L0.614269 20.9153C0.535109 20.8401 0.472075 20.7496 0.429 20.6493C0.385926 20.5489 0.363713 20.4409 0.363713 20.3317C0.363713 20.2225 0.385926 20.1145 0.429 20.0141C0.472075 19.9138 0.535109 19.8233 0.614269 19.7481L9.79827 10.9981L0.614269 2.25156C0.535109 2.17636 0.472075 2.08584 0.429 1.98551C0.385926 1.88517 0.363713 1.77713 0.363713 1.66794C0.363713 1.55875 0.385926 1.4507 0.429 1.35037C0.472075 1.25004 0.535109 1.15952 0.614269 1.08431L0.62477 1.07381C0.7875 0.918684 1.0037 0.832146 1.22852 0.832146C1.45334 0.832146 1.66954 0.918684 1.83227 1.07381L11.585 10.3663C11.6708 10.448 11.7391 10.5463 11.7857 10.6552C11.8324 10.7641 11.8564 10.8813 11.8564 10.9998C11.8564 11.1183 11.8324 11.2355 11.7857 11.3444C11.7391 11.4533 11.6708 11.5516 11.585 11.6333Z"
            fill="white"
            fill-opacity="0.75"
          />
        </svg>
      </span>
    </>
  );
};

export default SimilarProjectItem;
