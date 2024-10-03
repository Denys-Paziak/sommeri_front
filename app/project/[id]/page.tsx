<<<<<<< HEAD
"use client";

import Header from "@/app/components/header/Header";
import AboutProject from "@/app/components/aboutProject/AboutProject";
import Footer from "@/app/components/footer/Footer";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getProject } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/project/[id]/ProjectInterface";
=======
import Header from "@/app/components/global/header/Header";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import {getProject} from "@/app/utils/server/server";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
>>>>>>> 304084b (migration on Nazar)
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";


<<<<<<< HEAD
const Project = ({ params }: { params: { id: string } }) => {
  const [project, setProject] = useState<ProjectInterface>();

  useEffect(() => {
    getProject(params.id).then((data) => {
      setProject(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <CustomCursor />
      <Header />
      {project && <AboutProject project={project} />}
      <Footer />
    </div>
  );
=======
const Project = async ({params}: { params: { id: string } }) => {
    const res: any = await getProject(params.id);
    const { data }: { data: ProjectInterface } = await res.json();

    return (
        <div>
            <CustomCursor/>
            <Header/>
            <AboutProject project={data}/>
        </div>
    );
>>>>>>> 304084b (migration on Nazar)
};

export default Project;
