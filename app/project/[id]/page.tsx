"use client";
import Header from "@/app/components/global/header/Header";
import AboutProject from "@/app/components/global/aboutProject/AboutProject";
import Footer from "@/app/components/global/footer/Footer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getProject } from "@/app/utils/server/server";
import { ProjectInterface } from "@/app/project/[id]/ProjectInterface";

import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";


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

};

export default Project;
