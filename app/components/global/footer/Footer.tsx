"use client";

import React from "react";
import { Link } from "@/navigation";
import Logo from "../logo/Logo";
import styles from "./Footer.module.css";
import Image from "next/image";
import SectionLink from "@/app/components/UI/sectionLink/SectionLink";
import { usePathname } from "next/navigation";
import {
  linkOnFacebook,
  linkOnLinkedin,
  linkOnTelegram,
  linkOnWhatsApp,
  phoneNumber,
  phoneNumberShow,
  salesEmail,
} from "@/configSommeriData";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Footer = () => {
  const t = useTranslations();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const themeHandler = () => {
    if (resolvedTheme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const NavbarItems = [
    {
      name: t("menu.item1"),
      link: "services",
    },
    {
      name: t("menu.item2"),
      link: "portfolio",
    },
    {
      name: t("menu.item3"),
      link: "about",
    },
    {
      name: t("menu.item4"),
      link: "contactUs",
    },
  ];

  return (
    <footer
      className={resolvedTheme == "light" ? styles.footer_light : styles.footer}
    >
      <section className={styles.footer__section}>
        <div className="container">
          <div className={styles.footer_wrapper}>
            <div className={styles.footer__wrapper_main}>
              <div className={styles.footer__main_contact}>
                <div className={styles.footer__contact_logo}>
                  <Logo theme={resolvedTheme} />
                </div>
                <div className={styles.footer__contact_block}>
                  <Link
                    href={`mailto:${salesEmail}`}
                    className={styles.footer__block_item}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 3H3C2.175 3 1.5 3.675 1.5 4.5V13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM14.7 6.1875L9.795 9.255C9.3075 9.5625 8.6925 9.5625 8.205 9.255L3.3 6.1875C3.2248 6.14528 3.15894 6.08825 3.10642 6.01984C3.05389 5.95143 3.0158 5.87308 2.99443 5.78953C2.97307 5.70597 2.96888 5.61895 2.98212 5.53373C2.99536 5.44851 3.02575 5.36686 3.07146 5.29373C3.11717 5.22059 3.17724 5.15749 3.24804 5.10825C3.31885 5.059 3.3989 5.02463 3.48337 5.00722C3.56784 4.98981 3.65496 4.98972 3.73947 5.00696C3.82397 5.0242 3.9041 5.0584 3.975 5.1075L9 8.25L14.025 5.1075C14.0959 5.0584 14.176 5.0242 14.2605 5.00696C14.345 4.98972 14.4322 4.98981 14.5166 5.00722C14.6011 5.02463 14.6812 5.059 14.752 5.10825C14.8228 5.15749 14.8828 5.22059 14.9285 5.29373C14.9742 5.36686 15.0046 5.44851 15.0179 5.53373C15.0311 5.61895 15.0269 5.70597 15.0056 5.78953C14.9842 5.87308 14.9461 5.95143 14.8936 6.01984C14.8411 6.08825 14.7752 6.14528 14.7 6.1875Z"
                        fill="white"
                        fillOpacity="0.75"
                      />
                    </svg>
                    <span className={styles.footer__item_text}>
                      {salesEmail}
                    </span>
                  </Link>
                  <Link
                    href={`tel:${phoneNumber}`}
                    className={styles.footer__block_item}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.414 16.5996C11.334 16.5599 8.27325 16.1369 5.06775 12.9321C1.863 9.72661 1.44075 6.66661 1.40025 5.58586C1.34025 3.93886 2.60175 2.33911 4.059 1.71436C4.23448 1.63858 4.42665 1.60973 4.61665 1.63064C4.80664 1.65154 4.98794 1.72149 5.14275 1.83361C6.34275 2.70811 7.17075 4.03111 7.88175 5.07136C8.03819 5.2999 8.10508 5.57802 8.06967 5.8527C8.03426 6.12739 7.89903 6.37945 7.68975 6.56086L6.2265 7.64761C6.15581 7.69866 6.10604 7.77363 6.08646 7.8586C6.06687 7.94357 6.07879 8.03276 6.12 8.10961C6.4515 8.71186 7.041 9.60886 7.716 10.2839C8.391 10.9589 9.33075 11.5874 9.975 11.9564C10.0558 12.0017 10.1509 12.0144 10.2407 11.9918C10.3305 11.9692 10.4083 11.913 10.458 11.8349L11.4105 10.3851C11.5856 10.1525 11.8439 9.99666 12.1314 9.95024C12.4188 9.90383 12.7131 9.97043 12.9525 10.1361C14.0078 10.8666 15.2393 11.6804 16.1407 12.8346C16.262 12.9905 16.3391 13.1762 16.364 13.3721C16.389 13.568 16.3608 13.767 16.2825 13.9484C15.6547 15.4131 14.0662 16.6604 12.414 16.5996Z"
                        fill="white"
                        fillOpacity="0.75"
                      />
                    </svg>
                    <span className={styles.footer__item_text}>
                      {phoneNumberShow}
                    </span>
                  </Link>
                </div>
              </div>
              <div className={styles.footer__main_info}>
                <div className={styles.footer__info_block}>
                  <p className={styles.footer__block_subtitle}>
                    {t("footer.subtitle1")}
                  </p>
                  <ul className={styles.footer__block_menu}>
                    {NavbarItems.map((NavbarItem, index) => (
                      <SectionLink
                        key={index + Date.now()}
                        name={NavbarItem.name}
                        link={NavbarItem.link}
                      />
                    ))}
                  </ul>
                </div>
                <div className={styles.footer__info_block}>
                  <p className={styles.footer__block_subtitle}>
                    {t("footer.subtitle2")}
                  </p>
                  <ul className={styles.footer__block_security}>
                    <li className={styles.footer__list_item}>
                      <Link
                        href={"/privacy-policy"}
                        className={
                          pathname.split("/").at(-1) == "privacy-policy"
                            ? styles.footer__item_link__active
                            : styles.footer__item_link
                        }
                      >
                        {t("footer.item1")}
                      </Link>
                    </li>
                    <li className={styles.footer__list_item}>
                      <Link
                        href={"/terms-of-use"}
                        className={
                          pathname.split("/").at(-1) == "terms-of-use"
                            ? styles.footer__item_link__active
                            : styles.footer__item_link
                        }
                      >
                        {t("footer.item2")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footer__info_block}>
                  <p className={styles.footer__block_subtitle}>
                    {t("footer.subtitle3")}
                  </p>
                  <div className={styles.footer__block_socials}>
                    <Link
                      href={linkOnTelegram}
                      target="_blank"
                      className={styles.footer__social_item}
                      aria-label="Visit our Telegram"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_769_69938)">
                          <path
                            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM20.496 9.52C20.286 11.732 19.376 17.108 18.914 19.586C18.718 20.636 18.326 20.986 17.962 21.028C17.15 21.098 16.534 20.496 15.75 19.978C14.518 19.166 13.818 18.662 12.628 17.878C11.242 16.968 12.138 16.464 12.936 15.652C13.146 15.442 16.73 12.18 16.8 11.886C16.8097 11.8415 16.8084 11.7952 16.7962 11.7513C16.784 11.7074 16.7613 11.6671 16.73 11.634C16.646 11.564 16.534 11.592 16.436 11.606C16.31 11.634 14.35 12.936 10.528 15.512C9.968 15.89 9.464 16.086 9.016 16.072C8.512 16.058 7.56 15.792 6.846 15.554C5.964 15.274 5.278 15.12 5.334 14.63C5.362 14.378 5.712 14.126 6.37 13.86C10.458 12.082 13.174 10.906 14.532 10.346C18.424 8.722 19.222 8.442 19.754 8.442C19.866 8.442 20.132 8.47 20.3 8.61C20.44 8.722 20.482 8.876 20.496 8.988C20.482 9.072 20.51 9.324 20.496 9.52Z"
                            fill="#24A1DE"
                          />
                          <path
                            d="M20.496 9.52C20.286 11.732 19.376 17.108 18.914 19.586C18.718 20.636 18.326 20.986 17.962 21.028C17.15 21.098 16.534 20.496 15.75 19.978C14.518 19.166 13.818 18.662 12.628 17.878C11.242 16.968 12.138 16.464 12.936 15.652C13.146 15.442 16.73 12.18 16.8 11.886C16.8097 11.8415 16.8084 11.7952 16.7962 11.7513C16.784 11.7074 16.7613 11.6671 16.73 11.634C16.646 11.564 16.534 11.592 16.436 11.606C16.31 11.634 14.35 12.936 10.528 15.512C9.968 15.89 9.464 16.086 9.016 16.072C8.512 16.058 7.56 15.792 6.846 15.554C5.964 15.274 5.278 15.12 5.334 14.63C5.362 14.378 5.712 14.126 6.37 13.86C10.458 12.082 13.174 10.906 14.532 10.346C18.424 8.722 19.222 8.442 19.754 8.442C19.866 8.442 20.132 8.47 20.3 8.61C20.44 8.722 20.482 8.876 20.496 8.988C20.482 9.072 20.51 9.324 20.496 9.52Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_769_69938">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link
                      href={linkOnWhatsApp}
                      target="_blank"
                      className={styles.footer__social_item}
                      aria-label="Visit our WhatsApp"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_769_69942)">
                          <path
                            d="M0.597516 13.8783C0.596859 16.2387 1.21636 18.5434 2.39433 20.5748L0.484859 27.5155L7.61961 25.653C9.593 26.7225 11.804 27.2829 14.0509 27.2831H14.0568C21.474 27.2831 27.5119 21.2744 27.515 13.8889C27.5165 10.3101 26.1178 6.94482 23.5765 4.41298C21.0358 1.88135 17.6566 0.486399 14.0562 0.484766C6.63808 0.484766 0.600578 6.49316 0.597516 13.8783Z"
                            fill="url(#paint0_linear_769_69942)"
                          />
                          <path
                            d="M10.5742 8.07376C10.3132 7.49634 10.0385 7.48468 9.79037 7.47456C9.58716 7.46585 9.35484 7.4665 9.12275 7.4665C8.89044 7.4665 8.51298 7.5535 8.19394 7.90031C7.87456 8.24744 6.97463 9.0863 6.97463 10.7925C6.97463 12.4986 8.22292 14.1476 8.39694 14.3792C8.57117 14.6104 10.8068 18.2237 14.3475 19.6137C17.2901 20.7689 17.8889 20.5392 18.5276 20.4812C19.1663 20.4235 20.5886 19.6426 20.8788 18.8328C21.1692 18.0231 21.1692 17.3291 21.0821 17.184C20.9951 17.0395 20.7628 16.9527 20.4144 16.7794C20.066 16.606 18.3533 15.767 18.0341 15.6512C17.7147 15.5356 17.4825 15.4779 17.2502 15.8251C17.0179 16.1718 16.3508 16.9527 16.1475 17.184C15.9444 17.4158 15.741 17.4447 15.3928 17.2712C15.0442 17.0972 13.9223 16.7315 12.5914 15.5502C11.5558 14.6309 10.8567 13.4958 10.6535 13.1486C10.4502 12.8019 10.6317 12.6139 10.8064 12.4411C10.9629 12.2857 11.1548 12.0362 11.3292 11.8337C11.5029 11.6312 11.5608 11.4867 11.677 11.2554C11.7932 11.024 11.7351 10.8214 11.6481 10.648C11.5608 10.4745 10.8839 8.75943 10.5742 8.07376Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_769_69942"
                            x1="1400"
                            y1="2800"
                            x2="1400"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#1FAF38" />
                            <stop offset="1" stopColor="#60D669" />
                          </linearGradient>
                          <clipPath id="clip0_769_69942">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link
                      href={linkOnFacebook}
                      target="_blank"
                      className={styles.footer__social_item}
                      aria-label="Visit our Facebook page"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_769_69947)">
                          <path
                            d="M28.0412 14.0206C28.0412 6.28123 21.76 0 14.0206 0C6.28123 0 0 6.28123 0 14.0206C0 20.8066 4.82309 26.4569 11.2165 27.7608V18.2268H8.41236V14.0206H11.2165V10.5154C11.2165 7.80947 13.4177 5.60824 16.1237 5.60824H19.6288V9.81442H16.8247C16.0536 9.81442 15.4227 10.4453 15.4227 11.2165V14.0206H19.6288V18.2268H15.4227V27.9711C22.5031 27.2701 28.0412 21.2973 28.0412 14.0206Z"
                            fill="#1877F2"
                          />
                          <path
                            d="M11.2165 18.2268V27.7608C11.8841 27.8742 13.66 28.0749 15.4227 27.9711V18.2268H19.6288V14.0206H15.4227V11.2165C15.4227 10.4453 16.0536 9.81442 16.8247 9.81442H19.6288V5.60824H16.1237C13.4177 5.60824 11.2165 7.80947 11.2165 10.5154V14.0206H8.41236V18.2268H11.2165Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_769_69947">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link
                      href={linkOnLinkedin}
                      target="_blank"
                      className={styles.footer__social_item}
                      aria-label="Visit our LinkedIn page"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_769_69949)">
                          <path
                            d="M24.8889 0C25.714 0 26.5053 0.327777 27.0888 0.911223C27.6722 1.49467 28 2.28599 28 3.11111V24.8889C28 25.714 27.6722 26.5053 27.0888 27.0888C26.5053 27.6722 25.714 28 24.8889 28H3.11111C2.28599 28 1.49467 27.6722 0.911223 27.0888C0.327777 26.5053 0 25.714 0 24.8889V3.11111C0 2.28599 0.327777 1.49467 0.911223 0.911223C1.49467 0.327777 2.28599 0 3.11111 0H24.8889ZM24.1111 24.1111V15.8667C24.1111 14.5217 23.5768 13.2319 22.6258 12.2808C21.6748 11.3298 20.3849 10.7956 19.04 10.7956C17.7178 10.7956 16.1778 11.6044 15.4311 12.8178V11.0911H11.0911V24.1111H15.4311V16.4422C15.4311 15.2444 16.3956 14.2644 17.5933 14.2644C18.1709 14.2644 18.7248 14.4939 19.1333 14.9023C19.5417 15.3107 19.7711 15.8646 19.7711 16.4422V24.1111H24.1111ZM6.03556 8.64889C6.72865 8.64889 7.39337 8.37356 7.88346 7.88346C8.37356 7.39337 8.64889 6.72865 8.64889 6.03556C8.64889 4.58889 7.48222 3.40667 6.03556 3.40667C5.33833 3.40667 4.66966 3.68364 4.17665 4.17665C3.68364 4.66966 3.40667 5.33833 3.40667 6.03556C3.40667 7.48222 4.58889 8.64889 6.03556 8.64889ZM8.19778 24.1111V11.0911H3.88889V24.1111H8.19778Z"
                            fill="#0077B5"
                          />
                          <path
                            d="M24.1111 24.1111V15.8667C24.1111 14.5217 23.5768 13.2319 22.6258 12.2808C21.6748 11.3298 20.3849 10.7956 19.04 10.7956C17.7178 10.7956 16.1778 11.6044 15.4311 12.8178V11.0911H11.0911V24.1111H15.4311V16.4422C15.4311 15.2444 16.3956 14.2644 17.5933 14.2644C18.1709 14.2644 18.7248 14.4939 19.1333 14.9023C19.5417 15.3107 19.7711 15.8646 19.7711 16.4422V24.1111H24.1111Z"
                            fill="white"
                          />
                          <path
                            d="M8.19778 24.1111V11.0911H3.88889V24.1111H8.19778Z"
                            fill="white"
                          />
                          <path
                            d="M6.03556 8.64889C6.72865 8.64889 7.39337 8.37356 7.88346 7.88346C8.37356 7.39337 8.64889 6.72865 8.64889 6.03556C8.64889 4.58889 7.48222 3.40667 6.03556 3.40667C5.33833 3.40667 4.66966 3.68364 4.17665 4.17665C3.68364 4.66966 3.40667 5.33833 3.40667 6.03556C3.40667 7.48222 4.58889 8.64889 6.03556 8.64889Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_769_69949">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer__wrapper_bottom}>
              <span className={styles.footer__bottom_reserved}>
                {t("footer.reserved")}
              </span>
              <div className={styles.footer__bottom_theme}>
                <label className={styles.ui_switch}>
                  <input
                    type="checkbox"
                    checked={resolvedTheme === "dark"}
                    onChange={themeHandler}
                  />
                  <div className={styles.slider}>
                    <div className={styles.circle}></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__section_vector}>
          <Image
            priority={true}
            width={2000}
            height={240}
            src="/images/SOMMERI.svg"
            alt="sommeri vector"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
