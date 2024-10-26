"use client";

import { useEffect, useState } from "react";
import styles from "./AboutProjectSimilar.module.css";
import { getSimilars } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import SimilarProjectItems from "@/app/components/global/similarProjects/SimilarProjectItems";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import { useTranslations } from "next-intl";

const AboutProjectSimilar = ({ url }: { url: string }) => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const t = useTranslations("aboutProject");

  useEffect(() => {
    const fetchData = async () => {
      const result: ProjectInterface[] = await getSimilars(url);
      setProjects(result);
    };

    fetchData();
  }, []);

  return (
    <>
      {projects.length > 0 && (
        <section className={styles.similar__projects_section}>
          <div className="container">
            <div className={styles.similar__project_wrapper}>
              <div className={styles.similar__wrapper_heading}>
                <TitleWrapper>{t("similarTitle")}</TitleWrapper>
                <p className={styles.similar__heading_subtitle}>
                  {t("similarText")}
                </p>
              </div>
              <SimilarProjectItems projects={projects} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutProjectSimilar;
