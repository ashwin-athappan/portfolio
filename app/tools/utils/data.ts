import {StaticImageData} from "next/image";

import CredlyICIP from "@/public/assets/certificates/opswat-introduction-to-critical-infrastructure-protection-icip.png";
import CredlyCybersecurityEssentials from "@/public/assets/certificates/cybersecurity-essentials.png";
import CredlyPythonEssentials from "@/public/assets/certificates/python-essentials-1.1.png";
import CredlyGitHubFoundations from "@/public/assets/certificates/github-foundations.png";
import CredlyKubernetesApplications
    from "@/public/assets/certificates/deploy-kubernetes-applications-on-google-cloud-skil.png";

import HackerRankReactBasic from "@/public/assets/certificates/ReactBasic.png";
import HackerRankJavaScriptBasic from "@/public/assets/certificates/JSBasic.png";
import HackerRankPythonBasic from "@/public/assets/certificates/PythonBasic.png";
import HackerRankSQLBasic from "@/public/assets/certificates/SQLBasic.png";

import html from "@/public/assets/svg/html5.svg";
import css from "@/public/assets/svg/css3.svg";
import nextjs from "@/public/assets/svg/nextjs2.svg";
import springBoot from "@/public/assets/svg/spring-boot.svg";
import reactjs from "@/public/assets/svg/reactjs.svg";
import nodejs from "@/public/assets/svg/nodejs.svg";
import javascript from "@/public/assets/svg/js.svg";
import typescript from "@/public/assets/svg/typescript.svg";
import java from "@/public/assets/svg/java.svg";
import python from "@/public/assets/svg/python.svg";
import django from "@/public/assets/svg/django.svg";
import tailwind from "@/public/assets/svg/tailwindcss.svg";
import bootstrap from "@/public/assets/svg/bootstrap.svg";
import mysql from "@/public/assets/svg/mysql.svg";
import mongodb from "@/public/assets/svg/mongodb.svg";
import graphql from "@/public/assets/svg/graphql.svg";
import docker from "@/public/assets/svg/docker.svg";
import kubernetes from "@/public/assets/svg/kubernetes.svg";
import github_black from "@/public/assets/svg/github.svg";
import git from "@/public/assets/svg/git.svg";
import linux from "@/public/assets/svg/linux.svg";
import jira from "@/public/assets/svg/jira.svg";
import bitbucket from "@/public/assets/svg/bitbucket.svg";
import aws from "@/public/assets/svg/aws.svg";
import gcp from "@/public/assets/svg/gcp.svg";

import vscode from "@/public/assets/svg/vscode.svg";
import idea from "@/public/assets/svg/intellij_idea.svg";
import webstorm from "@/public/assets/svg/webstorm.svg";
import pycharm from "@/public/assets/svg/pycharm.svg";
import postman from "@/public/assets/svg/postman.svg";

interface certificationProps {
    id: string;
    title: string;
    issuedBy: string;
    image: StaticImageData;
    link: string;
    skills: string[];
}

interface toolsAndTechnologiesProps {
    id: number;
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}

