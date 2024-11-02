"use client";

import Button from "@/app/components/UI/button/Button";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import Image from "next/image";
import styles from "@/app/components/UI/notFound/NotFound.module.css";
import Link from "next/link";
import ImageServer from "./components/UI/imageServer/imageServer";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className={styles.not__found_section}>
          <div className="container">
            <div className={styles.not__found_wrapper}>
              <div className={styles.not__found_robot}>
                <ImageServer width={1000} height={1000} styles={styles.not__robot_img}
                  link="/images/404-vector.svg" />
              </div>
              <div className={styles.not__found_content}>
                <div className={styles.not__content_info}>
                  <TitleWrapper>Page not found</TitleWrapper>
                  <p className={styles.not__found_text}>
                    This page does not exist or was removed! We suggest you back
                    to home
                  </p>
                </div>
                <Link href={"/"}>
                  <Button
                    isRounded={true}
                    type={"button"}
                    ariaLabel={"Back to home"}
                  >
                    Back to home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.not__found_vector}>
            <ImageServer
              width={1000} height={1000}
              styles={styles.not__vector_img}
              link="/images/404-bg.avif"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
