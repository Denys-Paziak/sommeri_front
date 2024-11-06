"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./Services.module.css";
import AnimBorder from "@/app/components/global/animBorder/AnimBorder";
import { gsap } from "gsap";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathRef = useRef<SVGPathElement[]>([]);
  const t = useTranslations("home.services");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
    const path = pathRef.current[index];
    if (path) {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      let tl = gsap.timeline();
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 2,
          stroke: "#30CC71",
          ease: "power2.inOut",
        },
        "0"
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    if (isMobile) return;

    const path = pathRef.current[index];
    if (path) {
      const length = path.getTotalLength();
      gsap.killTweensOf(path);
      gsap.to(path, {
        strokeDashoffset: length,
        fill: "rgba(255,255,255,0)",
        duration: 2,
        ease: "power2.inOut",
      });
    }
  };

  const addToRefs = (el: SVGPathElement | null) => {
    if (el && !pathRef.current.includes(el)) {
      pathRef.current.push(el);
    }
  };

  return (
    <SectionWrapper sectionId="services">
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles.services__wrapper_heading}>
            <div className={styles.services__heading_info}>
              <AnimatedWrapper type="fade-up" duration={1.2}>
                <TitleWrapper>{t("title")}</TitleWrapper>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" duration={1.4}>
                <p className={styles.services__info_subtext}>{t("subtitle")}</p>
              </AnimatedWrapper>


            </div>
          </div>
          <div className={styles.services__wrapper_main}>
            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>01</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item1Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item1Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    d="M88.1562 106.406V106.007L87.767 105.919C84.4167 105.157 81.4493 103.637 78.8582 101.354C76.4308 98.9229 74.8405 96.0415 74.0813 92.7017L73.9928 92.3125H73.5937H65.1562C62.3509 92.3125 59.124 93.6281 55.4958 96.1523C51.8682 98.6751 48.4031 101.748 45.0995 105.366C41.8459 108.929 38.6094 111.544 35.3929 113.229L35.3929 113.229L35.384 113.234C32.3426 114.907 28.8339 115.75 24.8438 115.75C17.9477 115.75 12.141 113.305 7.39308 108.405C2.80296 103.507 0.5 97.3842 0.5 90C0.5 82.6155 2.80302 76.4926 7.39328 71.5949C12.1412 66.6952 17.9478 64.25 24.8438 64.25C31.2721 64.25 36.7704 66.54 41.3652 71.1348C46.0582 75.8278 50.2852 79.8201 54.0458 83.1107C57.8466 86.4364 61.5531 88.1562 65.1562 88.1562H73.5937H73.9967L74.0823 87.7624C74.8437 84.2601 76.437 81.384 78.8576 79.1148L78.8583 79.1141C81.4475 76.6772 84.4075 75.1614 87.7457 74.5544L88.1562 74.4797V74.0624V65.625C88.1562 63.4684 87.3285 61.0728 85.7401 58.4518C84.1496 55.8275 81.7763 52.9442 78.6348 49.8027L73.7129 44.8808C67.3747 38.5426 64.25 31.8662 64.25 24.8438C64.25 17.9467 66.6957 12.2206 71.592 7.63039L71.5924 7.63004C76.652 2.87699 82.7781 0.5 90 0.5C97.3809 0.5 103.503 2.87876 108.402 7.62472L108.75 7.26562L108.402 7.62475C113.306 12.3757 115.75 18.1061 115.75 24.8438C115.75 32.6292 111.939 40.0038 104.197 46.9721L104.193 46.9758C100.268 50.5864 97.3055 53.9394 95.3212 57.0349C93.3383 60.1281 92.3125 62.9956 92.3125 65.625V74.0624V74.483L92.7268 74.555C96.221 75.1628 99.0897 76.6764 101.354 79.092L101.365 79.1037L101.377 79.1148C103.793 81.3793 105.306 84.2477 105.913 87.7418L105.986 88.1562H106.406H114.844C120.393 88.1562 126.616 84.0129 133.502 76.0316C140.476 68.1286 147.693 64.25 155.156 64.25C162.048 64.25 167.773 66.7698 172.364 71.8207L172.37 71.8266L172.375 71.8323C177.123 76.7335 179.5 82.7782 179.5 90C179.5 97.3809 177.121 103.503 172.375 108.402L172.734 108.75L172.375 108.402C167.624 113.306 161.894 115.75 155.156 115.75C148.723 115.75 143.304 113.534 138.869 109.1C134.331 104.561 130.101 100.644 126.181 97.3518L126.181 97.3517C122.226 94.0302 118.445 92.3125 114.844 92.3125H106.406H105.983L105.913 92.7303C105.302 96.397 103.896 99.3032 101.717 101.482C99.5364 103.663 96.5477 105.149 92.7145 105.916L92.3125 105.996V106.406V114.844C92.3125 117.322 93.3429 120.094 95.3228 123.143C97.3056 126.197 100.266 129.568 104.189 133.255C111.944 140.546 115.75 147.844 115.75 155.156C115.75 162.048 113.23 167.773 108.179 172.364L108.174 172.37L108.168 172.375C103.266 177.123 97.222 179.5 90 179.5C82.6188 179.5 76.497 177.121 71.5979 172.375C66.6937 167.624 64.25 161.894 64.25 155.156C64.25 151.319 65.0171 147.88 66.541 144.833C68.0674 141.78 70.7564 138.389 74.6396 134.661C78.716 130.898 81.9428 127.359 84.3114 124.043C86.8339 120.575 88.1562 117.5 88.1562 114.844V106.406Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>02</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item2Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item2Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="182"
                  height="182"
                  viewBox="0 0 182 182"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M91 31.2804C84.4964 31.2804 79.2243 36.5525 79.2243 43.0561H48.9439C48.9439 19.8292 67.7731 1 91 1C114.227 1 133.056 19.8292 133.056 43.0561C133.056 66.283 114.227 85.1121 91 85.1121V54.8318C97.5034 54.8318 102.776 49.5596 102.776 43.0561C102.776 36.5525 97.5034 31.2804 91 31.2804ZM150.719 91C150.719 84.4964 145.447 79.2243 138.944 79.2243V48.9439C162.171 48.9439 181 67.7731 181 91C181 114.227 162.171 133.056 138.944 133.056C115.717 133.056 96.8878 114.227 96.8878 91H127.168C127.168 97.5034 132.44 102.776 138.944 102.776C145.447 102.776 150.719 97.5034 150.719 91ZM43.0561 102.776C36.5525 102.776 31.2804 97.5034 31.2804 91C31.2804 84.4964 36.5525 79.2243 43.0561 79.2243C49.5596 79.2243 54.8318 84.4964 54.8318 91H85.1121C85.1121 67.7731 66.283 48.9439 43.0561 48.9439C19.8292 48.9439 1 67.7731 1 91C1 114.227 19.8292 133.056 43.0561 133.056V102.776ZM91 150.719C97.5034 150.719 102.776 145.447 102.776 138.944H133.056C133.056 162.171 114.227 181 91 181C67.7731 181 48.9439 162.171 48.9439 138.944C48.9439 115.717 67.7731 96.8878 91 96.8878V127.168C84.4964 127.168 79.2243 132.44 79.2243 138.944C79.2243 145.447 84.4964 150.719 91 150.719Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>03</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item3Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item3Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    d="M70.2 0.5C80.8591 0.5 89.5 9.14091 89.5 19.8V69.5525C89.5 80.7639 98.5889 89.8524 109.8 89.8524H160.2C170.859 89.8524 179.5 98.4932 179.5 109.152V160.2C179.5 170.859 170.859 179.5 160.2 179.5H109.8C99.1411 179.5 90.5 170.859 90.5 160.2V110.447C90.5 99.236 81.4114 90.1471 70.2 90.1471H19.8C9.1409 90.1471 0.5 81.5066 0.5 70.8475V19.8C0.5 9.14089 9.14091 0.5 19.8 0.5H70.2Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>04</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {" "}
                      {t("item4Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item4Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    d="M174.831 100.133C158.851 114.397 126.838 137.989 89.9995 137.989C53.1611 137.989 21.1481 114.397 5.16743 100.133C-1.05581 94.5778 -1.05581 85.3115 5.16742 79.7567C21.1481 65.4925 53.1611 41.9 89.9995 41.9C126.838 41.9 158.851 65.4925 174.831 79.7566C181.054 85.3115 181.054 94.5778 174.831 100.133ZM89.9995 124.313C108.981 124.313 124.368 108.926 124.368 89.9445C124.368 70.9634 108.981 55.5762 89.9995 55.5762C71.0183 55.5762 55.6312 70.9634 55.6312 89.9445C55.6312 108.926 71.0183 124.313 89.9995 124.313Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>

            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>05</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item5Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item5Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    d="M70.3223 98.5555L70.6758 98.9091L70.3223 98.5556L48.5986 120.28C43.8733 125.005 36.2119 125.005 31.4866 120.28L9.76301 98.5556L9.40945 98.9091L9.76299 98.5555C5.03767 93.8305 5.03765 86.1693 9.763 81.444L31.4866 59.7203C36.212 54.9949 43.8733 54.9949 48.5986 59.7203L70.3223 81.4439C75.0476 86.1693 75.0476 93.8305 70.3223 98.5555ZM110.678 98.5556L110.324 98.9091L110.678 98.5555C105.952 93.8305 105.952 86.1693 110.678 81.444L110.324 81.0905L110.678 81.444L132.401 59.7203L132.047 59.3668L132.401 59.7203C137.126 54.9949 144.788 54.9949 149.513 59.7203L171.237 81.4439C175.962 86.1693 175.962 93.8305 171.237 98.5555L149.513 120.28C144.788 125.005 137.126 125.005 132.401 120.28L110.678 98.5556ZM81.9439 170.736L81.5903 171.09L81.9439 170.736L60.2202 149.013C55.4949 144.288 55.4949 136.626 60.2202 131.901L59.8667 131.548L60.2202 131.901L81.9439 110.178L81.5903 109.824L81.9439 110.178C86.6693 105.452 94.3304 105.452 99.0563 110.178L120.78 131.901C125.505 136.626 125.505 144.288 120.78 149.013L99.0563 170.736C94.3304 175.462 86.6693 175.462 81.9439 170.736ZM99.0563 69.8223C94.3304 74.5477 86.6693 74.5477 81.9439 69.8223L60.2202 48.0987C55.4949 43.3734 55.4949 35.7121 60.2202 30.9867L81.9439 9.26307C86.6693 4.53773 94.3304 4.5377 99.0563 9.26308L120.78 30.9867C125.505 35.7121 125.505 43.3734 120.78 48.0987L99.0563 69.8223Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div
                className={`${styles.services__main_card}`}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
              >
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>06</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item6Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item6Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="182"
                  height="182"
                  viewBox="0 0 182 182"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addToRefs}
                    d="M0.5 135V0.5H39.6C64.1766 0.5 84.1 20.4234 84.1 45V179.5H45C20.4234 179.5 0.5 159.576 0.5 135ZM95.9 45C95.9 20.4234 115.824 0.5 140.4 0.5H179.5V135C179.5 159.576 159.576 179.5 135 179.5H95.9V45Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
