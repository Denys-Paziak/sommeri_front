
import Button from "@/app/components/UI/button/Button";
import { technologies } from "../../../utils/data/technologies";
import Image from "next/image";
import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <section className={styles.technologies__section}>
      <div className="container">
        <div className={styles.technologies__wrapper}>
          <h2 className={styles.technologies__wrapper_title}>
            Our technologies
          </h2>
          <div className={styles.technologies__wrapper_main}>
            <div className={styles.technologies__main_dashboard}>
              <h2 className={styles.technologies__dashboard_title}>
                Consistent code from browser to backend
              </h2>
              <div className={styles.technologies__dashboard_banner}>
                <Image
                  src="/images/dashboard-image.png"
                  alt="dashboard img"
                  width={500}
                  height={500}
                  className={styles.technologies__banner_image}
                />
                <div className={styles.technologies__dashboard_circle}>
                  <Image
                    src="../../images/dashboard-98-icon.svg"
                    alt="circle img"
                    width={75}
                    height={75}
                    className={styles.technologies__circle_icon}
                  />
                </div>
                <div className={styles.technologies__dashboard_radial}>
                  <Image
                    src="../../images/dashboard-radial-icon.svg"
                    alt="radial img"
                    width={124}
                    height={124}
                    className={styles.technologies__radial_icon}
                  />
                </div>
              </div>
              <div className={styles.technologies__dashboard_footer}>
                <p className={styles.technologies__footer_text}>
                  Maintain uniform code across both browser and backend
                  environments. Sommeri implements web standard APIs wherever
                  feasible, enhancing code reusability between the server and
                  browser while ensuring your code remains adaptable for the
                  future.
                </p>
                <Button arrowColor={"#fff"} type={"button"}>
                  Contact Us
                </Button>
              </div>
              <div className={styles.technologies__dashboard_bamboo}>
                <Image
                  src="../../images/sommeri-vector.svg"
                  alt="bamboo vector"
                  width={500}
                  height={500}
                  className={styles.technologies__bamboo_vector}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.technologies__slider}>
        {technologies.map((technologyBlocks, index) => (
          <div key={index} className={`${styles.technologies__slider_track} ${index % 2 === 0 ? styles.animLeft : styles.animRight}`}>
            {technologyBlocks.map((technologyBlock, index) => (
              <div key={index} className={ `${styles.technologies__slider_item} `}>
                <Image
                  src={technologyBlock.image_url}
                  alt="technology logo"
                  width={500}
                  height={500}
                  className={styles.technologies__item_logo}
                />
                <span className={styles.technologies__item_text}>
                  {technologyBlock.technology_name}
                </span>
              </div>
            ))}
          </div>
        ))}
        {/* <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>1</div>
            <div className={styles.slide}>2</div>
            <div className={styles.slide}>3</div>
            <div className={styles.slide}>4</div>
            <div className={styles.slide}>5</div>
            <div className={styles.slide}>6</div>
            <div className={styles.slide}>7</div>
            <div className={styles.slide}>8</div>
            <div className={styles.slide}>9</div>
            <div className={styles.slide}>10</div>
            <div className={styles.slide}>1</div>
            <div className={styles.slide}>2</div>
            <div className={styles.slide}>3</div>
            <div className={styles.slide}>4</div>
            <div className={styles.slide}>5</div>
            <div className={styles.slide}>6</div>
            <div className={styles.slide}>7</div>
            <div className={styles.slide}>8</div>
            <div className={styles.slide}>9</div>
            <div className={styles.slide}>10</div>
          </div>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>1</div>
            <div className={styles.slide}>2</div>
            <div className={styles.slide}>3</div>
            <div className={styles.slide}>4</div>
            <div className={styles.slide}>5</div>
            <div className={styles.slide}>6</div>
            <div className={styles.slide}>7</div>
            <div className={styles.slide}>8</div>
            <div className={styles.slide}>9</div>
            <div className={styles.slide}>10</div>
            <div className={styles.slide}>1</div>
            <div className={styles.slide}>2</div>
            <div className={styles.slide}>3</div>
            <div className={styles.slide}>4</div>
            <div className={styles.slide}>5</div>
            <div className={styles.slide}>6</div>
            <div className={styles.slide}>7</div>
            <div className={styles.slide}>8</div>
            <div className={styles.slide}>9</div>
            <div className={styles.slide}>10</div>
          </div>
        </div> */}
        <div className={styles.technologies__sliders_shadow}></div>
      </div>
    </section>
  );
};

export default Technologies;
