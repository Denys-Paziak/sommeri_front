"use client";

import React, { useEffect } from "react";
import styles from "./ContactFormPopup.module.css";
import { useForm } from "react-hook-form";
import { sendMessageToTelegram } from "@/app/api/telegram";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { closePopup } from "@/app/redux/popupSlice";
import { openThanksPopup } from "@/app/redux/thanksPopupSlice";

interface IFormData {
  name: string;
  email: string;
}

const ContactFormPopup = () => {
  const isOpen = useSelector((state: RootState) => state.popup.isOpen);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onSubmit = async (data: IFormData) => {
    const message = `
    🔔Нове повідомлення з сайту🔔
    ----------------------------

    Ім'я: ${data.name}
    Пошта: ${data.email}

    -------------------------------------
    🚀Обробіть заявку як умога найшвидше🚀
  `;

    await sendMessageToTelegram(message);
    reset();
    dispatch(closePopup());
    dispatch(openThanksPopup());
  };

  if (!isOpen) return <></>;

  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={() => dispatch(closePopup())}
      ></div>
      <div className={styles.contact__form_popup}>
        <div className={styles.contact__popup_wrapper}>
          <button
            type="button"
            className={styles.contact__wrapper_close}
            onClick={() => dispatch(closePopup())}
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
            <h2 className={styles.contact__heading_title}>Contact Us</h2>
            <p className={styles.contact__heading_subtitle}>
              Leave your contact details and we'll get back to you shortly
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.contact__wrapper_form}
          >
            <div className={styles.contact__wrapper_fields}>
              {/* Name Input */}
              <div
                className={`${styles.contact__fields_block} ${
                  errors.name ? styles.error : ""
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
                <input
                  type="text"
                  className={styles.contact__block_input}
                  placeholder="Name*"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>

              {/* Email Input */}
              <div
                className={`${styles.contact__fields_block} ${
                  errors.email ? styles.error : ""
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
                <input
                  type="email"
                  className={styles.contact__block_input}
                  placeholder="Email*"
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

            <div className={styles.contact__wrapper_action}>
              <button className={styles.contact__action_button} type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPopup;
