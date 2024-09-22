import styles from "./WhyUs.module.css";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className={styles.why__us_section}>
      <div className="container">
        <div className={styles.why__us_wrapper}>
          <div className={styles.why__us_heading}>
            <h2 className={styles.why__heading_title}>
              Why you should work with us
            </h2>
            <p className={styles.why__heading_subtitle}>
              We create effective solutions that meet your goals and needs.
            </p>
          </div>
          <div className={styles.why__us_main}>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-1.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>Individual approach</h3>
                <p className={styles.why__info_text}>
                  We carefully analyze the needs of each client and create
                  solutions tailored to their business
                </p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-2.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>Modern technologies</h3>
                <p className={styles.why__info_text}>
                  We use advanced tools and technologies to create fast,
                  reliable and efficient websites
                </p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-3.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>Functional design</h3>
                <p className={styles.why__info_text}>
                  Our projects combine aesthetics with maximum
                  user-friendliness, which increases conversions
                </p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-4.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>Adaptability</h3>
                <p className={styles.why__info_text}>
                  The websites we build work perfectly on any device, providing
                  the perfect user experience
                </p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-5.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>Support and develop.</h3>
                <p className={styles.why__info_text}>
                  We not only create websites, but also provide their support
                  and development, helping your business
                </p>
              </div>
            </div>
            <div className={styles.why__main_block}>
              <div className={styles.why__block_icon}>
                <Image
                  width="50"
                  height="40"
                  className={styles.why__icon_item}
                  src="/images/why-us-icon-6.svg"
                  alt="why us icon"
                />
                <div className={styles.why__icon_shape}></div>
              </div>
              <div className={styles.why__block_info}>
                <h3 className={styles.why__info_title}>SEO optimization</h3>
                <p className={styles.why__info_text}>
                  Thanks to search engine optimization, you get more traffic and
                  better positions in search results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