const certificates: certificationProps[] = [
    {
        id: "8fae776a-44f9-4aef-be5d-8d015a773e76",
        title: "GitHub Foundations",
        issuedBy: "GitHub",
        link: "https://www.credly.com/badges/8fae776a-44f9-4aef-be5d-8d015a773e76/public_url",
        image: CredlyGitHubFoundations,
        skills: ["Build Pipeline", "Continuous Delivery", "Continuous Integration", "DevOps", "GitHub", "GitHub Actions", "Release Management"]
    },
    {
        id: "b8b552ab-c6e2-480e-89ab-79879659f9fd",
        title: "Cybersecurity Essentials",
        issuedBy: "Cisco Networking Academy",
        link: "https://www.credly.com/badges/b8b552ab-c6e2-480e-89ab-79879659f9fd/public_url",
        image: CredlyCybersecurityEssentials,
        skills: ["Availability", "Confidentiality", "Encryption", "Integrity", "Network Security"]
    },
    {
        id: "b21fa50a-2658-4df5-88fd-ce6bf9c8d4b4",
        title: "Python Essentials 1",
        issuedBy: "Cisco Networking Academy",
        link: "https://www.credly.com/badges/b21fa50a-2658-4df5-88fd-ce6bf9c8d4b4/public_url",
        image: CredlyPythonEssentials,
        skills: ["Basic Python Programming", "Best Practices in Programming", "Procedural Programming", "Python"]
    },
    {
        id: "2a09b785-3b18-4f12-9e12-5a8ee98250ee",
        title: "OPSWAT (ICIP)",
        issuedBy: "OPSWAT Academy",
        image: CredlyICIP,
        link: "https://www.credly.com/badges/2a09b785-3b18-4f12-9e12-5a8ee98250ee/public_url",
        skills: ["CIP", "Critical Infrastructure", "OPSWAT Academy"]
    },
    {
        id: "b4df55fa-5fc5-4015-914c-bcd29a294ebc",
        title: "Google Cloud Skill Badge",
        issuedBy: "Google Cloud",
        link: "https://www.credly.com/badges/b4df55fa-5fc5-4015-914c-bcd29a294ebc/public_url",
        image: CredlyKubernetesApplications,
        skills: ["Artifact Registry", "Container", "Docker", "GKE"]
    },
    {
        id: "3dd5d74f69aa",
        title: "React (Basic) Certificate",
        issuedBy: "HackerRank",
        link: "https://www.hackerrank.com/certificates/3dd5d74f69aa",
        image: HackerRankReactBasic,
        skills: ["Frontend", "React", "JavaScript"]
    },
    {
        id: "3ae7b731cae1",
        title: "JavaScript (Basic) Certificate",
        issuedBy: "HackerRank",
        link: "https://www.hackerrank.com/certificates/3ae7b731cae1",
        image: HackerRankJavaScriptBasic,
        skills: ["JavaScript"]
    },
    {
        id: "ccde5cb928ed",
        title: "Python (Basic) Certificate",
        issuedBy: "HackerRank",
        link: "https://www.hackerrank.com/certificates/ccde5cb928ed",
        image: HackerRankPythonBasic,
        skills: ["Python", "Scripting"]
    },
    {
        id: "3c88ec3848f1",
        title: "SQL (Basic) Certificate",
        issuedBy: "HackerRank",
        link: "https://www.hackerrank.com/certificates/3c88ec3848f1",
        image: HackerRankSQLBasic,
        skills: ["SQL", "Database", "Relational Database"]
    }
];

