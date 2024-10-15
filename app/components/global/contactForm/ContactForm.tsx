"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { sendMessageWithFileToTelegram } from "@/app/api/telegram";
import axios from "axios";
import Button from "../../UI/button/Button";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  service: { label: string | null } | null;
  message: string;
}

const ContactForm = () => {
  const [fileName, setFileName] = useState("");
  const [userCountryCode, setUserCountryCode] = useState("ua");
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: null,
      message: "",
    },
  });

  const services = [
    { value: "website", label: "Website Development" },
    { value: "web-app-design", label: "Web & App Design" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "google-ads", label: "Google Ads" },
    { value: "seo", label: "SEO Optimization" },
    {
      value: "comprehensive-it-solutions",
      label: "Comprehensive IT Solutions",
    },
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setAcceptedFiles(acceptedFiles);
      setFileName(acceptedFiles[0].name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const onSubmit = async (data: IFormData) => {
    const message = `
    🔔Нове повідомлення з сайту🔔
    ----------------------------
    
    Ім'я: ${data.name}
    Пошта: ${data.email}
    Телефон: ${data.phone}
    Послуга: ${data.service?.label}
    Коментар: ${data.message !== "" ? data.message : "Коментар не додано"}
    Файл: ${fileName ? fileName : "Файл не завантажено"}
    
    -------------------------------------
    🚀Обробіть заявку як умога найшвидше🚀
    `;

    console.log(message);
    const file = acceptedFiles.length > 0 ? acceptedFiles[0] : null;

    await sendMessageWithFileToTelegram(message, file);
    reset();

    setFileName("");
    setAcceptedFiles([]);
    setValue("phone", "");
  };

  const fetchUserCountry = async () => {
    try {
      const response = await axios.get(
        "https://ipinfo.io?token=2256f517d09a51"
      );
      const countryCode = response.data.country.toLowerCase();
      setUserCountryCode(countryCode);
    } catch (error) {
      console.error("Error fetching user country: ", error);
    }
  };

  useEffect(() => {
    fetchUserCountry();
  }, []);

  return (
    <div className={styles.contact__block}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contact__block_form}
      >
        <div className={styles.contact__form_fields}>
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

          {/* Phone Input */}
          <div
            className={`${styles.contact__fields_block} ${
              errors.phone ? styles.error : ""
            }`}
          >
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                minLength: {
                  value: 10,
                  message: "",
                },
              }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  enableSearch={true}
                  placeholder={"099-000-00-00"}
                  inputClass={"contact__block_input"}
                  buttonClass={"contact__block_lang"}
                  country={userCountryCode}
                  regions={"europe"}
                  inputProps={{
                    required: true,
                    autoFocus: false,
                  }}
                />
              )}
            />
          </div>

          {/* Service Select */}
          <div
            className={`${styles.contact__fields_block} ${
              errors.service ? styles.error : ""
            }`}
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9335 8.28554C24.0926 8.71822 23.9583 9.20063 23.6152 9.50898L21.4617 11.4685C21.5164 11.8813 21.5463 12.304 21.5463 12.7317C21.5463 13.1594 21.5164 13.5821 21.4617 13.9949L23.6152 15.9544C23.9583 16.2627 24.0926 16.7452 23.9335 17.1778C23.7146 17.7697 23.4511 18.3366 23.1477 18.8837L22.9139 19.2865C22.5857 19.8336 22.2177 20.3508 21.8148 20.8382C21.5214 21.1963 21.034 21.3156 20.5964 21.1764L17.8262 20.2961C17.1598 20.8084 16.4238 21.2361 15.638 21.5593L15.0163 24.3991C14.9169 24.8517 14.5687 25.2097 14.1112 25.2843C13.4249 25.3987 12.7186 25.4584 11.9975 25.4584C11.2764 25.4584 10.5702 25.3987 9.88385 25.2843C9.42631 25.2097 9.07818 24.8517 8.97871 24.3991L8.35705 21.5593C7.57126 21.2361 6.83521 20.8084 6.16879 20.2961L3.40363 21.1813C2.96597 21.3206 2.47859 21.1963 2.18516 20.8432C1.78232 20.3558 1.4143 19.8386 1.08606 19.2915L0.852315 18.8887C0.548942 18.3416 0.285357 17.7746 0.0665309 17.1828C-0.0926152 16.7501 0.0416643 16.2677 0.384823 15.9594L2.53827 13.9999C2.48356 13.5821 2.45372 13.1594 2.45372 12.7317C2.45372 12.304 2.48356 11.8813 2.53827 11.4685L0.384823 9.50898C0.0416643 9.20063 -0.0926152 8.71822 0.0665309 8.28554C0.285357 7.69372 0.548942 7.12676 0.852315 6.5797L1.08606 6.17686C1.4143 5.62979 1.78232 5.11257 2.18516 4.62518C2.47859 4.2671 2.96597 4.14774 3.40363 4.287L6.17376 5.16727C6.84019 4.65502 7.57624 4.22732 8.36202 3.90405L8.98368 1.06429C9.08315 0.611718 9.43128 0.253639 9.88883 0.179039C10.5751 0.0596798 11.2814 0 12.0025 0C12.7236 0 13.4298 0.0596798 14.1161 0.174066C14.5737 0.248666 14.9218 0.606744 15.0213 1.05932L15.643 3.89908C16.4287 4.22234 17.1648 4.65005 17.8312 5.1623L20.6013 4.28202C21.039 4.14277 21.5264 4.2671 21.8198 4.62021C22.2226 5.10759 22.5907 5.62482 22.9189 6.17188L23.1527 6.57472C23.456 7.12179 23.7196 7.68875 23.9384 8.28057L23.9335 8.28554ZM12.0025 16.7103C13.0577 16.7103 14.0697 16.2912 14.8158 15.545C15.562 14.7989 15.9811 13.7869 15.9811 12.7317C15.9811 11.6765 15.562 10.6645 14.8158 9.91835C14.0697 9.17221 13.0577 8.75303 12.0025 8.75303C10.9473 8.75303 9.9353 9.17221 9.18916 9.91835C8.44301 10.6645 8.02383 11.6765 8.02383 12.7317C8.02383 13.7869 8.44301 14.7989 9.18916 15.545C9.9353 16.2912 10.9473 16.7103 12.0025 16.7103Z"
                fill="white"
                fillOpacity="0.75"
              />
            </svg>
            <Controller
              name="service"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={services}
                  placeholder={"Select service*"}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused
                        ? "transparent"
                        : "transparent",
                      boxShadow: "transparent",
                      padding: "0",
                      background: "transparent",
                      ":hover": {
                        borderColor: "transparent",
                      },
                    }),
                    menu: (baseStyles) => ({
                      ...baseStyles,
                      background: "#1c1c1c",
                      color: "var(--gray)",
                      padding: "0",
                      border: "1px solid #444",
                      borderRadius: "8px",
                    }),
                    option: (baseStyles) => ({
                      ...baseStyles,
                      ":hover": {
                        background: "var(--dark)",
                      },
                      ":active": {
                        background: "var(--dark)",
                      },
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                    colors: {
                      ...theme.colors,
                      primary25: "var(--dark)",
                      primary: "#1c1c1c",
                      neutral80: "var(--gray)",
                    },
                  })}
                />
              )}
            />
          </div>

          {/* Textarea for message */}
          <div className={styles.contact__fields_textarea}>
            <textarea
              className={styles.contact__block_textarea}
              placeholder="How can we help you?"
              {...register("message", {
                required: false,
              })}
            ></textarea>
          </div>

          {/* File Upload */}
          <div className={styles.contact__fields_block}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.8869 3.36324C11.8289 0.546238 16.5869 0.546238 19.5299 3.36324C22.4909 6.19724 22.4909 10.8072 19.5299 13.6422L11.5819 21.2502C9.4919 23.2502 6.1159 23.2502 4.0259 21.2502C3.52648 20.78 3.12852 20.2125 2.85651 19.5827C2.5845 18.953 2.44418 18.2742 2.44418 17.5882C2.44418 16.9022 2.5845 16.2235 2.85651 15.5937C3.12852 14.964 3.52648 14.3965 4.0259 13.9262L11.8599 6.42824C12.4638 5.85769 13.2631 5.53982 14.0939 5.53982C14.9247 5.53982 15.724 5.85769 16.3279 6.42824C16.6256 6.70871 16.8628 7.04708 17.0249 7.42258C17.187 7.79807 17.2706 8.20274 17.2706 8.61174C17.2706 9.02073 17.187 9.42541 17.0249 9.8009C16.8628 10.1764 16.6256 10.5148 16.3279 10.7952L8.4379 18.3492C8.36673 18.4174 8.28282 18.4709 8.19098 18.5066C8.09914 18.5423 8.00116 18.5596 7.90264 18.5575C7.80412 18.5553 7.70698 18.5338 7.61677 18.4941C7.52657 18.4545 7.44506 18.3974 7.3769 18.3262C7.30875 18.2551 7.25528 18.1712 7.21955 18.0793C7.18382 17.9875 7.16653 17.8895 7.16866 17.791C7.1708 17.6925 7.19232 17.5953 7.23199 17.5051C7.27167 17.4149 7.32873 17.3334 7.3999 17.2652L15.2899 9.71224C15.441 9.57159 15.5614 9.40133 15.6438 9.21208C15.7262 9.02283 15.7687 8.81864 15.7687 8.61224C15.7687 8.40584 15.7262 8.20165 15.6438 8.0124C15.5614 7.82315 15.441 7.65289 15.2899 7.51224C14.9653 7.20905 14.5376 7.04041 14.0934 7.04041C13.6492 7.04041 13.2215 7.20905 12.8969 7.51224L5.0629 15.0102C4.70987 15.3405 4.42842 15.7397 4.236 16.1831C4.04358 16.6266 3.94429 17.1048 3.94429 17.5882C3.94429 18.0716 4.04358 18.5499 4.236 18.9934C4.42842 19.4368 4.70987 19.836 5.0629 20.1662C6.5729 21.6112 9.0349 21.6112 10.5449 20.1662L18.4929 12.5582C20.8369 10.3142 20.8369 6.69024 18.4929 4.44624C16.1299 2.18524 12.2869 2.18524 9.9229 4.44624L3.5199 10.5762C3.37629 10.714 3.18382 10.7891 2.98485 10.785C2.78587 10.7809 2.59668 10.6979 2.4589 10.5542C2.32112 10.4106 2.24604 10.2182 2.25016 10.0192C2.25429 9.82021 2.33729 9.63102 2.4809 9.49324L8.8869 3.36324Z"
                fill="white"
                fillOpacity="0.75"
              />
            </svg>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {fileName ? (
                <p className={styles.contact__block_file}>{fileName}</p>
              ) : isDragActive ? (
                <p className={styles.contact__block_file}>
                  Drop the files here...
                </p>
              ) : (
                <p className={styles.contact__block_file}>
                  Drop the files here...
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.contact__form_action}>
          <Button type={"submit"}>Send message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
