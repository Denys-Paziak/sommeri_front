"use client";

import { backHost } from "@/app/utils/server/server";
import Link from "next/link";

import styles from "./OurProjects.module.css";
import MasonryGrid from "@/app/components/UI/button/MasonryGrid/MasonryGrid";
import Image from "next/image";
import { useState } from "react";

export default function Page({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts =
    activeCategory === "All"
      ? posts.data
      : posts.data.filter(
          (project) => project.Category.Name === activeCategory
        );

  return (
    <section>
      <div className="container">
        <div className={styles.projects__wrapper}>
          <div className={styles.projects__wrapper_heading}>
            <h2 className={styles.projects__heading_title}>
              We are proud of our projects
            </h2>
            <h3 className={styles.projects__heading_subtitle}>
              Our work is a combination of aesthetics and functionality to
              achieve your business goals.
            </h3>
          </div>
          <div className={styles.projects__wrapper_main}>
            {/*<div className={styles.container}>*/}
            {/*  <div className={styles.tabs}>*/}
            {/*    <input type="radio" id="radio-1" name="tabs" checked=""/>*/}
            {/*    <label className={styles.tab} htmlFor="radio-1">Hello</label>*/}
            {/*    <input type="radio" id="radio-2" name="tabs"/>*/}
            {/*    <label className={styles.tab} htmlFor="radio-2">UI</label>*/}
            {/*    <input type="radio" id="radio-3" name="tabs"/>*/}
            {/*    <label className={styles.tab} htmlFor="radio-3">World</label>*/}
            {/*    <span className={styles.glider}></span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className={styles.projects__main_categories}>
              <ul className={styles.projects__categories_list}>
                <li
                  className={`${styles.projects__category_item}  ${
                    activeCategory === "All" && styles.active
                  }`}
                  onClick={() => {
                    setActiveCategory("All");
                  }}
                >
                  All
                </li>

                {categories.data.map((categori) => {
                  return (
                    <li
                      key={categori.Name}
                      className={`${styles.projects__category_item} ${
                        activeCategory === categori.Name && styles.active
                      }`}
                      onClick={() => {
                        setActiveCategory(categori.Name);
                      }}
                    >
                      {categori.Name}
                    </li>
                  );
                })}
              </ul>
            </div>

            <MasonryGrid>
              {filteredPosts.map((project, index) => {
                let projectStyle;

                if (index % 2 === 0) {
                  projectStyle = styles.mt;
                }

                return (
                  <Link
                    key={project.documentId}
                    className={projectStyle}
                    href={"/project/" + project.documentId}
                  >
                    <div className={styles.project__portfolio_item}>
                      <div className={styles.project__item_banner}>
                        <Image
                          src={backHost + project.Preview.url}
                          alt={"project img"}
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
                          {project.technologies.map((technologi) => {
                            return (
                              <span
                                key={technologi.Name}
                                className={styles.project__categories_item}
                              >
                                {technologi.Name}
                              </span>
                            );
                          })}
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
    </section>
  );
}
