import Header from "@/app/components/global/header/Header";
import HomePage from "@/app/components/pages/home/HomePage";
import Footer from "@/app/components/global/footer/Footer";

import dynamic from "next/dynamic";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <ContactFormPopup />
      <ThanksPopup />
      <Header />
      <HomePage />
      <Footer />
      <QuickContacts />
    </div>
  );
}
