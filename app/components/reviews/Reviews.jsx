import Image from "next/image";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.reviews__block}>
      <div className={styles.reviews__block_slider}>
        <ul className={styles.reviews__slider_track}>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
          <li className={styles.reviews__track_item}>
            <div className={styles.reviews__item_header}>
              <div className={styles.reviews__header_inner}>
                <Image
                  src="/images/review-logo.svg"
                  alt="review logo"
                  width={24}
                  height={24}
                  className={styles.reviews__inner_logo}
                />
                <p className={styles.reviews__inner_name}>Liam James</p>
              </div>
              <div className={styles.reviews__header_date}>12.07.2024</div>
            </div>
            <div className={styles.reviews__item_main}>
              <p className={styles.reviews__main_text}>
                I highly recommend this team
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
