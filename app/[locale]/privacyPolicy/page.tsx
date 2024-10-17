import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import styles from "./PrivacyPolicy.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";

const PrivacyPolicy = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.privacy__policy_wrapper}>
          <TitleWrapper>Політика конфіденційності</TitleWrapper>
          <div className={styles.privacy__wrapper_main}>
            <p className={styles.privacy__policy_text}>
              У студії{" "}
              <span className={styles.privacy__policy_bold}>Sommeri</span> ми
              відповідально ставимося до захисту ваших персональних даних і
              забезпечення прозорості під час їх використання. Ця Політика
              конфіденційності пояснює, які дані ми збираємо, як використовуємо
              і як дбаємо про їх безпеку, коли ви користуєтесь нашим сайтом і
              послугами.
            </p>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                1. Дані, які ми збираємо
              </h3>
              <p className={styles.privacy__policy_text}>
                Ми можемо збирати такі типи інформації:
              </p>
              <ul className={styles.privacy__policy_list}>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    <span className={styles.privacy__policy_bold}>
                      Особиста інформація:
                    </span>{" "}
                    ваше ім’я, електронна адреса, номер телефону та інші
                    контактні дані, які ви надаєте під час реєстрації або
                    спілкування з нами.
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    <span className={styles.privacy__policy_bold}>
                      Дані про користування сайтом:
                    </span>{" "}
                    інформація про вашу активність на сайті, включаючи
                    IP-адресу, тип браузера та переглянуті сторінки.
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    <span className={styles.privacy__policy_bold}>
                      Cookies:
                    </span>{" "}
                    файли, що допомагають нам аналізувати ваші уподобання та
                    поліпшувати ваш досвід користування сайтом.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                2. Використання ваших даних
              </h3>
              <p className={styles.privacy__policy_text}>
                Ми використовуємо ваші дані з наступними цілями:
              </p>
              <ul className={styles.privacy__policy_list}>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Надання послуг, що відповідають вашим потребам
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Відправка інформаційних листів та комунікація щодо наших
                    продуктів або сервісів, за умови вашої згоди.
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Аналіз поведінки користувачів для поліпшення функціоналу
                    сайту та контенту.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                3. Конфіденційність і захист
              </h3>
              <p className={styles.privacy__policy_text}>
                Ми застосовуємо сучасні технічні та організаційні заходи безпеки
                для захисту вашої інформації. Всі ваші дані зберігаються на
                захищених серверах, і доступ до них обмежений лише уповноваженим
                персоналом. Ми не передаємо ваші дані третім сторонам без вашої
                згоди, окрім випадків, передбачених законодавством.
              </p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                4. Збір і використання файлів Cookies
              </h3>
              <p className={styles.privacy__policy_text}>
                Наш сайт використовує файли cookies, які допомагають нам
                аналізувати поведінку відвідувачів та покращувати функціонал. Ви
                можете самостійно налаштувати свій браузер для блокування файлів
                cookies, але це може вплинути на зручність користування сайтом.
              </p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>5. Ваші права</h3>
              <p className={styles.privacy__policy_text}>
                Ви маєте право на доступ до своїх персональних даних, їх
                виправлення або видалення. Якщо ви бажаєте відмовитися від
                отримання інформаційних листів, ви можете зробити це в будь-який
                момент, скориставшись відповідним посиланням у листі або
                звернувшись до нас безпосередньо.
              </p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                6. Зміни в Політиці конфіденційності
              </h3>
              <p className={styles.privacy__policy_text}>
                Ми можемо оновлювати цю Політику конфіденційності, щоб
                відобразити зміни в нашій практиці або законодавстві. Будь-які
                зміни будуть публікуватися на цій сторінці, і у разі суттєвих
                змін, ми повідомимо вас через електронну пошту.
              </p>
            </div>
            <p className={styles.privacy__policy_text}>
              Якщо у вас виникли питання щодо Політики конфіденційності, будь
              ласка, звертайтеся до нас за адресою:{" "}
              <a href="#" className={styles.privacy__policy_link}>
                sales@sommeri.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PrivacyPolicy;
