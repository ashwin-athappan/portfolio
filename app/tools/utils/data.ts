import {StaticImageData} from "next/image";

import CredlyICIP
    from "@/public/assets/certificates/opswat-introduction-to-critical-infrastructure-protection-icip.png";
import CredlyCybersecurityEssentials from "@/public/assets/certificates/cybersecurity-essentials.png";
import CredlyPythonEssentials from "@/public/assets/certificates/python-essentials-1.1.png";
import CredlyGitHubFoundations from "@/public/assets/certificates/github-foundations.png";
import CredlyKubernetesApplications
    from "@/public/assets/certificates/deploy-kubernetes-applications-on-google-cloud-skil.png";

import HackerRankReactBasic from "@/public/assets/certificates/ReactBasic.png";
import HackerRankJavaScriptBasic from "@/public/assets/certificates/JSBasic.png";
import HackerRankPythonBasic from "@/public/assets/certificates/PythonBasic.png";
import HackerRankSQLBasic from "@/public/assets/certificates/SQLBasic.png";

import DockerProfessionalCertificate
    from "@/public/assets/certificates/docker-foundations-professional-certificate.jpg";

import AWSIntroCloud101 from "@/public/assets/certificates/aws-educate-introduction-to-cloud-101.png";
import AWSGettingStartedStorage from "@/public/assets/certificates/aws-educate-getting-started-with-storage.png";
import AWSGettingStartedCompute from "@/public/assets/certificates/aws-educate-getting-started-with-compute.png";
import AWSGettingStartedDatabases from "@/public/assets/certificates/aws-educate-getting-started-with-databases.png";
import AWSGettingStartedNetworking from "@/public/assets/certificates/aws-educate-getting-started-with-networking.png";

import html from "@/public/assets/svg/languages/html5.svg";
import css from "@/public/assets/svg/languages/css3.svg";
import javascript from "@/public/assets/svg/languages/js.svg";
import typescript from "@/public/assets/svg/languages/typescript.svg";
import java from "@/public/assets/svg/languages/java.svg";
import python from "@/public/assets/svg/languages/python.svg";
import c from "@/public/assets/svg/languages/c.svg";
import cpp from "@/public/assets/svg/languages/cpp.svg";
import csharp from "@/public/assets/svg/languages/csharp.svg";

import nextjs from "@/public/assets/svg/frameworks/nextjs2.svg";
import springBoot from "@/public/assets/svg/frameworks/spring-boot.svg";
import reactjs from "@/public/assets/svg/frameworks/reactjs.svg";
import redux from "@/public/assets/svg/frameworks/redux.svg";
import nodejs from "@/public/assets/svg/frameworks/nodejs.svg";
import express from "@/public/assets/svg/frameworks/express.svg";
import jest from "@/public/assets/svg/frameworks/jest.svg";
import django from "@/public/assets/svg/frameworks/django.svg";
import dotnetcore from "@/public/assets/svg/frameworks/dotnetcore.svg";
import tailwind from "@/public/assets/svg/frameworks/tailwindcss.svg";
import bootstrap from "@/public/assets/svg/frameworks/bootstrap.svg";
import mysql from "@/public/assets/svg/database/mysql.svg";
import postgres from "@/public/assets/svg/database/postgres.svg";
import mongodb from "@/public/assets/svg/database/mongodb.svg";
import prisma from "@/public/assets/svg/database/prisma.svg";
import graphql from "@/public/assets/svg/database/graphql.svg";

import docker from "@/public/assets/svg/devops/docker.svg";
import kubernetes from "@/public/assets/svg/devops/kubernetes.svg";
import github_black from "@/public/assets/svg/devops/github.svg";
import git from "@/public/assets/svg/devops/git.svg";
import linux from "@/public/assets/svg/devops/linux.svg";
import jira from "@/public/assets/svg/devops/jira.svg";
import bitbucket from "@/public/assets/svg/devops/bitbucket.svg";
import aws from "@/public/assets/svg/devops/aws.svg";
import gcp from "@/public/assets/svg/devops/gcp.svg";
import maven from "@/public/assets/svg/devops/maven.svg";
import webpack from "@/public/assets/svg/devops/webpack.svg";

import vscode from "@/public/assets/svg/tools/vscode.svg";
import idea from "@/public/assets/svg/tools/intellij_idea.svg";
import webstorm from "@/public/assets/svg/tools/webstorm.svg";
import pycharm from "@/public/assets/svg/tools/pycharm.svg";
import postman from "@/public/assets/svg/tools/postman.svg";

interface certificationProps {
    id: string;
    title: string;
    issuedBy: string;
    image: StaticImageData;
    link: string;
    skills: string[];
}

interface toolsAndTechnologiesProps {
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
}


