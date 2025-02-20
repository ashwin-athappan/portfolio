import React from "react";

import reactjs from "@/public/_assets/svg/reactjs.svg"
import typescript from "@/public/_assets/svg/typescript.svg"
import python from "@/public/_assets/svg/python.svg"
import django from "@/public/_assets/svg/django.svg"
import docker from "@/public/_assets/svg/docker.svg"
import sqlite from "@/public/_assets/svg/sqlite.svg"
import js from "@/public/_assets/svg/js.svg"
import css3 from "@/public/_assets/svg/css3.svg"
import AlgoVisualizer from "@/public/_assets/projects/AlgoVisualizer.png"

import {ProjectCard, ProjectCardProps} from "@/app/components/ProjectCard/ProjectCard";

export default function ProjectSection() {

    const projects = [
        {
            title: "AlgoVisualizer",
            description: "A web application that visualizes various sorting algorithms.",
            techStack: [
                {name: "React", icon: reactjs},
                {name: "TypeScript", icon: typescript},
                {name: "CSS", icon: css3},
            ],
            link: "https://ashwin-athappan.github.io/algo-visualizer-deploy/#/",
            github: "https://github.com/ashwin-athappan/Algo-Visualizer",
            imageUrl: {
                src: AlgoVisualizer,
                alt: "AlgoVisualizer",
                width: 100,
                height: 100,
            }
        },
        {
            title: "E Organ Donor",
            description: "A web application that visualizes various sorting algorithms.",
            techStack: [
                {name: "Python", icon: python},
                {name: "Javascript", icon: js},
                {name: "Django", icon: django},
                {name: "SQLite", icon: sqlite},
                {name: "Docker", icon: docker}
            ],
            link: "https://github.com/ashwin-athappan/e_Organ_Donor-Django",
            github: "https://github.com/ashwin-athappan/e_Organ_Donor-Django",
            imageUrl: {
                src: AlgoVisualizer,
                alt: "AlgoVisualizer",
                width: 100,
                height: 100,
            }
        },
        {
            title: "AlgoVisualizer",
            description: "A web application that visualizes various sorting algorithms.",
            techStack: [
                {name: "React", icon: reactjs},
                {name: "TypeScript", icon: typescript},
            ],
            link: "https://ashwin-athappan.github.io/algo-visualizer-deploy/#/",
            github: "https://github.com/ashwin-athappan/Algo-Visualizer",
            imageUrl: {
                src: AlgoVisualizer,
                alt: "AlgoVisualizer",
                width: 100,
                height: 100,
            }
        },
        {
            title: "AlgoVisualizer",
            description: "A web application that visualizes various sorting algorithms.",
            techStack: [
                {name: "React", icon: reactjs},
                {name: "TypeScript", icon: typescript},
            ],
            link: "https://ashwin-athappan.github.io/algo-visualizer-deploy/#/",
            github: "https://github.com/ashwin-athappan/Algo-Visualizer",
            imageUrl: {
                src: AlgoVisualizer,
                alt: "AlgoVisualizer",
                width: 100,
                height: 100,
            }
        }
    ]

    return (
        <div className="grid grid-cols-2 gap-[1.5rem] p-5">
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} {...project} />
            ))}
        </div>
    );
}