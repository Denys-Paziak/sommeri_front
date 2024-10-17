import HomePage from "@/app/components/pages/home/HomePage";

import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";
import ThanksPopup from "@/app/components/global/thanksPopup/ThanksPopup";
import ContactFormPopup from "@/app/components/global/contactFormPopup/ContactFormPopup";
import QuickContacts from "@/app/components/global/quickContacts/QuickContacts";

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <ContactFormPopup />
      <ThanksPopup />
      <QuickContacts />
      <HomePage />
    </div>
  );
}
