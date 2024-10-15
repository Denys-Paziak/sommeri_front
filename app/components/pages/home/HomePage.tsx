import Hero from "@/app/components/pages/home/hero/Hero";
import Services from "@/app/components/pages/home/services/Services";
import About from "@/app/components/pages/home/about/About";
import OurProjects from "@/app/components/pages/home/ourProjects/OurProjects";
import ClientsSay from "@/app/components/pages/home/clientsSay/ClientsSay";
import WhyUs from "@/app/components/pages/home/whyUs/WhyUs";
import Faq from "@/app/components/pages/home/faq/Faq";
import Contact from "@/app/components/pages/home/contact/Contact";
import {
  getCategories,
  getFAQ,
  getProjects,
  getReviews,
} from "@/app/utils/server/server";
import Technologies from "@/app/components/pages/home/technologies/Technologies";

const HomePage = async () => {
  let posts = await getProjects();
  let categories = await getCategories();
  let faqItems = await getFAQ();
  let reviews = await getReviews();

  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Technologies />
      <OurProjects posts={posts} categories={categories} />
      <ClientsSay reviews={reviews} />
      <Faq faqItems={faqItems} />
      {/*<Contact />*/}
    </>
  );
};

export default HomePage;
