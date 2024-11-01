import Link from "next/link";
import ImageServer from "../../UI/imageServer/imageServer";

import styles from "@/app/components/pages/home/ourProjects/OurProjects.module.css";
import { useTranslations } from "next-intl";
import { backHost } from "@/app/utils/server/server";


export default function Project({ project, className }: any) {
    const t = useTranslations("home.portfolio");

    return (
        <Link
            key={project.documentId}
            className={className}
            href={`/project/${project.url}`}
        >
            <div
                className={styles.project__portfolio_item}
            >
                <div className={styles.project__item_banner}>
                    <ImageServer width={500} height={500} link={project.Preview.url} />

                    <div className={styles.project__banner_inner}>
                        <h4 className={styles.project__inner_name}>

                            {project.Name}

                        </h4>
                        <div className={styles.project__inner_visit}>

                            <svg
                                width="12"
                                height="13"
                                viewBox="0 0 12 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <button
                        className={styles.project__banner_view}
                        type="button"
                        aria-label="view button"
                    >
                        <span className={styles.project__view_text}>
                            {t("view")}
                        </span>
                    </button>

                </div>
                <div className={styles.project__item_info}>
                    {project.Category && (
                        <p className={styles.project__info_category}>
                            {project.Category.Name}
                        </p>
                    )}

                    {project.technologies[0] && (
                        <p className={styles.project__info_categories}>
                            <span
                                key={project.technologies[0].Name}
                                className={styles.project__categories_item}
                            >
                                {project.technologies[0].Name}
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
