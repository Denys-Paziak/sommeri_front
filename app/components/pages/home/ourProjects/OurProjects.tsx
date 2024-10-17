"use client";

import { backHost } from "@/app/utils/server/server";
import { Link } from "@/navigation";
import styles from "./OurProjects.module.css";
import MasonryGrid from "@/app/components/UI/MasonryGrid/MasonryGrid";
import Image from "next/image";
import { useState } from "react";
import { ProjectInterface } from "@/app/utils/interfaces/project";
import { CategoryInterface } from "@/app/utils/interfaces/category";
import TitleWrapper from "@/app/components/UI/titleWrapper/TitleWrapper";
import SectionWrapper from "@/app/components/UI/sectionWrapper/SectionWrapper";

interface iProps {
  posts: ProjectInterface[];
  categories: CategoryInterface[];
}

export default function Page({ posts, categories }: iProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts: ProjectInterface[] =
    activeCategory === "All"
      ? posts
      : posts.filter(
          (project: ProjectInterface) =>
            project.Category.Name === activeCategory
        );

  return (
    <SectionWrapper>
      <div className="container">
        <div className={styles.projects__wrapper}>
          <div className={styles.projects__wrapper_heading}>
            <TitleWrapper>We are proud of our projects</TitleWrapper>
            <h3 className={styles.projects__heading_subtitle}>
              Our work is a combination of aesthetics and functionality to
              achieve your business goals.
            </h3>
          </div>
          <div className={styles.projects__wrapper_main}>
            <div className={styles.projects__main_categories}>
              <ul className={styles.projects__categories_list}>
                <li
                  className={`${styles.projects__category_item}  ${
                    activeCategory === "All" && styles.active
                  }`}
                  onClick={() => setActiveCategory("All")}
                >
                  All
                </li>

                {categories.map((category) => (
                  <li
                    key={category.Name}
                    className={`${styles.projects__category_item} ${
                      activeCategory === category.Name && styles.active
                    }`}
                    onClick={() => setActiveCategory(category.Name)}
                  >
                    {category.Name}
                  </li>
                ))}
              </ul>
            </div>

            <MasonryGrid>
              {filteredPosts.map((project, index) => {
                const projectStyle = index % 2 === 0 ? styles.mt : "";

                return (
                  <Link
                    key={project.documentId}
                    className={projectStyle}
                    href={`/project/${project.url}`}
                  >
                    <div className={styles.project__portfolio_item}>
                      <div className={styles.project__item_banner}>
                        <Image
                          src={`${backHost}${project.Preview.url}`}
                          alt="project img"
                          width={500}
                          height={500}
                          className={styles.project__banner_item}
                        />
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
                        >
                          <span className={styles.project__view_text}>
                            View
                          </span>
                        </button>
                      </div>
                      <div className={styles.project__item_info}>
                        <p className={styles.project__info_category}>
                          {project.Category.Name}
                        </p>
                        <p className={styles.project__info_categories}>
                          <span
                            key={project.technologies[0].Name}
                            className={styles.project__categories_item}
                          >
                            {project.technologies[0].Name}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </MasonryGrid>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
