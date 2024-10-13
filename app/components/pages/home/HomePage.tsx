import Hero from "@/app/components/pages/home/hero/Hero";
import Services from "@/app/components/pages/home/services/Services";
import About from "@/app/components/pages/home/about/About";
import OurProjects from "@/app/components/pages/home/ourProjects/OurProjects";
import ClientsSay from "@/app/components/pages/home/clientsSay/ClientsSay";
import WhyUs from "@/app/components/pages/home/whyUs/WhyUs";
import Faq from "@/app/components/pages/home/faq/Faq";
import Contact from "@/app/components/pages/home/contact/Contact";
import {getCategories, getFAQ, getProjects, getReviews} from "@/app/utils/server/server";
import Technologies from "@/app/components/pages/home/technologies/Technologies";

const HomePage = async () => {
    let posts = [];
    let categories = [];
    let faqItems = [];
    let reviews = [];

    try {
        const postData: any = await getProjects();
        posts = await postData.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }

    try {
        const categoriesData: any = await getCategories();
        categories = categoriesData.json();
    } catch (error) {
        console.error("Error fetching categories:", error);
    }

    try {
        const postData: any = await getFAQ();
        faqItems = await postData.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }

    try {
        const postData: any = await getReviews();
        reviews = await postData.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
    }

    return (
        <>
            <Hero/>
            <About/>
            <WhyUs/>
            <Services/>
             <Technologies />
            <OurProjects posts={posts} categories={categories}/>
            <ClientsSay reviews={reviews.data}/> {/* nazar */}
            <Faq faqItems={faqItems.data}/>
            {/*<Contact />*/}
        </>
    );
};

export default HomePage;
