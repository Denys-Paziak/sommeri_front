import Hero from "@/app/components/pages/home/hero/Hero";
import {
  getCategories,
  getFAQ,
  getProjects,
  getReviews,
  getTechnologiesWay,
} from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";
import dynamic from "next/dynamic";

const DynamicServices = dynamic(
  () => import("@/app/components/pages/home/services/Services")
);

const DynamicOurProjects = dynamic(
  () => import("@/app/components/pages/home/ourProjects/OurProjects")
);

const DynamicClientsSay = dynamic(
  () => import("@/app/components/pages/home/clientsSay/ClientsSay")
);

const DynamicAdvantages = dynamic(
  () => import("@/app/components/pages/home/advantages/Advantages")
);

const DynamicFaq = dynamic(() => import("@/app/components/pages/home/faq/Faq"));

const DynamicBrifLine = dynamic(
  () => import("@/app/components/global/brifLine/brifLine")
);

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
      <DynamicServices />
      <DynamicOurProjects posts={posts} categories={categories} />
      <DynamicBrifLine />
      <DynamicAdvantages />
      <DynamicClientsSay reviews={reviews} />
      <DynamicFaq faqItems={faqItems} />
      <DynamicContact />
    </>
  );
}
