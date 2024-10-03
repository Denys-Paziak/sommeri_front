import styles from "./AboutProjectReviews.module.css";
import Reviews from "@/app/components/reviews/Reviews";

const AboutProjectReviews = () => {
  return (
    <div className={styles.project__reviews_block}>
      <section className={styles.project__reviews_section}>
        <div className="container">
          <div className={styles.project__reviews__wrapper}>
            <h3 className={styles.project__reviews_title}>
              What our clients say:
            </h3>
          </div>
        </div>
      </section>
      <section className={styles.project__reviews_section}>
        <Reviews />
      </section>
    </div>
  );
};

export default AboutProjectReviews;