const toolsAndTechnologies: toolsAndTechnologiesProps[] = [
    {
        id: 1,
        name: "HTML5",
        image: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "HTML5 is a markup language for structuring and presenting content on the web."
    },
    {
        id: 2,
        name: "CSS3",
        image: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        description: "CSS3 extends CSS2 with new features for better styling, animations, and layouts."
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "JavaScript is a high-level programming language that follows the ECMAScript standard."
    },
    {
        id: 4,
        name: "TypeScript",
        image: typescript,
        link: "https://www.typescriptlang.org/",
        description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
    },
    {
        id: 5,
        name: "Java",
        image: java,
        link: "https://www.java.com/",
        description: "Java is an object-oriented programming language used to build applications across platforms."
    },
    {
        id: 6,
        name: "Python",
        image: python,
        link: "https://www.python.org/",
        description: "Python is a high-level, interpreted programming language known for its readability."
    },
    {
        id: 7,
        name: "Django",
        image: django,
        link: "https://www.djangoproject.com/",
        description: "Django is a Python web framework for rapid development and clean, pragmatic design."
    },
    {
        id: 8,
        name: "Node.js",
        image: nodejs,
        link: "https://nodejs.org/",
        description: "Node.js is a runtime for executing JavaScript on the server using the V8 engine."
    },
    {
        id: 9,
        name: "React.js",
        image: reactjs,
        link: "https://reactjs.org/",
        description: "React is a JavaScript library for building interactive user interfaces efficiently."
    },
    {
        id: 10,
        name: "Next.js",
        image: nextjs,
        link: "https://nextjs.org/",
        description: "Next.js is a React framework that enables SSR, static site generation, and API routes."
    },
    {
        id: 11,
        name: "Spring Boot",
        image: springBoot,
        link: "https://spring.io/projects/spring-boot",
        description: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\"."
    },
    {
        id: 12,
        name: "Tailwind CSS",
        image: tailwind,
        link: "https://tailwindcss.com/",
        description: "Tailwind CSS is a utility-first framework for quickly designing responsive UIs."
    },
    {
        id: 13,
        name: "Bootstrap",
        image: bootstrap,
        link: "https://getbootstrap.com/",
        description: "Bootstrap is a framework for creating responsive, mobile-first web pages."
    },
    {
        id: 14,
        name: "MySQL",
        image: mysql,
        link: "https://www.mysql.com/",
        description: "MySQL is an open-source relational database management system for storing structured data."
    },
    {
        id: 15,
        name: "MongoDB",
        image: mongodb,
        link: "https://www.mongodb.com/",
        description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents."
    },
    {
        id: 16,
        name: "GraphQL",
        image: graphql,
        link: "https://graphql.org/",
        description: "GraphQL is a query language for APIs that allows clients to request specific data."
    },
    {
        id: 17,
        name: "Docker",
        image: docker,
        link: "https://www.docker.com/",
        description: "Docker uses OS-level virtualization to package software in lightweight containers."
    },
    {
        id: 18,
        name: "Kubernetes",
        image: kubernetes,
        link: "https://kubernetes.io/",
        description: "Kubernetes automates the deployment, scaling, and management of containerized applications."
    },
    {
        id: 19,
        name: "GitHub",
        image: github_black,
        link: "https://github.com",
        description: "GitHub provides hosting for software development and version control using Git."
    },
    {
        id: 20,
        name: "Git",
        image: git,
        link: "https://git-scm.com/",
        description: "Git is a distributed version control system for tracking changes in source code."
    },
    {
        id: 21,
        name: "Linux",
        image: linux,
        link: "https://www.linux.org/",
        description: "Linux is a widely used open-source operating system based on the Unix-like kernel."
    },
    {
        id: 22,
        name: "Jira",
        image: jira,
        link: "https://www.atlassian.com/software/jira",
        description: "Jira is an issue-tracking tool for bug tracking and agile project management."
    },
    {
        id: 23,
        name: "Bitbucket",
        image: bitbucket,
        link: "https://bitbucket.org/",
        description: "Bitbucket is a Git repository hosting service owned by Atlassian."
    },
    {
        id: 24,
        name: "AWS",
        image: aws,
        link: "https://aws.amazon.com/",
        description: "AWS provides cloud computing services with pay-as-you-go pricing."
    },
    {
        id: 25,
        name: "GCP",
        image: gcp,
        link: "https://cloud.google.com/",
        description: "GCP is Google’s cloud platform offering various computing and storage solutions."
    }
];

const ide: toolsAndTechnologiesProps[] = [
    {
        id: 1,
        name: "Visual Studio Code",
        image: vscode,
        link: "https://code.visualstudio.com/",
        description: "VS Code is a lightweight, powerful code editor with debugging and Git."
    },
    {
        id: 2,
        name: "PyCharm",
        image: pycharm,
        link: "https://www.jetbrains.com/pycharm/",
        description: "PyCharm is a Python IDE with smart code completion and debugging tools."
    },
    {
        id: 3,
        name: "IntelliJ IDEA",
        image: idea,
        link: "https://www.jetbrains.com/idea/",
        description: "IntelliJ IDEA is a Java IDE with advanced coding assistance and built-in tools."
    },
    {
        id: 4,
        name: "WebStorm",
        image: webstorm,
        link: "https://www.jetbrains.com/webstorm/",
        description: "WebStorm is a JavaScript IDE optimized for front-end and Node.js development."
    },
    {
        id: 5,
        name: "Postman",
        image: postman,
        link: "https://www.postman.com/",
        description: "Postman is a tool for API development, testing, and collaboration."
    }
];


export {certificates, toolsAndTechnologies, ide};