const certificates: certificationProps[] = [
    {
        id: "3c88ec3848f3",
        title: "Introduction to Cloud 101",
        issuedBy: "Amazon Web Services (AWS)",
        link: "https://www.credly.com/badges/4265aa52-1526-4fca-8d58-9283fd200be9/linked_in_profile",
        image: AWSIntroCloud101,
        skills: ["Amazon Web Services", "Cloud Computing"]
    },
    {
        id: "3c88ec3848f4",
        title: "Getting Started with Storage",
        issuedBy: "Amazon Web Services (AWS)",
        link: "https://www.credly.com/badges/74f52d60-f7e5-41ed-9da6-b4850934aa10/linked_in_profile",
        image: AWSGettingStartedStorage,
        skills: ["Amazon Web Services", "Cloud Computing"]
    },
    {
        id: "3c88ec3848f5",
        title: "Getting Started with Compute",
        issuedBy: "Amazon Web Services (AWS)",
        link: "https://www.credly.com/badges/028e8775-f8c5-45f9-8001-c27c63cfb78d/linked_in_profile",
        image: AWSGettingStartedCompute,
        skills: ["Amazon Web Services", "Amazon EC2", "Amazon VPC"]
    },
    {
        id: "3c88ec3848f6",
        title: "Getting Started with Databases",
        issuedBy: "Amazon Web Services (AWS)",
        link: "https://www.credly.com/badges/dfa96d74-8876-418c-8f4c-7945830e8235/linked_in_profile",
        image: AWSGettingStartedDatabases,
        skills: ["Amazon Web Services", "Amazon RDS", "Amazon Aurora", "Amazon DynamoDB"]
    },
    {
        id: "3c88ec3848f7",
        title: "Getting Started with Networking",
        issuedBy: "Amazon Web Services (AWS)",
        link: "https://www.credly.com/badges/1f855631-98f7-4d34-94c8-bfa00fd17f46/public_url",
        image: AWSGettingStartedNetworking,
        skills: ["Amazon Web Services", "Amazon EC2", "Amazon VPC"]
    },
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
    },
    {
        id: "3c88ec3848f2",
        title: "Docker Foundations Professional Certificate",
        issuedBy: "Docker",
        link: "https://www.linkedin.com/learning/certificates/83ed7bfb44befc81d33188fcf69873f7dfa1a9b4a2bad80cbc095249b39171f8",
        image: DockerProfessionalCertificate,
        skills: ["Docker Products", "Containerization", "Docker"]
    }
];

const languages: toolsAndTechnologiesProps[] = [
    {
        name: "HTML5",
        image: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "HTML5 is a markup language for structuring and presenting content on the web."
    },
    {
        name: "CSS3",
        image: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        description: "CSS3 extends CSS2 with new features for better styling, animations, and layouts."
    },
    {
        name: "JavaScript",
        image: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "JavaScript is a high-level programming language that follows the ECMAScript standard."
    },
    {
        name: "TypeScript",
        image: typescript,
        link: "https://www.typescriptlang.org/",
        description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
    },
    {
        name: "C",
        image: c,
        link: "https://www.w3schools.com/c/",
        description: "C is a general-purpose programming language that provides low-level access to memory."
    },
    {
        name: "C++",
        image: cpp,
        link: "https://www.w3schools.com/cpp/",
        description: "C++ is an extension of C that includes object-oriented programming features."
    },
    {
        name: "C#",
        image: csharp,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        description: "C# is a modern, object-oriented programming language developed by Microsoft."
    },
    {
        name: "Java",
        image: java,
        link: "https://www.java.com/",
        description: "Java is an object-oriented programming language used to build applications across platforms."
    },
    {
        name: "Python",
        image: python,
        link: "https://www.python.org/",
        description: "Python is a high-level, interpreted programming language known for its readability."
    },
];

const frameworks: toolsAndTechnologiesProps[] = [
    {
        name: "Node.js",
        image: nodejs,
        link: "https://nodejs.org/",
        description: "Node.js is a runtime for executing JavaScript on the server using the V8 engine."
    },
    {
        name: "React.js",
        image: reactjs,
        link: "https://reactjs.org/",
        description: "React is a JavaScript library for building interactive user interfaces efficiently."
    },
    {
        name: "Redux",
        image: redux,
        link: "https://redux.js.org/",
        description: "Redux is a predictable state container for JavaScript apps, often used with React."
    },
    {
        name: "Next.js",
        image: nextjs,
        link: "https://nextjs.org/",
        description: "Next.js is a React framework that enables SSR, static site generation, and API routes."
    },
    {
        name: "Express.js",
        image: express,
        link: "https://expressjs.com/",
        description: "Express is a minimal and flexible Node.js web application framework for building APIs and web apps."
    },
    {
        name: "Jest",
        image: jest,
        link: "https://jestjs.io/",
        description: "Jest is a JavaScript testing framework for ensuring code correctness with a focus on simplicity."
    },
    {
        name: "Spring Boot",
        image: springBoot,
        link: "https://spring.io/projects/spring-boot",
        description: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\"."
    },
    {
        name: "Django",
        image: django,
        link: "https://www.djangoproject.com/",
        description: "Django is a Python web framework for rapid development and clean, pragmatic design."
    },
    {
        name: ".NET Core",
        image: dotnetcore,
        link: "https://dotnet.microsoft.com/en-us/",
        description: "Dotnet Core is a cross-platform, high-performance framework for building modern applications."
    },
    {
        name: "Tailwind CSS",
        image: tailwind,
        link: "https://tailwindcss.com/",
        description: "Tailwind CSS is a utility-first framework for quickly designing responsive UIs."
    },
    {
        name: "Bootstrap",
        image: bootstrap,
        link: "https://getbootstrap.com/",
        description: "Bootstrap is a framework for creating responsive, mobile-first web pages."
    }
];

