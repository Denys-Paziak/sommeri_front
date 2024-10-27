// `use client`;

// import Button from "@/app/components/UI/button/Button";
// import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
// import Image from "next/image";
// import styles from "@/app/components/UI/notFound/NotFound.module.css";
// import Link from "next/link";
// import { NextIntlClientProvider, useTranslations } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { useEffect, useState } from "react";

// export default function NotFound() {
//   const [messages, setMessages] = useState<any>("");
//   const t = useTranslations("404");

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getMessages();
//       setMessages(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         <NextIntlClientProvider messages={messages}>
//           <div className={styles.not__found_section}>
//             <div className="container">
//               <div className={styles.not__found_wrapper}>
//                 <div className={styles.not__found_robot}>
//                   <Image
//                     width={620}
//                     height={240}
//                     className={styles.not__robot_img}
//                     src="/images/404-vector.svg"
//                     alt="404 robot img"
//                   />
//                 </div>
//                 <div className={styles.not__found_content}>
//                   <div className={styles.not__content_info}>
//                     <TitleWrapper>{t("title")}</TitleWrapper>
//                     <p className={styles.not__found_text}>{t("text")}</p>
//                   </div>
//                   <Link href={"/"}>
//                     <Button isRounded={true} type={"button"}>
//                       {t("button")}
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.not__found_vector}>
//               <Image
//                 width={2000}
//                 height={880}
//                 className={styles.not__vector_img}
//                 src="/images/404-bg.png"
//                 alt="404 background img"
//               />
//             </div>
//           </div>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import Button from "@/app/components/UI/button/Button";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import Image from "next/image";
import styles from "@/app/components/UI/notFound/NotFound.module.css";
import Link from "next/link";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export default function NotFound({ messages }: { messages: any }) {
  const t = useTranslations("404");

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={styles.not__found_section}>
            <div className="container">
              <div className={styles.not__found_wrapper}>
                <div className={styles.not__found_robot}>
                  <Image
                    width={620}
                    height={240}
                    className={styles.not__robot_img}
                    src="/images/404-vector.svg"
                    alt="404 robot img"
                  />
                </div>
                <div className={styles.not__found_content}>
                  <div className={styles.not__content_info}>
                    <TitleWrapper>{t("title")}</TitleWrapper>
                    <p className={styles.not__found_text}>{t("text")}</p>
                  </div>
                  <Link href={"/"}>
                    <Button isRounded={true} type={"button"}>
                      {t("button")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.not__found_vector}>
              <Image
                width={2000}
                height={880}
                className={styles.not__vector_img}
                src="/images/404-bg.png"
                alt="404 background img"
              />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

interface iProps {
  locale: string;
}

export async function getStaticProps({ locale }: iProps) {
  const messages = await getMessages(locale);
  return {
    props: { messages },
  };
}
