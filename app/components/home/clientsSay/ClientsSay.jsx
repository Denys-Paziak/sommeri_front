import styles from "./ClientsSay.module.css";
import Reviews from "@/app/components/reviews/Reviews";

const ClientsSay = () => {
  return (
    <div className={styles.client__say_block}>
      <section className={styles.client__say_section}>
        <div className="container">
          <div className={styles.client__say_wrapper}>
            <div className={styles.client__say_heading}>
              <h2 className={styles.client__heading_title}>
                What our clients say
              </h2>
              <p className={styles.client__heading_subtitle}>
                Discover how we’ve helped businesses transform their online
                presence with tailored web development solutions that deliver
                results. Here’s what our satisfied clients have to say about
                working with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <div className={styles.client__say_shape}></div>
    </div>
  );
};

export default ClientsSay;
