import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import styles from "./ClientsSay.module.css";
import Reviews from "@/app/components/global/reviews/Reviews";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

interface Review {
  id: number;
  name: string;
  content: string;
  rating: number;
}

interface ClientsSayProps {
  reviews: Review[];
}

const ClientsSay: React.FC<ClientsSayProps> = ({ reviews }) => {
  return (
    <SectionWrapper sectionId="reviews">
      <div className="container">
        <div className={styles.client__say_wrapper}>
          <div className={styles.client__say_heading}>
            <TitleWrapper>What our clients say</TitleWrapper>
            <p className={styles.client__heading_subtitle}>
              Discover how we’ve helped businesses transform their online
              presence with tailored web development solutions that deliver
              results. Here’s what our satisfied clients have to say about
              working with us.
            </p>
          </div>
        </div>
      </div>
      {/* <section className={styles.client__say_section}> */}
      {/* </section> */}
      <Reviews reviews={reviews} />
      <div className={styles.client__say_shape}></div>
    </SectionWrapper>
  );
};

export default ClientsSay;
