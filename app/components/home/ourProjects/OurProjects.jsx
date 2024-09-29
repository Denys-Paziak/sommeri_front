
import styles from "./OurProjects.module.css";
import { useEffect, useState } from "react";
import { getProjects } from "@/app/utils/server/server";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);


  console.log(projects);

  return (
    <section className={styles.projects__section}>
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
            <div className={styles.projects__main_categories}>
              <ul className={styles.projects__categories_list}>
                <li
                  className={`${styles.projects__category_item} ${styles.active}`}
                >
                  All Projects
                </li>
                <li className={styles.projects__category_item}>E-Commerce</li>
                <li className={styles.projects__category_item}>
                  Corporate Website
                </li>
                <li className={styles.projects__category_item}>
                  Web Application
                </li>
                <li className={styles.projects__category_item}>Landing Page</li>
                <li className={styles.projects__category_item}>Portfolio</li>
              </ul>
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
               <Masonry gutter="50px">
                {/*{projects.length > 0 && projects.map((project, index) => {*/}
                {/*  let projectStyle;*/}

                {/*  if (index % 2 === 0) {*/}
                {/*    projectStyle = styles.mt;*/}
                {/*  }*/}
                {/*  return (*/}
                {/*    <Link*/}
                {/*        key={project.documentId}*/}
                {/*      className={projectStyle}*/}
                {/*      href={"/project/" + project.documentId}*/}
                {/*    >*/}
                {/*      <div*/}
                {/*        className={styles.project__portfolio_item}*/}
                {/*      >*/}
                {/*        <div className={styles.project__item_banner}>*/}
                {/*          <img*/}
                {/*            src="../images/project-1.png"*/}
                {/*            alt="project img"*/}
                {/*            className={styles.project__banner_item}*/}
                {/*          />*/}
                {/*          <div className={styles.project__banner_inner}>*/}
                {/*            <h4 className={styles.project__inner_name}>*/}
                {/*              {project.Name}*/}
                {/*            </h4>*/}
                {/*            <div className={styles.project__inner_visit}>*/}
                {/*              <svg*/}
                {/*                width="12"*/}
                {/*                height="13"*/}
                {/*                viewBox="0 0 12 13"*/}
                {/*                fill="none"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*              >*/}
                {/*                <path*/}
                {/*                  d="M10.9498 1.55026L1.0503 11.4498M10.9498 1.55026L10.9498 10.0355M10.9498 1.55026L2.46451 1.55026"*/}
                {/*                  stroke="white"*/}
                {/*                  strokeWidth="2"*/}
                {/*                  strokeLinecap="round"*/}
                {/*                  strokeLinejoin="round"*/}
                {/*                />*/}
                {/*              </svg>*/}
                {/*            </div>*/}
                {/*          </div>*/}
                {/*          /!*<div className={styles.project__banner_price}>*!/*/}
                {/*          /!*  <span className={styles.project__price_text}>*!/*/}
                {/*          /!*    $750*!/*/}
                {/*          /!*  </span>*!/*/}
                {/*          /!*</div>*!/*/}
                {/*          <button*/}
                {/*            className={styles.project__banner_view}*/}
                {/*            type="button"*/}
                {/*          >*/}
                {/*            <span className={styles.project__view_text}>*/}
                {/*              View*/}
                {/*            </span>*/}
                {/*          </button>*/}
                {/*        </div>*/}
                {/*        <div className={styles.project__item_info}>*/}
                {/*          <p className={styles.project__info_category}>*/}
                {/*            {project.Category.createdAt}*/}
                {/*          </p>*/}
                {/*          <p className={styles.project__info_categories}>*/}
                {/*            <span className={styles.project__categories_item}>*/}
                {/*              Figma*/}
                {/*            </span>*/}
                {/*            <span className={styles.project__categories_item}>*/}
                {/*              WordPress*/}
                {/*            </span>*/}
                {/*          </p>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </Link>*/}
                {/*  );*/}
                {/*})}*/}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
