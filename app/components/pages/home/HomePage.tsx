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
import Loader from "@/app/components/global/loader/Loader";
import { headers } from "next/headers";

const HomePage = async ({ locale }: { locale: string }) => {
    console.log('Locale from URL:', locale);
    console.log(locale)

    let posts = await getProjects(locale);
    let categories = await getCategories(locale);
    let faqItems = await getFAQ(locale);
    let reviews = await getReviews(locale);



    if (!posts && !categories && !faqItems && !reviews) {
        return <Loader />;
    }

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
            <Contact />
        </>
    );
};

export default HomePage;
