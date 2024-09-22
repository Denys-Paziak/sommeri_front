"use client";

import Header from "@/app/components/header/Header";
import AboutProject from "@/app/components/aboutProject/AboutProject";

import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {getProject} from "@/app/utils/server/server";
import {ProjectInterface} from "@/app/project/[id]/ProjectInterface";
import CustomCursor from "@/app/components/UI/customCursor/CustomCursor";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Project = ({ params }: { params: { id: string } }) => {
    const [project, setProject] = useState<ProjectInterface>();

    useEffect(() => {
        getProject(params.id).then(data => {
            setProject(data);
            console.log(data)
        })
    }, []);

  return (
    <div>
        <CustomCursor/>
      <Header />
        {project && <AboutProject project={project}/>}
    </div>
  );
};

export default Project;
