import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import ReduxProvider from "@/app/redux/ReduxProvider";
import Header from "@/app/components/global/header/Header";
import Footer from "@/app/components/global/footer/Footer";
import "../globals.css";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";

const montserrat = Montserrat({ subsets: ["latin"] });

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export const metadata: Metadata = {
  title:
    "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
  description:
    "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads",

  //  Facebook Meta Tags
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

  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // замініть на ваш @username у Twitter
    title:
      "Sommeri - Розробка Сайтів Під Ключ | Сайт Візитка, Мобільний Додаток, SEO та Google Ads в Україні",
    description:
      "Веб-студія Sommeri пропонує професійну розробку сайтів під ключ у Києві та Україні: створення сайтів-візиток, розробка мобільних додатків, веб-дизайн, SEO оптимізація та Google Ads.",
    images: "", // Додайте URL до зображення, якщо є
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
        <link
          rel="preload"
          fetchPriority="high"
          as="style"
          href="/_next/static/css/09367faf19133558.css"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="style"
          href="/_next/static/css/app/%5Blocale%5D/page.css?v=1730305165517"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="style"
          href="/_next/static/css/93799b16dbe7cf26.css"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="style"
          href="/_next/static/css/572f9dc87f8a03b1.css"
        />
        <link
          rel="preload"
          fetchPriority="high"
          as="style"
          href="/_next/static/css/ca539c6bbad8d7f4.css"
        />
      </head>
      <body className={montserrat.className}>
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
