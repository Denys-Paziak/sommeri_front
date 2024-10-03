import Hero from "@/app/components/pages/home/hero/Hero";
import Services from "@/app/components/pages/home/services/Services";
import About from "@/app/components/pages/home/about/About";
import OurProjects from "@/app/components/pages/home/ourProjects/OurProjects";
import ClientsSay from "@/app/components/pages/home/clientsSay/ClientsSay";
import WhyUs from "@/app/components/pages/home/whyUs/WhyUs";
import Faq from "@/app/components/pages/home/faq/Faq";
import {getCategories, getProjects} from "@/app/utils/server/server";

const HomePage = async () => {

    const postData: any = await getProjects();
    const posts = await postData.json();

    const categoriesData: any = await getCategories();
    const categories = await categoriesData.json();

  return (
    <>
      <Hero />
      <Services />
      <About />
      {/*<Technologies />*/}
      <OurProjects posts={posts} categories={categories}/>
      <ClientsSay />
      <WhyUs />
      <Faq />
    </>
  );
};

export default HomePage;
