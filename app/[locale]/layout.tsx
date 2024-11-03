import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import ReduxProvider from "@/app/redux/ReduxProvider";
import Header from "@/app/components/global/header/Header";
import "../globals.css";
import dynamic from "next/dynamic";

const montserrat = Montserrat({ subsets: ["latin"] });

const DynamicCustomCursor = dynamic(
  () => import("@/app/components/UI/customCursor/CustomCursor")
);

const DynamicContactFormPopup = dynamic(
  () => import("@/app/components/global/contactFormPopup/ContactFormPopup")
);

const DynamicThanksPopup = dynamic(
  () => import("@/app/components/global/thanksPopup/ThanksPopup")
);

const DynamicQuickContacts = dynamic(
  () => import("@/app/components/global/quickContacts/QuickContacts")
);

const DynamicFooter = dynamic(
  () => import("@/app/components/global/footer/Footer")
);

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export const metadata: Metadata = {
  title:
    "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
  description:
    "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads",

  openGraph: {
    type: "website",
    url: "https://sommeri.com",
    siteName: "sommeri.com",
    locale: "uk_UA",
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: "",
  },

  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: "",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const currentLocale: any = locale || "uk";
  const messages = await getMessages(currentLocale);
  const canonicalUrl = `https://sommeri.com/${locale}`;

  return (
    <html lang={currentLocale}>
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://sommeri.com/uk" hrefLang="uk" />
        <link rel="alternate" href="https://sommeri.com/en" hrefLang="en" />
        {/* <link
          rel="preload"
          href="/_next/static/media/e1c529c04de64b40-s.p.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/9ada0df53ab178f5.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/9e464c14c56fb0c2.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/33c84c596eeb8e3b.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/ca539c6bbad8d7f4.css"
          data-precedence="next"
        />
        <link
          rel="preload"
          as="script"
          fetchPriority="low"
          href="/_next/static/chunks/webpack-88c31c4ecd0bb0a9.js"
        />
        <script
          src="/_next/static/chunks/63-69bba07a7ce4a46b.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/main-app-76989af02a108488.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/87-43e95f08a05c9fac.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/117-d752605e1aad8996.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/367-913de9e7aa55f251.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/555-d96f8db8f46473a5.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/742-6a7e66146f26f71f.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/824.c32078f4a6997550.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/933-fcbaf2b9e90ec4ff.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/992-36d80e39d293859e.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/c15bf2b0-19ff368ffb2158b2.js"
          async
        ></script>
        <script
          src="/_next/static/chunks/fd9d1056-339bd7b6b2457036.js"
          async
        ></script> */}
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Header />
            <DynamicCustomCursor />
            <DynamicContactFormPopup />
            <DynamicThanksPopup />
            <DynamicQuickContacts />
            {children}
            <DynamicFooter />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
