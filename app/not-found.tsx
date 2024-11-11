"use client";

import Image from "next/image";
import styles from "@/app/components/UI/notFound/NotFound.module.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }} className={montserrat.className}>
        <div className={styles.not__found_section}>
          <div className="container">
            <div className={styles.not__found_wrapper}>
              <div className={styles.not__found_robot}>
                <Image
                  width={1000}
                  height={1000}
                  src="/images/404-vector.svg"
                  alt="404 robot"
                  className={styles.not__robot_img}
                />
              </div>
              <div className={styles.not__found_content}>
                <div className={styles.not__content_info}>
                  <h2 className={styles.not__info_title}>Page not found</h2>
                  <p className={styles.not__found_text}>
                    This page does not exist or was removed! We suggest you back
                    to home
                  </p>
                </div>
                <Link href={"/"}>
                  <button
                    className={styles.not__content_button}
                    aria-label="home button"
                    type="button"
                  >
                    Back to home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: ${montserrat.style.fontFamily};
            margin: 0;
            padding: 0;
          }
        `}</style>
      </body>
    </html>
  );
}
