"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ContactFormPopup.module.css";
import { sendMessageToTelegram } from "@/app/api/telegram";
import { RootState } from "@/app/redux/store";
import { closePopup, openPopup } from "@/app/redux/popupSlice";
import { openThanksPopup } from "@/app/redux/thanksPopupSlice";
import PopupWrapper from "@/app/components/UI/popupWrapper/PopupWrapper";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import Button from "@/app/components/UI/button/Button";
import { useTheme } from "next-themes";
import {
  linkOnTelegram,
  linkOnWhatsApp,
  phoneNumber,
  phoneNumberShow,
} from "@/configSommeriData";

interface IFormData {
  name: string;
  email: string;
}

const ContactFormPopup = () => {
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const dispatch = useDispatch();
  const t = useTranslations();
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const startPopupTimer = useCallback(() => {
    setTimeout(() => {
      dispatch(openPopup());
    }, 5 * 60 * 1000);
  }, [dispatch]);

  useEffect(() => {
    startPopupTimer();
  }, [startPopupTimer]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      startPopupTimer();
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, startPopupTimer]);

  const onSubmit = async (data: IFormData) => {
    const message = `
    🔔Нове повідомлення з сайту🔔
    ----------------------------

    Ім'я: ${data.name}
    Пошта: ${data.email}

    -------------------------------------
    🚀Обробіть заявку як умога найшвидше🚀
  `;

    await sendMessageToTelegram(
      message,
      process.env.NEXT_PUBLIC_TELEGRAM_TOKEN,
      process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    );
    reset();
    dispatch(closePopup());
    dispatch(openThanksPopup());
  };

  return (
    isClient && <div
      className={
        isOpen
          ? `${styles.modal} ${styles.open}`
          : `${styles.modal} ${styles.close}`
      }
    >
      <div
        className={styles.overlay}
        onClick={() => dispatch(closePopup())}
      ></div>
      <PopupWrapper>
        <div
          className={
            resolvedTheme == "light"
              ? styles.contact__popup_wrapper_light
              : styles.contact__popup_wrapper
          }
        >
          <button
            type="button"
            className={styles.contact__wrapper_close}
            onClick={() => dispatch(closePopup())}
            aria-label="close popup"
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
          <div className={styles.contact__wrapper_heading}>
            <TitleWrapper>{t("popupForm.title")}</TitleWrapper>
            <p className={styles.contact__heading_subtitle}>
              {t("popupForm.subtitle")}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contact__wrapper_form}
          >
            <div className={styles.contact__wrapper_fields}>
              <div
                className={`${styles.contact__fields_block} ${errors.name ? styles.error : ""
                  }`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11.6668C16.5774 11.6668 18.6667 9.57749 18.6667 7.00016C18.6667 4.42283 16.5774 2.3335 14 2.3335C11.4227 2.3335 9.33337 4.42283 9.33337 7.00016C9.33337 9.57749 11.4227 11.6668 14 11.6668Z"
                    fill="white"
                    fillOpacity="0.75"
                  />
                  <path
                    d="M23.3333 20.4165C23.3333 23.3157 23.3333 25.6665 14 25.6665C4.66663 25.6665 4.66663 23.3157 4.66663 20.4165C4.66663 17.5173 8.84563 15.1665 14 15.1665C19.1543 15.1665 23.3333 17.5173 23.3333 20.4165Z"
                    fill="white"
                    fillOpacity="0.75"
                  />
                </svg>
                <label htmlFor="name"></label>
                <input
                  id="name"
                  type="text"
                  className={styles.contact__block_input}
                  placeholder={t("contactForm.input1")}
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>

              <div
                className={`${styles.contact__fields_block} ${errors.email ? styles.error : ""
                  }`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3334 4.6665H4.66671C3.38337 4.6665 2.33337 5.7165 2.33337 6.99984V20.9998C2.33337 22.2832 3.38337 23.3332 4.66671 23.3332H23.3334C24.6167 23.3332 25.6667 22.2832 25.6667 20.9998V6.99984C25.6667 5.7165 24.6167 4.6665 23.3334 4.6665ZM22.8667 9.62484L15.2367 14.3965C14.4784 14.8748 13.5217 14.8748 12.7634 14.3965L5.13337 9.62484C5.01639 9.55917 4.91395 9.47044 4.83224 9.36403C4.75054 9.25762 4.69128 9.13574 4.65805 9.00577C4.62481 8.87579 4.61829 8.74043 4.63889 8.60786C4.65949 8.4753 4.70677 8.34829 4.77787 8.23452C4.84897 8.12076 4.94242 8.0226 5.05255 7.946C5.16269 7.86939 5.28722 7.81593 5.41862 7.78885C5.55001 7.76177 5.68554 7.76163 5.81699 7.78844C5.94844 7.81525 6.07308 7.86846 6.18337 7.94484L14 12.8332L21.8167 7.94484C21.927 7.86846 22.0516 7.81525 22.1831 7.78844C22.3145 7.76163 22.4501 7.76177 22.5815 7.78885C22.7129 7.81593 22.8374 7.86939 22.9475 7.946C23.0577 8.0226 23.1511 8.12076 23.2222 8.23452C23.2933 8.34829 23.3406 8.4753 23.3612 8.60786C23.3818 8.74043 23.3753 8.87579 23.342 9.00577C23.3088 9.13574 23.2495 9.25762 23.1678 9.36403C23.0861 9.47044 22.9837 9.55917 22.8667 9.62484Z"
                    fill="white"
                    fillOpacity="0.75"
                  />
                </svg>
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email"
                  className={styles.contact__block_input}
                  placeholder={t("contactForm.input2")}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "",
                    },
                  })}
                />
              </div>
            </div>

            <div className={styles.contact__wrapper_contacts}>
              <Link
                href={linkOnTelegram}
                target="_blank"
                className={styles.contact__contacts_block}
              >
                <div className={styles.contact__block_media}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2fca70"
                  >
                    <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"></path>
                  </svg>
                </div>
                <div className={styles.contact__block_info}>
                  <span className={styles.contact__info_label}>
                    {t("popupForm.social1Label")}
                  </span>
                  <p className={styles.contact__info_text}>
                    {t("popupForm.social1Text")}
                  </p>
                </div>
              </Link>
              <Link
                href={linkOnWhatsApp}
                target="_blank"
                className={styles.contact__contacts_block}
              >
                <div className={styles.contact__block_media}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2fca70"
                  >
                    <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
                  </svg>
                </div>
                <div className={styles.contact__block_info}>
                  <span className={styles.contact__info_label}>
                    {t("popupForm.social2Label")}
                  </span>
                  <p className={styles.contact__info_text}>
                    {t("popupForm.social2Text")}
                  </p>
                </div>
              </Link>
              <Link
                href={`tel:${phoneNumber}`}
                className={styles.contact__contacts_block}
              >
                <div className={styles.contact__block_media}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2fca70"
                  >
                    <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                  </svg>
                </div>
                <div className={styles.contact__block_info}>
                  <span className={styles.contact__info_label}>
                    {t("popupForm.social3Label")}
                  </span>
                  <p className={styles.contact__info_text}>{phoneNumberShow}</p>
                </div>
              </Link>
            </div>

            {/* agree privacy policy */}
            <div className={styles.contact__form_agree}>
              <p className={styles.contact__block_agree}>
                {t("contactForm.agree1")}{" "}
                <Link
                  onClick={() => dispatch(closePopup())}
                  href={"/privacy-policy"}
                  className={styles.contact__agree_link}
                >
                  {t("contactForm.agree2")}
                </Link>
              </p>
            </div>

            <div className={styles.contact__wrapper_action}>
              <Button
                isRounded={false}
                type={"submit"}
                ariaLabel={t("contactForm.button")}
              >
                {" "}
                {t("contactForm.button")}
              </Button>
            </div>
          </form>
        </div>
      </PopupWrapper>
    </div>
  );
};

export default ContactFormPopup;
