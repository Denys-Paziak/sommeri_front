"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Button from "@/app/components/UI/button/Button";
import gsap from "gsap";
import { handleScroll } from "@/app/helpers/scrollHelper/ScrollHelper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";

const Hero: React.FC = () => {
  const t = useTranslations("home.hero");
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = [
      t("boldTitle1"),
      t("boldTitle2"),
      t("boldTitle3"),
      t("boldTitle4"),
      t("boldTitle5"),
    ];
    let wordIndex = 0;

    const typeText = (text: string, callback?: () => void) => {
      const chars = text.split("");
      if (textRef.current) {
        textRef.current.innerHTML = "";

        chars.forEach((char, i) => {
          gsap.to(
            {},
            {
              delay: i * 0.1,
              onComplete: () => {
                if (textRef.current) {
                  textRef.current.innerHTML += char;
                  if (i === chars.length - 1 && callback) callback();
                }
              },
            }
          );
        });
      }
    };

    const deleteText = (callback?: () => void) => {
      if (textRef.current) {
        const chars = textRef.current.innerHTML.split("");
        chars.forEach((_, i) => {
          gsap.to(
            {},
            {
              delay: i * 0.05,
              onComplete: () => {
                if (textRef.current) {
                  textRef.current.innerHTML = textRef.current.innerHTML.slice(
                    0,
                    -1
                  );
                  if (i === chars.length - 1 && callback) callback();
                }
              },
            }
          );
        });
      }
    };

    const cycleText = () => {
      typeText(words[wordIndex], () => {
        gsap.to(
          {},
          {
            delay: 1.5,
            onComplete: () =>
              deleteText(() => {
                wordIndex = (wordIndex + 1) % words.length;
                cycleText();
              }),
          }
        );
      });
    };

    cycleText();
  }, []);

  return (
    <section className={styles.hero__section}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__wrapper_heading}>
            <h2 className={styles.hero__heading_title}>
              {t("title")} <br />
            </h2>
            <div className={styles.animText}>
              <span ref={textRef} className={styles.hero__title_special}></span>
              |
            </div>
            <p className={styles.hero__heading_text}>{t("subtitle")}</p>
          </div>
          <div className={styles.hero__wrapper_actions}>
            <Button
              isRounded={true}
              type={"button"}
              onClick={() => handleScroll("contactUs")}
              ariaLabel={t("primaryButton")}
            >
              {t("primaryButton")}
            </Button>
            <SecondaryButton
              type={"button"}
              onClick={() => handleScroll("portfolio")}
              ariaLabel={t("secondaryButton")}
            >
              {t("secondaryButton")}
            </SecondaryButton>
          </div>
        </div>
      </div>
      <div className={styles.vector}>
        <Image
          src={"/images/hero-vector.avif"}
          width={1000}
          height={800}
          alt="hero vector"
        />
      </div>
    </section>
  );
};

export default Hero;
