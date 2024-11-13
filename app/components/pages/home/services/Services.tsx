"use client";

import React from "react";
import styles from "./Services.module.css";
import AnimBorder from "@/app/components/global/animBorder/AnimBorder";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import { useTheme } from "next-themes";

const Services: React.FC = () => {
  const t = useTranslations("home.services");
  const { theme } = useTheme();

  return (
    <SectionWrapper sectionId="services">
      <div className="container">
        <div
          className={
            theme == "light"
              ? styles.services__wrapper_light
              : styles.services__wrapper
          }
        >
          <div className={styles.services__wrapper_heading}>
            <div className={styles.services__heading_info}>
              <AnimatedWrapper type="fade-up" duration={1.2}>
                <TitleWrapper>{t("title")}</TitleWrapper>
              </AnimatedWrapper>

              <AnimatedWrapper type="fade-up" duration={1.4}>
                <p className={styles.services__info_subtext}>{t("subtitle")}</p>
              </AnimatedWrapper>
            </div>
          </div>
          <div className={styles.services__wrapper_main}>
            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>01</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item1Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item1Text")}
                    </p>
                  </div>
                </div>
                <svg className={styles.services__card_image} xmlns="http://www.w3.org/2000/svg" width="178" height="148" viewBox="0 0 178 148" fill="none">
                  <path d="M115.526 146.065V146.463C115.512 146.725 115.158 146.976 114.6 146.976H63.4004C62.8421 146.976 62.4888 146.725 62.4744 146.463V146.449C62.4744 146.31 62.5734 146.171 62.7873 146.065H115.526Z" stroke="url(#paint0_linear_1127_2139)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M114.6 146.999H63.4003C62.5001 146.999 62.1298 145.915 62.8648 145.427L68.0024 142.009C68.9685 141.366 69.5886 140.361 69.7022 139.257L71.3789 122.913H106.621L108.298 139.257C108.411 140.361 109.031 141.366 109.998 142.009L115.135 145.427C115.87 145.915 115.5 146.999 114.6 146.999Z" stroke="url(#paint1_linear_1127_2139)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M177 5.27179V118.547C177 120.907 175.095 122.819 172.746 122.819H5.25432C2.90476 122.819 1.00024 120.907 1.00024 118.547V5.27179C1.00024 2.91245 2.90476 1 5.25432 1H172.746C175.095 0.99974 177 2.91245 177 5.27179Z" stroke="url(#paint2_linear_1127_2139)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M177 106.669V118.588C177 119.663 176.596 120.646 175.93 121.391C175.152 122.267 174.014 122.818 172.746 122.818H5.25433C3.98595 122.818 2.84815 122.267 2.07005 121.391C1.40392 120.646 1 119.663 1 118.588V106.669H177Z" stroke="url(#paint3_linear_1127_2139)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M167.643 8.92676H10.3569C9.25236 8.92676 8.35693 9.82219 8.35693 10.9268V97.1878C8.35693 98.2924 9.25237 99.1878 10.3569 99.1878H167.643C168.747 99.1878 169.643 98.2924 169.643 97.1878V10.9268C169.643 9.82219 168.747 8.92676 167.643 8.92676Z" stroke="url(#paint4_linear_1127_2139)" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1127_2139" x1="62.4744" y1="145.982" x2="66.099" y2="160.127" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#76E288" />
                      <stop offset="0.529249" stop-color="#30CC71" />
                      <stop offset="1" stop-color="#0DBE58" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1127_2139" x1="62.4738" y1="120.705" x2="120.047" y2="129.2" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#76E288" />
                      <stop offset="0.529249" stop-color="#30CC71" />
                      <stop offset="1" stop-color="#0DBE58" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_1127_2139" x1="1.00024" y1="-10.1668" x2="194.345" y2="8.54558" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#76E288" />
                      <stop offset="0.529249" stop-color="#30CC71" />
                      <stop offset="1" stop-color="#0DBE58" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_1127_2139" x1="1" y1="105.189" x2="128.302" y2="198.13" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#76E288" />
                      <stop offset="0.529249" stop-color="#30CC71" />
                      <stop offset="1" stop-color="#0DBE58" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_1127_2139" x1="8.35693" y1="0.652827" x2="184.671" y2="21.7577" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#76E288" />
                      <stop offset="0.529249" stop-color="#30CC71" />
                      <stop offset="1" stop-color="#0DBE58" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>02</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item2Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item2Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  xmlns="http://www.w3.org/2000/svg"
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                >
                  <path
                    d="M91.1275 38.9923L91.1247 38.9895C91.0706 38.9363 91.0163 38.8835 90.9617 38.8311C90.3235 38.2184 90.2092 37.2574 90.6971 36.6066L108.931 12.2866C109.96 10.9149 111.272 9.78032 112.778 8.95969C114.283 8.13905 115.948 7.65151 117.658 7.53006C119.369 7.40861 121.086 7.65609 122.692 8.25575C124.299 8.85541 125.758 9.79325 126.97 11.0058L168.994 53.0299C170.207 54.2425 171.145 55.7014 171.744 57.3079C172.344 58.9145 172.591 60.6311 172.47 62.3416C172.348 64.0521 171.861 65.7165 171.04 67.2222C170.22 68.7278 169.085 70.0396 167.714 71.0687C167.714 71.0687 167.713 71.0687 167.713 71.0688L143.404 89.2948C142.752 89.7842 141.783 89.6672 141.158 89.0253C141.128 88.9937 141.097 88.9622 141.066 88.9309C141.046 88.9114 141.027 88.8919 141.008 88.8726L91.1275 38.9923ZM22.645 66.0848L22.645 66.0848C23.0539 63.4935 24.3026 61.1082 26.1993 59.2959C28.096 57.4836 30.5355 56.3445 33.1426 56.0539C33.1427 56.0539 33.1427 56.0538 33.1428 56.0538L78.8502 50.9725C79.3031 50.9222 79.7543 51.0804 80.0766 51.4027L128.597 99.9234C128.92 100.246 129.078 100.697 129.027 101.15L123.946 146.857C123.656 149.464 122.516 151.904 120.704 153.801C118.892 155.697 116.507 156.946 113.915 157.355L24.0205 171.547C22.5855 171.774 21.6987 170.032 22.7259 169.005L53.7496 137.981C54.3354 137.395 55.2851 137.395 55.8709 137.981L58.2975 140.408C59.853 141.963 61.9629 142.837 64.1628 142.837C66.3627 142.837 68.4725 141.963 70.0281 140.408C71.5837 138.852 72.4576 136.742 72.4576 134.542C72.4576 132.342 71.5837 130.233 70.0281 128.677L51.323 109.972C49.7674 108.416 47.6576 107.542 45.4577 107.542C43.2578 107.542 41.1479 108.416 39.5924 109.972C38.0368 111.527 37.1629 113.637 37.1629 115.837C37.1629 118.037 38.0368 120.147 39.5924 121.703L42.0189 124.129C42.6047 124.715 42.6047 125.665 42.0189 126.25L10.9953 157.274C9.96805 158.301 8.22642 157.414 8.45296 155.98L22.645 66.0848Z"
                    stroke="url(#paint0_linear_1021_1578)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1021_1578"
                      x1="7"
                      y1="-8.21666"
                      x2="190.246"
                      y2="4.05865"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#76E288" />
                      <stop offset="0.529249" stopColor="#30CC71" />
                      <stop offset="1" stopColor="#0DBE58" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>03</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item3Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item3Text")}
                    </p>
                  </div>
                </div>
                <svg
                  className={styles.services__card_image}
                  xmlns="http://www.w3.org/2000/svg"
                  width="176"
                  height="162"
                  viewBox="0 0 176 162"
                  fill="none"
                >
                  <path
                    d="M173.793 106.931C172.378 105.016 170.369 103.624 168.08 102.971C167.008 102.673 165.906 102.498 164.795 102.45C163.563 102.377 162.338 102.377 161.106 102.377H136.752L104.559 45.0665C100.333 49.4999 97.5779 55.1286 96.6681 61.1852C95.4862 68.7602 96.8971 76.5123 100.672 83.1852L139.348 152.067C139.964 153.167 140.573 154.267 141.247 155.323C141.863 156.277 142.523 157.179 143.323 157.993C145.017 159.694 147.165 160.779 149.519 161.095C151.873 161.41 154.235 160.919 156.281 159.701C158.338 158.47 159.938 156.601 160.835 154.377C161.751 152.126 161.905 149.669 161.319 147.308C161.029 146.207 160.623 145.14 160.109 144.125C159.559 142.989 158.935 141.903 158.319 140.803L149.402 124.919H161.106C162.338 124.919 163.563 124.919 164.795 124.853C165.909 124.787 166.995 124.648 168.08 124.34C170.373 123.686 172.385 122.291 173.8 120.373C175.233 118.426 176.004 116.072 176 113.655C176.004 111.238 175.233 108.884 173.8 106.938M64.5994 102.413L109.406 21.4752C110.022 20.3605 110.638 19.2605 111.195 18.1092C111.701 17.0679 112.127 16.0192 112.405 14.8825C112.992 12.4919 112.831 9.99852 111.921 7.71785C111.038 5.47093 109.441 3.5769 107.375 2.32785C105.348 1.1005 102.963 0.601234 100.613 0.912517C98.2668 1.22785 96.1181 2.33518 94.4241 4.06585C93.6174 4.87252 92.9574 5.78918 92.3488 6.76452C91.6741 7.83518 91.0654 8.94985 90.4494 10.0645L87.6188 15.1759L84.7808 10.0572C84.1648 8.94985 83.5561 7.83518 82.8814 6.76452C82.2872 5.79173 81.5915 4.88467 80.8061 4.05852C79.1531 2.34687 76.9738 1.23912 74.6168 0.912517C72.27 0.602945 69.8878 1.10215 67.8628 2.32785C65.7968 3.5769 64.1991 5.47093 63.3161 7.71785C62.4099 9.9968 62.2407 12.5024 62.8321 14.8825C63.1108 16.0192 63.5361 17.0679 64.0348 18.1092C64.5921 19.2605 65.2081 20.3605 65.8241 21.4752L74.9761 38.0045L39.3214 102.406H14.8868C13.6548 102.406 12.4228 102.406 11.1981 102.479C10.0834 102.545 8.99809 102.685 7.91276 103C5.63942 103.66 3.64476 105.053 2.20742 107.019C0.770486 108.996 -0.00405223 111.378 -0.00536941 113.823C-0.0066866 116.267 0.765285 118.65 2.20009 120.629C3.64476 122.595 5.63209 123.981 7.91276 124.648C8.99809 124.963 10.0834 125.103 11.1981 125.169C12.4228 125.242 13.6548 125.242 14.8868 125.242H110.931C111.223 124.6 111.468 123.939 111.665 123.262C114.708 112.878 107.147 102.406 96.7414 102.406L64.5994 102.413ZM22.8288 128.975L17.0208 139.975C16.4194 141.119 15.8108 142.248 15.2681 143.429C14.7673 144.491 14.3742 145.602 14.0948 146.743C13.5063 149.186 13.6699 151.75 14.5641 154.099C15.4514 156.431 17.0134 158.374 19.0154 159.635C21.0174 160.897 23.3348 161.41 25.6228 161.08C27.9254 160.757 30.0228 159.628 31.6801 157.853C32.4721 157.01 33.1174 156.079 33.7188 155.081C34.3788 153.981 34.9728 152.837 35.5741 151.693L44.0001 135.736C43.3401 134.636 37.0554 124.956 22.8288 128.975Z"
                    stroke="white"
                  />
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>04</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {" "}
                      {t("item4Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item4Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M174.831 100.133C158.851 114.397 126.838 137.989 89.9995 137.989C53.1611 137.989 21.1481 114.397 5.16743 100.133C-1.05581 94.5778 -1.05581 85.3115 5.16742 79.7567C21.1481 65.4925 53.1611 41.9 89.9995 41.9C126.838 41.9 158.851 65.4925 174.831 79.7566C181.054 85.3115 181.054 94.5778 174.831 100.133ZM89.9995 124.313C108.981 124.313 124.368 108.926 124.368 89.9445C124.368 70.9634 108.981 55.5762 89.9995 55.5762C71.0183 55.5762 55.6312 70.9634 55.6312 89.9445C55.6312 108.926 71.0183 124.313 89.9995 124.313Z"
                    stroke="#30CC71"
                  />
                </svg>
              </div>
            </AnimBorder>

            <AnimBorder
              className={styles.services__card_secondary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>05</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item5Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item5Text")}
                    </p>
                  </div>
                </div>
                <svg
                  className={styles.services__card_image}
                  xmlns="http://www.w3.org/2000/svg"
                  width="148"
                  height="148"
                  viewBox="0 0 148 148"
                  fill="none"
                >
                  <path
                    d="M39.8468 109.484C38.9989 109.883 38.1172 109.002 38.5162 108.154L60.6468 61.1261C60.7459 60.9155 60.9153 60.7461 61.1258 60.647L108.153 38.5164C109.001 38.1174 109.883 38.9991 109.484 39.847L87.3534 86.8746C87.2543 87.0851 87.0849 87.2545 86.8743 87.3536L39.8468 109.484ZM74.0001 67.4003C72.2497 67.4003 70.5709 68.0957 69.3332 69.3334C68.0954 70.5712 67.4001 72.2499 67.4001 74.0003C67.4001 75.7508 68.0954 77.4295 69.3332 78.6672C70.5709 79.905 72.2497 80.6003 74.0001 80.6003C75.7505 80.6003 77.4293 79.905 78.667 78.6672C79.9047 77.4295 80.6001 75.7508 80.6001 74.0003C80.6001 72.2499 79.9047 70.5712 78.667 69.3334C77.4293 68.0957 75.7505 67.4003 74.0001 67.4003ZM74.0001 0.666992C83.6304 0.666992 93.1663 2.56382 102.064 6.24916C110.961 9.93451 119.045 15.3362 125.855 22.1458C132.664 28.9555 138.066 37.0397 141.751 45.9369C145.437 54.8341 147.333 64.3701 147.333 74.0003C147.333 93.4495 139.607 112.102 125.855 125.855C112.102 139.607 93.4493 147.334 74.0001 147.334C64.3698 147.334 54.8338 145.437 45.9366 141.751C37.0394 138.066 28.9552 132.664 22.1456 125.855C8.39292 112.102 0.666748 93.4495 0.666748 74.0003C0.666748 54.5511 8.39292 35.8985 22.1456 22.1458C35.8983 8.39316 54.5509 0.666992 74.0001 0.666992ZM74.0001 15.3337C58.4407 15.3337 43.5186 21.5146 32.5165 32.5167C21.5144 43.5189 15.3334 58.441 15.3334 74.0003C15.3334 89.5597 21.5144 104.482 32.5165 115.484C43.5186 126.486 58.4407 132.667 74.0001 132.667C89.5595 132.667 104.482 126.486 115.484 115.484C126.486 104.482 132.667 89.5597 132.667 74.0003C132.667 58.441 126.486 43.5189 115.484 32.5167C104.482 21.5146 89.5595 15.3337 74.0001 15.3337Z"
                    stroke="url(#paint0_linear_1127_2704)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1127_2704"
                      x1="0.666748"
                      y1="-12.7774"
                      x2="162.571"
                      y2="-1.93179"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#76E288" />
                      <stop offset="0.529249" stopColor="#30CC71" />
                      <stop offset="1" stopColor="#0DBE58" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </AnimBorder>
            <AnimBorder
              className={styles.services__card_primary}
              type={"static"}
            >
              <div className={`${styles.services__main_card}`}>
                <div className={styles.services__card_info}>
                  <span className={styles.services__info_count}>06</span>
                  <div className={styles.services__info_inner}>
                    <h3 className={styles.services__inner_title}>
                      {t("item6Title")}
                    </h3>
                    <p className={styles.services__inner_text}>
                      {t("item6Text")}
                    </p>
                  </div>
                </div>

                <svg
                  className={styles.services__card_image}
                  xmlns="http://www.w3.org/2000/svg"
                  width="168"
                  height="176"
                  viewBox="0 0 168 176"
                  fill="none"
                >
                  <path
                    d="M166.466 57.2688C167.566 60.2594 166.637 63.5937 164.266 65.725L149.381 79.2688C149.759 82.1219 149.966 85.0437 149.966 88C149.966 90.9563 149.759 93.8781 149.381 96.7312L164.266 110.275C166.637 112.406 167.566 115.741 166.466 118.731C164.953 122.822 163.131 126.741 161.034 130.522L159.419 133.306C157.15 137.087 154.606 140.662 151.822 144.031C149.794 146.506 146.425 147.331 143.4 146.369L124.253 140.284C119.647 143.825 114.559 146.781 109.128 149.016L104.831 168.644C104.144 171.772 101.737 174.247 98.5749 174.762C93.8311 175.553 88.9499 175.966 83.9655 175.966C78.9811 175.966 74.0999 175.553 69.3561 174.762C66.1936 174.247 63.7874 171.772 63.0999 168.644L58.803 149.016C53.3718 146.781 48.2843 143.825 43.678 140.284L24.5655 146.403C21.5405 147.366 18.1718 146.506 16.1436 144.066C13.3593 140.697 10.8155 137.122 8.54677 133.341L6.93114 130.556C4.83427 126.775 3.01239 122.856 1.49989 118.766C0.399893 115.775 1.32802 112.441 3.69989 110.309L18.5843 96.7656C18.2061 93.8781 17.9999 90.9563 17.9999 88C17.9999 85.0437 18.2061 82.1219 18.5843 79.2688L3.69989 65.725C1.32802 63.5937 0.399893 60.2594 1.49989 57.2688C3.01239 53.1781 4.83427 49.2594 6.93114 45.4781L8.54677 42.6937C10.8155 38.9125 13.3593 35.3375 16.1436 31.9688C18.1718 29.4938 21.5405 28.6687 24.5655 29.6312L43.7124 35.7156C48.3186 32.175 53.4061 29.2188 58.8374 26.9844L63.1343 7.35625C63.8218 4.22812 66.228 1.75312 69.3905 1.2375C74.1343 0.4125 79.0155 0 83.9999 0C88.9843 0 93.8655 0.4125 98.6093 1.20312C101.772 1.71875 104.178 4.19375 104.866 7.32187L109.162 26.95C114.594 29.1844 119.681 32.1406 124.287 35.6813L143.434 29.5969C146.459 28.6344 149.828 29.4938 151.856 31.9344C154.641 35.3031 157.184 38.8781 159.453 42.6594L161.069 45.4437C163.166 49.225 164.987 53.1438 166.5 57.2344L166.466 57.2688ZM83.9999 115.5C91.2933 115.5 98.2881 112.603 103.445 107.445C108.603 102.288 111.5 95.2935 111.5 88C111.5 80.7065 108.603 73.7118 103.445 68.5546C98.2881 63.3973 91.2933 60.5 83.9999 60.5C76.7064 60.5 69.7117 63.3973 64.5545 68.5546C59.3972 73.7118 56.4999 80.7065 56.4999 88C56.4999 95.2935 59.3972 102.288 64.5545 107.445C69.7117 112.603 76.7064 115.5 83.9999 115.5Z"
                    stroke="url(#paint0_linear_1127_2709)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1127_2709"
                      x1="1.04004"
                      y1="-16.1302"
                      x2="184.25"
                      y2="-4.56031"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#76E288" />
                      <stop offset="0.529249" stopColor="#30CC71" />
                      <stop offset="1" stopColor="#0DBE58" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </AnimBorder>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
