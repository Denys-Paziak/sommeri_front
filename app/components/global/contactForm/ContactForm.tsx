import { useState } from "react";
import styles from "./ContactForm.module.css";
import InputMask from "react-input-mask";

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const services = [
    { value: "website", label: "Website develop." },
    { value: "web-design", label: "Web-design" },
    { value: "mobile-app", label: "Mobile app develop." },
    { value: "google-ads", label: "Google Ads" },
  ];

  const handleChange = (value: string) => {
    setSelectedService(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const validatePhone = () => {
    const pattern =
      /^\+\d{1,3}\s?\(?\d{1,3}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}$/;
    if (!pattern.test(phone)) {
      setPhoneError("Please enter a valid phone number starting with +380");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validatePhone();
    if (!phoneError) {
      console.log("Form submitted with phone:", phone);
    }
  };

  return (
    <div className={styles.contact__block}>
      <form className={styles.contact__block_form}>
        <div className={styles.contact__form_fields}>
          <div className={styles.contact__fields_block}>
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
            />
          </div>
          <div className={styles.contact__fields_block}>
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
            />
          </div>
          <div
            className={`${styles.contact__fields_block} ${styles.contact__phone_block}`}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3115 25.8217C17.6315 25.7599 12.8703 25.1019 7.88398 20.1167C2.89881 15.1304 2.24198 10.3704 2.17898 8.68922C2.08565 6.12722 4.04798 3.63872 6.31481 2.66689C6.58779 2.54901 6.88671 2.50414 7.18227 2.53666C7.47782 2.56918 7.75983 2.67798 8.00065 2.85239C9.86731 4.21272 11.1553 6.27072 12.2613 7.88889C12.5047 8.2444 12.6087 8.67702 12.5536 9.10431C12.4986 9.53161 12.2882 9.9237 11.9626 10.2059L9.68648 11.8964C9.57651 11.9758 9.49911 12.0924 9.46864 12.2246C9.43817 12.3568 9.45671 12.4955 9.52081 12.6151C10.0365 13.5519 10.9535 14.9472 12.0035 15.9972C13.0535 17.0472 14.5153 18.0249 15.5175 18.5989C15.6431 18.6694 15.791 18.6891 15.9308 18.654C16.0705 18.6188 16.1915 18.5315 16.2688 18.4099L17.7505 16.1547C18.0229 15.7929 18.4247 15.5505 18.8719 15.4783C19.319 15.4061 19.7767 15.5097 20.1491 15.7674C21.7906 16.9037 23.7063 18.1696 25.1086 19.9651C25.2972 20.2076 25.4172 20.4964 25.4559 20.8011C25.4947 21.1059 25.4509 21.4155 25.3291 21.6976C24.3526 23.9761 21.8816 25.9162 19.3115 25.8217Z"
                fill="white"
                fill-opacity="0.75"
              />
            </svg>
            <InputMask
              mask="+999 (999) 999-99-99"
              maskChar={null}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhone}
              placeholder="+123 (456) 789-01-23"
              className={styles.contact__block_input}
              required
            />
            {phoneError && <span className={styles.error}>{phoneError}</span>}
          </div>
          <div className={styles.contact__fields_services}>
            {services.map((service) => (
              <label
                key={service.value}
                className={`${styles.contact__services_item} ${
                  selectedService === service.value ? styles.selected : ""
                }`}
              >
                <input
                  type="radio"
                  name="service"
                  value={service.value}
                  checked={selectedService === service.value}
                  onChange={() => handleChange(service.value)}
                  className={styles.contact__radio}
                />
                {service.label}
              </label>
            ))}
          </div>
          <div className={styles.contact__fields_block}>
            <textarea
              className={styles.contact__block_textarea}
              placeholder="How can we help you?"
            ></textarea>
          </div>
        </div>
        <div className={styles.contact__form_action}>
          <button className={styles.contact__action_button} type="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
