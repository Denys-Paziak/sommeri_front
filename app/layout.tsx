import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/app/redux/ReduxProvider";
import Header from "@/app/components/global/header/Header";
import Footer from "@/app/components/global/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Розробка Сайтів Під Ключ - Веб-Студія Sommeri | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
  description:
    "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads. Замовте комплексні IT рішення для вашого бізнесу.",
  keywords:
    "розробка сайтів, сайт під ключ, сайт візитка, мобільний додаток, веб-дизайн, SEO оптимізація, Google Ads, комплексні IT рішення, створення сайту Україна, веб-студія Київ, Sommeri, веб студія Sommeri, створити сайт, просування сайтів, розробка додатків, SEO Київ, веб-студія Україна",
  openGraph: {
    type: "website",
    url: "https://sommeri.com", // URL вашого сайту
    locale: "uk_UA",
    siteName: "sommeri.com",
    title:
      "Розробка Сайтів Під Ключ - Веб-Студія Sommeri | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: [
      {
        url: "https://sommeri.com/path-to-your-image.jpg", // Додайте шлях до зображення для соцмереж
        width: 800,
        height: 600,
        alt: "Sommeri - Веб-Студія",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href="https://sommeri.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://sommeri.com/ua" hrefLang="ua" />
        <link rel="alternate" href="https://sommeri.com/en" hrefLang="en" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
