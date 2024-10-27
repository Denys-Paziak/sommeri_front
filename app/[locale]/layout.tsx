import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import ReduxProvider from "@/app/redux/ReduxProvider";
import Header from "@/app/components/global/header/Header";
import Footer from "@/app/components/global/footer/Footer";
import "../globals.css";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";

const inter = Inter({ subsets: ["latin"] });

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export const metadata: Metadata = {
  title:
    "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
  description:
    "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads. Замовте комплексні IT рішення для вашого бізнесу.",
  keywords:
    "розробка сайтів, сайт під ключ, сайт візитка, мобільний додаток, веб-дизайн, SEO оптимізація, Google Ads, комплексні IT рішення, створення сайту Україна, веб-студія Київ, Sommeri, веб студія Sommeri, створити сайт, просування сайтів, розробка додатків, SEO Київ, веб-студія Україна",
  openGraph: {
    type: "website",
    url: "https://sommeri.com",
    locale: "uk_UA",
    siteName: "sommeri.com",
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: [
      {
        url: "https://sommeri.com/path-to-your-image.jpg",
        width: 800,
        height: 600,
        alt: "Sommeri - Веб-Студія",
      },
    ],
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

  return (
    <html lang={currentLocale}>
      <head>
        <link rel="canonical" href="https://sommeri.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://sommeri.com/uk" hrefLang="uk" />
        <link rel="alternate" href="https://sommeri.com/en" hrefLang="en" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Header />
            <CustomCursor />
            <ContactFormPopup />
            <ThanksPopup />
            <QuickContacts />
            {children}
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
