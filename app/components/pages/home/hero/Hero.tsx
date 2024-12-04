"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Button from "@/app/components/UI/button/Button";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";
import Link from "next/link";

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
      t("boldTitle6"),
      t("boldTitle7"),
      t("boldTitle8"),
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
  }, [t]);

  return (
    <section className={styles.hero__section}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__wrapper_content}>
            <div className={styles.hero__wrapper_heading}>
              <h1 className={styles.hero__heading_title}>
                {t("title")} <br />
                <div className={styles.animText}>
                  <span
                    ref={textRef}
                    className={styles.hero__title_special}
                  ></span>
                  <span className={styles.hero__line}></span>
                </div>
              </h1>
              <p className={styles.hero__heading_text}>{t("subtitle")}</p>
            </div>
            <div className={styles.hero__wrapper_actions}>
              <Link href={"/#contactUs"}>
                <Button
                  isRounded={true}
                  type={"button"}
                  ariaLabel={t("primaryButton")}
                >
                  {t("primaryButton")}
                </Button>
              </Link>
              <Link href={"/#portfolio"}>
                <SecondaryButton
                  type={"button"}
                  ariaLabel={t("secondaryButton")}
                >
                  {t("secondaryButton")}
                </SecondaryButton>
              </Link>
            </div>
          </div>
          <div className={styles.hero__wrapper_mockup}>
            <Image
              priority={true}
              fetchPriority="low"
              src="/images/mockup.avif"
              alt="mockup"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
