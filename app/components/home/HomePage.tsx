import Hero from "@/app/components/home/hero/Hero";
import Services from "@/app/components/home/services/Services";
import About from "@/app/components/home/about/About";
import Technologies from "@/app/components/home/technologies/Technologies";
import OurProjects from "@/app/components/home/ourProjects/OurProjects";
import ClientsSay from "@/app/components/home/clientsSay/ClientsSay";
import WhyUs from "@/app/components/home/whyUs/WhyUs";
import Faq from "@/app/components/home/faq/Faq";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Technologies />
      <OurProjects />
      <ClientsSay />
      <WhyUs />
      <Faq />
    </>
  );
};

export default HomePage;
