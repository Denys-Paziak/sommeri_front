"use client";
import styles from "./OurProjects.module.css";
import MasonryGrid from "@/app/components/UI/MasonryGrid/MasonryGrid";
import { useState } from "react";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import { CategoryInterface } from "@/app/utils/interfaces/category";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";
import { useTranslations } from "next-intl";
import AnimatedWrapper from "@/app/components/UI/scrollAnimationWrapper/ScrollAnimationWrapper";
import SecondaryButton from "@/app/components/UI/secondaryButton/SecondaryButton";
import 'react-loading-skeleton/dist/skeleton.css';
import Project from "@/app/components/global/project/Project";


interface iProps {
  posts: ProjectInterface[];
  categories: CategoryInterface[];
}

export default function Page({ posts, categories }: iProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const t = useTranslations("home.portfolio");

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  let step = 1;

  const filteredPosts: ProjectInterface[] =
    activeCategory === "All"
      ? posts
      : posts.filter(
        (project: ProjectInterface) =>
          project.Category.Name === activeCategory
      );

  return (
    <SectionWrapper sectionId={"portfolio"}>
      <div className="container">
        <div className={styles.projects__wrapper}>
          <div className={styles.projects__wrapper_heading}>
            <AnimatedWrapper type="fade-up" duration={1.2}>
              <TitleWrapper>{t("title")}</TitleWrapper>
            </AnimatedWrapper>
            <AnimatedWrapper type="fade-up" duration={1.4}>
              <h3 className={styles.projects__heading_subtitle}>
                {t("subtitle")}
              </h3>
            </AnimatedWrapper>
          </div>
          <div className={styles.projects__wrapper_main}>
            <div className={styles.projects__main_categories}>
              <AnimatedWrapper type="fade-up" duration={1.2}>
                <ul className={styles.projects__categories_list}>
                  <li
                    className={`${styles.projects__category_item} ${activeCategory === "All" && styles.active
                      }`}
                    onClick={() => setActiveCategory("All")}
                  >
                    {t("all")}
                  </li>

                  {categories.map((category) => (
                    <li
                      key={category.Name}
                      className={`${styles.projects__category_item} ${activeCategory === category.Name && styles.active
                        }`}
                      onClick={() => setActiveCategory(category.Name)}
                    >
                      {category.Name}
                    </li>
                  ))}
                </ul>
              </AnimatedWrapper>
            </div>

            <MasonryGrid>
              {filteredPosts.slice(0, visibleProjects).map((project, index) => {
                let projectStyle;

                if (index === step) {
                  step += 3;
                  projectStyle = "100px";
                } else {
                  projectStyle = styles.mt;
                }

                return (
                  <Project key={project.documentId} project={project} className={projectStyle} />
                );
              })}
            </MasonryGrid>

            {visibleProjects < filteredPosts.length && (
              <div className={styles.projects__wrapper_more}>
                <SecondaryButton
                  ariaLabel={t("button")}
                  onClick={loadMoreProjects}
                >
                  More projects
                </SecondaryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
