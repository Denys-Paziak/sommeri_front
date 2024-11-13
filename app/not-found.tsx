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
                  width={500}
                  height={500}
                  src="/images/404-vector.svg"
                  alt="404 robot"
                  className={styles.not__robot_img}
                />
              </div>
              <div className={styles.not__found_content}>
                <div className={styles.not__content_info}>
                  <h2 className={styles.not__info_title}>
                    Сторінку не знайдено
                  </h2>
                  <p className={styles.not__found_text}>
                    Ця сторінка не існує або була видалена! Пропонуємо вам
                    повернутися на головну.
                  </p>
                </div>
                <Link href="/" className={styles.not__content_button}>
                  На головну сторінку
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
