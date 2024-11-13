"use client";

import React from "react";
import Button from "@/app/components/UI/button/Button";
import Image from "next/image";
import styles from "./brifLine.module.css";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useDispatch } from "react-redux";
import { openPopup } from "@/app/redux/popupSlice";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const BrifLine = () => {
  const dispatch = useDispatch();
  const t = useTranslations("brifLine");

  const { resolvedTheme } = useTheme();

  return (
    <SectionWrapper>
      <div className="container">
        <div
          className={
            resolvedTheme === "light"
              ? styles.line__wrapper_light
              : styles.line__wrapper
          }
        >
          <div className={styles.line__vector_main}>
            <div className={styles.line__wrapper_content}>
              <h2 className={styles.line__content_title}>
                {t("brifLineTitle")}
              </h2>
              <p className={styles.line__content_text}>{t("brifLineText")}</p>
            </div>
            <div className={styles.line__wrapper_action}>
              <Button
                ariaLabel={"brif"}
                isRounded={true}
                type={"button"}
                onClick={() => dispatch(openPopup())}
              >
                {t("brifLineButton")}
              </Button>
            </div>
          </div>
          <div className={styles.line__wrapper_vector}>
            <Image
              width={1400}
              height={300}
              src="/images/why-us-vector.svg"
              alt="line vector"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BrifLine;
