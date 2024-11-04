import Hero from "@/app/components/pages/home/hero/Hero";
import About from "@/app/components/pages/home/about/About";
import {
  getCategories,
  getFAQ,
  getProjects,
  getReviews,
  getTechnologiesWay,
} from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";
import dynamic from "next/dynamic";

const DynamicWhyUs = dynamic(
  () => import("@/app/components/pages/home/whyUs/WhyUs")
);

const DynamicServices = dynamic(
  () => import("@/app/components/pages/home/services/Services")
);

const DynamicTechnologies = dynamic(
  () => import("@/app/components/pages/home/technologies/Technologies")
);

const DynamicOurProjects = dynamic(
  () => import("@/app/components/pages/home/ourProjects/OurProjects")
);

const DynamicClientsSay = dynamic(
  () => import("@/app/components/pages/home/clientsSay/ClientsSay")
);
const DynamicFaq = dynamic(() => import("@/app/components/pages/home/faq/Faq"));

const DynamicContact = dynamic(
  () => import("@/app/components/pages/home/contact/Contact")
);

export default async function Home({ params }: { params: { locale: string } }) {
  let posts = await getProjects(params.locale);
  let categories = await getCategories(params.locale);
  let faqItems = await getFAQ(params.locale);
  let reviews = await getReviews(params.locale);
  let technologies = await getTechnologiesWay(params.locale);

  if (!posts && !categories && !technologies && !faqItems && !reviews) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <About />
      <DynamicWhyUs />
      <DynamicServices />
      <DynamicTechnologies technologies={technologies} />
      <DynamicOurProjects posts={posts} categories={categories} />
      <DynamicClientsSay reviews={reviews} />
      <DynamicFaq faqItems={faqItems} />
      <DynamicContact />
    </>
  );
}
