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
  title: {
    default:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка | Інтернет магазин",
    template:
      "%s | Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка | Інтернет магазин",
  },
  description:
    "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads",

  openGraph: {
    type: "website",
    url: "https://sommeri.com",
    siteName: "Sommeri",
    locale: "uk_UA",
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка | Інтернет магазин",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: [
      {
        url: "https://sommeri.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sommeri - Розробка Сайтів Під Ключ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка | Інтернет магазин",
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
