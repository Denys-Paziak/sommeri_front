import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Advantages.module.css";
import Image from "next/image";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

const Advantages = () => {
  const t = useTranslations();

  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.advantages__wrapper}>
          <AnimatedWrapper type="fade-up" duration={1.2}>
            <div className={styles.advantages__wrapper_heading}>
              <TitleWrapper>Наші переваги</TitleWrapper>
              <p className={styles.advantages__heading_subtitle}>
                Ми постійно вдосконалюємось, розширюємо спектр послуг та
                впроваджуємо нові рішення, щоб забезпечити вам найкращий сервіс
                і допомогти досягнути максимальних результатів.
              </p>
            </div>
          </AnimatedWrapper>
          <div className={styles.advantages__wrapper_main}>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    01/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    Передоплата
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  Ми працюємо поетапно — 20% передоплати на старті, 40% після
                  половини роботи, та решта — при здачі проєкту. Це гарантує
                  надійну та ефективну співпрацю.
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    02/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    Технології та рішеня
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  Ми використовуємо сучасні технології та передові рішення, щоб
                  створити швидкі, зручні та адаптивні сайти. Це забезпечує
                  високу якість, надійність і вигідну позицію вашого бізнесу на
                  ринку.
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
            <div className={styles.advantages__main_block}>
              <div className={styles.advantages__block_content}>
                <div className={styles.advantages__content_heading}>
                  <span className={styles.advantages__heading_numeric}>
                    03/:
                  </span>
                  <h3 className={styles.advantages__heading_title}>
                    Результат
                  </h3>
                </div>
                <p className={styles.advantages__content_text}>
                  Ми не просто робимо сайт і забуваємо про нього. Наша ціль —
                  створити ресурс, який буде працювати для вас, залучати нових
                  клієнтів та приносити стабільний прибуток для вашого бізнесу.
                </p>
              </div>
              <div className={styles.advantages__block_vector}>
                <Image
                  src="/images/advantages-vector.avif"
                  alt="advantages vector"
                  width={500}
                  height={360}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Advantages;