const devops: toolsAndTechnologiesProps[] = [
    {
        name: "Docker",
        image: docker,
        link: "https://www.docker.com/",
        description: "Docker uses OS-level virtualization to package software in lightweight containers."
    },
    {
        name: "Kubernetes",
        image: kubernetes,
        link: "https://kubernetes.io/",
        description: "Kubernetes automates the deployment, scaling, and management of containerized applications."
    },
    {
        name: "GitHub",
        image: github_black,
        link: "https://github.com",
        description: "GitHub provides hosting for software development and version control using Git."
    },
    {
        name: "Git",
        image: git,
        link: "https://git-scm.com/",
        description: "Git is a distributed version control system for tracking changes in source code."
    },
    {
        name: "Linux",
        image: linux,
        link: "https://www.linux.org/",
        description: "Linux is a widely used open-source operating system based on the Unix-like kernel."
    },
    {
        name: "Jira",
        image: jira,
        link: "https://www.atlassian.com/software/jira",
        description: "Jira is an issue-tracking tool for bug tracking and agile project management."
    },
    {
        name: "Bitbucket",
        image: bitbucket,
        link: "https://bitbucket.org/",
        description: "Bitbucket is a Git repository hosting service owned by Atlassian."
    },
    {
        name: "AWS",
        image: aws,
        link: "https://aws.amazon.com/",
        description: "AWS provides cloud computing services with pay-as-you-go pricing."
    },
    {
        name: "GCP",
        image: gcp,
        link: "https://cloud.google.com/",
        description: "GCP is Google’s cloud platform offering various computing and storage solutions."
    }, {
        name: "Maven",
        image: maven,
        link: "https://maven.apache.org/",
        description: "Maven is a build automation tool used primarily for Java projects."
    },
    {
        name: "Webpack",
        image: webpack,
        link: "https://webpack.js.org/",
        description: "Webpack is a module bundler for JavaScript applications."
    }
];

const databases: toolsAndTechnologiesProps[] = [
    {
        name: "MySQL",
        image: mysql,
        link: "https://www.mysql.com/",
        description: "MySQL is an open-source relational database management system for storing structured data."
    },
    {
        name: "PostgreSQL",
        image: postgres,
        link: "https://www.postgresql.org/",
        description: "PostgreSQL is an open-source relational database known for its extensibility and standards compliance."
    },
    {
        name: "MongoDB",
        image: mongodb,
        link: "https://www.mongodb.com/",
        description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents."
    },
    {
        name: "PrismaORM",
        image: prisma,
        link: "https://www.prisma.io/",
        description: "Prisma is an open-source ORM that simplifies database access and management for Node.js and TypeScript."
    },
    {
        name: "GraphQL",
        image: graphql,
        link: "https://graphql.org/",
        description: "GraphQL is a query language for APIs that allows clients to request specific data."
    }
];

const tools: toolsAndTechnologiesProps[] = [
    {
        name: "Visual Studio Code",
        image: vscode,
        link: "https://code.visualstudio.com/",
        description: "VS Code is a lightweight, powerful code editor with debugging and Git."
    },
    {
        name: "PyCharm",
        image: pycharm,
        link: "https://www.jetbrains.com/pycharm/",
        description: "PyCharm is a Python IDE with smart code completion and debugging tools."
    },
    {
        name: "IntelliJ IDEA",
        image: idea,
        link: "https://www.jetbrains.com/idea/",
        description: "IntelliJ IDEA is a Java IDE with advanced coding assistance and built-in tools."
    },
    {
        name: "WebStorm",
        image: webstorm,
        link: "https://www.jetbrains.com/webstorm/",
        description: "WebStorm is a JavaScript IDE optimized for front-end and Node.js development."
    },
    {
        name: "Postman",
        image: postman,
        link: "https://www.postman.com/",
        description: "Postman is a tool for API development, testing, and collaboration."
    }
];


export {certificates, languages, frameworks, devops, databases, tools};
