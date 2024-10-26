"use client";

import Button from "@/app/components/UI/button/Button";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import Image from "next/image";
import styles from "@/app/components/UI/notFound/NotFound.module.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className={styles.not__found_section}>
          <div className="container">
            <div className={styles.not__found_wrapper}>
              <div className={styles.not__found_robot}>
                <Image
                  width={620}
                  height={240}
                  className={styles.not__robot_img}
                  src="/images/404-vector.svg"
                  alt="404 robot img"
                />
              </div>
              <div className={styles.not__found_content}>
                <div className={styles.not__content_info}>
                  <TitleWrapper>Page not found</TitleWrapper>
                  <p className={styles.not__found_text}>
                    This page doesn't exist or was removed! We suggest you back
                    to home
                  </p>
                </div>
                <Button isRounded={true} type={"button"}>
                  Back to home
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.not__found_vector}>
            <Image
              width={2000}
              height={880}
              className={styles.not__vector_img}
              src="/images/404-bg.png"
              alt="404 background img"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
