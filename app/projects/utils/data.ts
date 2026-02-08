import {StaticImageData} from "next/image";

import algoVisualizer from "@/public/assets/projects/AlgoVisualizer.png";
import eOrganDonor from "@/public/assets/projects/EOrganDonor.png";
import twoPCImage from "@/public/assets/projects/2pc.png";
import regressionAnalysis from "@/public/assets/projects/regression_analysis.jpg";
import dailyCode from "@/public/assets/projects/daily_code.png";

import react from "@/public/assets/svg/frameworks/reactjs.svg";
import nextjs from "@/public/assets/svg/frameworks/nextjs2.svg";
import tailwind from "@/public/assets/svg/frameworks/tailwindcss.svg";
import bootstrap from "@/public/assets/svg/frameworks/bootstrap.svg";
import redux from "@/public/assets/svg/frameworks/redux.svg";
import typescript from "@/public/assets/svg/languages/typescript.svg";
import figma from "@/public/assets/svg/tools/figma.svg";
import python from "@/public/assets/svg/languages/python.svg";
import django from "@/public/assets/svg/frameworks/django.svg";
import javascript from "@/public/assets/svg/languages/js.svg";
import sqlite from "@/public/assets/svg/database/sqlite.svg";
import html from "@/public/assets/svg/languages/html5.svg";
import css from "@/public/assets/svg/languages/css3.svg";
import grpc from "@/public/assets/svg/devops/grpc.svg";
import scikit_learn from "@/public/assets/svg/ai_ml/scikit_learn.svg";
import numpy from "@/public/assets/svg/ai_ml/numpy.svg";
import pandas from "@/public/assets/svg/ai_ml/pandas.svg";
import dataspell from "@/public/assets/svg/tools/dataspell.svg";
import docker from "@/public/assets/svg/devops/docker.svg";
import bash from "@/public/assets/svg/devops/bash.svg";
import postgres from "@/public/assets/svg/database/postgres.svg";
import prisma from "@/public/assets/svg/database/prisma.svg";

enum ProjectType {
    Personal = "Personal",
    Academic = "Academic",
    Learning = "Learning",
    OpenSource = "Open Source",
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
        image: twoPCImage,
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
    {
        name: "Regression Analysis",
        description:
            "This project compares Linear & Logistic Regression, built both from scratch. Achieved 96% accuracy, showcasing strong ML fundamentals and implementation skills.",
        image: regressionAnalysis,
        github: "https://github.com/ashwin-athappan/CSE6363/tree/assignment-1/assignments/ml_assignment_1_solution",
        demo: "https://colab.research.google.com/drive/18uW58BxG7kLHJgwohAEDhCmqT1zadvD_#scrollTo=fe4136e038e2511a",
        status: false,
        date: "February - 2025",
        type: ProjectType.Academic,
        tech: [
            {name: "Python", image: python},
            {name: "Scikit-Learn", image: scikit_learn},
            {name: "NumPy", image: numpy},
            {name: "Pandas", image: pandas},
            {name: "DataSpell", image: dataspell},
        ],
    },
    {
        name: "Daily Code",
        description:
            "I’ve contributed to this open-source education platform with blogs & educational content, improving features, fixing bugs, and enhancing user experience.",
        image: dailyCode,
        github: "https://github.com/ashwin-athappan/daily-code",
        demo: "https://projects.100xdevs.com/",
        status: true,
        date: "April - 2024",
        type: ProjectType.OpenSource,
        tech: [
            {name: "NextJS", image: nextjs},
            {name: "Tailwind", image: tailwind},
            {name: "Docker", image: docker},
            {name: "Bash", image: bash},
            {name: "PostgresSQL", image: postgres},
            {name: "prisma", image: prisma},
        ],
    },
];

export {projects};