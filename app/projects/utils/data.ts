import {StaticImageData} from "next/image";

import algoVisualizer from "@/public/assets/projects/AlgoVisualizer.png";
import eOrganDonor from "@/public/assets/projects/EOrganDonor.png";
import twoPC from "@/public/assets/projects/2PC.png";

import react from "@/public/assets/svg/reactjs.svg";
import bootstrap from "@/public/assets/svg/bootstrap.svg";
import redux from "@/public/assets/svg/redux.svg";
import typescript from "@/public/assets/svg/typescript.svg";
import figma from "@/public/assets/svg/figma.svg";
import python from "@/public/assets/svg/python.svg";
import django from "@/public/assets/svg/django.svg";
import javascript from "@/public/assets/svg/js.svg";
import sqlite from "@/public/assets/svg/sqlite.svg";
import html from "@/public/assets/svg/html5.svg";
import css from "@/public/assets/svg/css3.svg";
import grpc from "@/public/assets/svg/grpc.svg";

enum ProjectType {
    Personal = "Personal",
    Academic = "Academic",
    Learning = "Learning",
}

interface Tech {
    name: string;
    image: StaticImageData;
}

interface Project {
    name: string;
    description: string;
    image: StaticImageData;
    github: string | false;
    demo: string | false;
    status: boolean;
    date: string;
    type: ProjectType;
    tech: Tech[];
}

const projects: Project[] = [
    {
        name: "2PC Protocol",
        description:
            "This project is a simple implementation of Two Phase Commit Protocol. The project is implemented in Python and uses XMLrpc for communication between the coordinator and the participants.",
        image: twoPC,
        github: "https://github.com/ashwin-athappan/cse-5306-assignment2",
        demo: false,
        status: false,
        date: "January - 2022",
        type: ProjectType.Academic,
        tech: [
            {name: "Python", image: python},
            {name: "GRPC", image: grpc},
            {name: "Javascript", image: javascript},
            {name: "HTML", image: html},
            {name: "CSS", image: css},
            {name: "SQLite", image: sqlite},
        ],
    },
    {
        name: "E-OrganDonor",
        description:
            "Built a Django-based organ donation platform enabling registration, donor matching, and secure communication. Integrated authentication, encryption, and Docker deployment for scalable, privacy-focused operations.",
        image: eOrganDonor,
        github: "https://github.com/ashwin-athappan/e_Organ_Donor-Django",
        demo: false,
        status: false,
        date: "January - 2022",
        type: ProjectType.Academic,
        tech: [
            {name: "Django", image: django},
            {name: "Python", image: python},
            {name: "Javascript", image: javascript},
            {name: "HTML", image: html},
            {name: "CSS", image: css},
            {name: "SQLite", image: sqlite},
        ],
    },
    {
        name: "AlgoVisualizer",
        description:
            "Algorithm visualizer showcasing sorting, scheduling, graph traversals, and more. Features animations, speed control, and customization. Deployed on GitHub Pages.",
        image: algoVisualizer,
        github: "https://github.com/ashwin-athappan/Algo-Visualizer",
        demo: "https://ashwin-athappan.github.io/algo-visualizer-deploy/",
        status: false,
        date: "August - 2021",
        type: ProjectType.Personal,
        tech: [
            {name: "React", image: react},
            {name: "Bootstrap", image: bootstrap},
            {name: "Redux", image: redux},
            {name: "TypeScript", image: typescript},
            {name: "Figma", image: figma},
        ],
    },
];

export {projects};