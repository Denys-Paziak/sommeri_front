import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import styles from "./TermsOfUse.module.css";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";

const TermsOfUse = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <div className="terms__use_wrapper">
          <TitleWrapper>Умови користування</TitleWrapper>
          <div className={styles.privacy__wrapper_main}>
            <p className={styles.privacy__policy_text}>
              Ласкаво просимо до студії
              <span className={styles.privacy__policy_bold}>Sommeri</span>.
              Використовуючи наш вебсайт та послуги, ви погоджуєтесь
              дотримуватись та бути зв'язаними наступними умовами. Будь ласка,
              уважно ознайомтеся з ними перед використанням нашого сайту.
            </p>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                1. Прийняття умов
              </h3>
              <p className={styles.privacy__policy_text}>
                Користуючись вебсайтом студії Sommeri, ви підтверджуєте, що
                ознайомилися з цими Умовами користування, розумієте їх та
                погоджуєтеся з ними. Якщо ви не згодні з цими умовами, будь
                ласка, не користуйтеся нашим вебсайтом або послугами.
              </p>
            </div>
            <div className={styles.privacy__main_block}>
              <h3 className={styles.privacy__block_header}>
                2. Використання вебсайту
              </h3>
              <p className={styles.privacy__policy_text}>
                Ви погоджуєтесь використовувати вебсайт лише для законних цілей.
                Забороняється:
              </p>
              <ul className={styles.privacy__policy_list}>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Використовувати вебсайт у будь-який спосіб, що порушує чинне
                    законодавство або нормативні акти.
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Передавати або розповсюджувати шкідливе програмне
                    забезпечення, віруси або шкідливий код через вебсайт.
                  </p>
                </li>
                <li className={styles.privacy__list_item}>
                  <p className={styles.privacy__policy_text}>
                    Використовувати вебсайт для здійснення шахрайських або
                    незаконних дій.
                  </p>
                </li>
              </ul>
              <p className={styles.privacy__policy_text}>
                Ми залишаємо за собою право обмежити або припинити доступ до
                вебсайту, якщо вважаємо, що ви порушуєте ці умови.
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

export default TermsOfUse;
