import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import { getProject, getReviews } from "@/app/utils/server/server";
import Loader from "@/app/components/global/loader/Loader";
import ClientsSay from "@/app/components/pages/home/clientsSay/ClientsSay";
import Contact from "@/app/components/pages/home/contact/Contact";

const Project = async ({ params }: { params: { id: string, locale: string } }) => {
    const project: any = await getProject(params.id, params.locale);
    let reviews = await getReviews();

    if (!project && !reviews) {
        return <Loader />
    }

    return (
        <div>
            {project && <AboutProject project={project} />}
            <ClientsSay reviews={reviews} />
            <Contact />
        </div>
    );
};

export default Project;
