"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/app/redux/store";
import styles from "./ThanksPopup.module.css";
import { closeThanksPopup } from "@/app/redux/thanksPopupSlice";
import PopupWrapper from "@/app/components/UI/popupWrapper/PopupWrapper";
import { useTranslations } from "next-intl";

const ThanksPopup = () => {
  const isOpen = useSelector((state: RootState) => state.thanksPopup.isOpen);
  const dispatch = useDispatch();
  const t = useTranslations("popupThanks");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={() => dispatch(closeThanksPopup())}
      ></div>
      <PopupWrapper>
        <button
          type="button"
          className={styles.thanks__wrapper_close}
          onClick={() => dispatch(closeThanksPopup())}
          aria-label="close thanks popup"
        >
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.07666 12.0767L6.15333 7M6.15333 7L11.23 1.92334M6.15333 7L1.07666 1.92334M6.15333 7L11.23 12.0767"
              stroke="white"
              strokeOpacity="0.75"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={styles.thanks__popup_wrapper}>
          <div className={styles.thanks__wrapper_main}>
            <div className={styles.thanks__main_icon}>
              <svg
                width="81"
                height="42"
                viewBox="0 0 81 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.334 21.0207L42.0131 38.6999L77.3631 3.3457"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 21.0207L21.1792 38.6999M56.5333 3.3457L43.0833 16.9165"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className={styles.thanks__main_title}>{t("title")}</h2>
            <p className={styles.thanks__main_message}>{t("subtitle")}</p>
          </div>
        </div>
      </PopupWrapper>
    </div>
  );
};

export default ThanksPopup;
