'use client';

import React, {useEffect, useState} from 'react';
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";
import {useTheme} from "next-themes";

export default function Resume(): React.JSX.Element {

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const experiences = [
        'Led the transition from a monolithic to a microservices-based architecture using Spring Boot and Node.js, improving system performance by 40% and enabling future scalability.',
        'Migrated 100+ SOAP-based APIs to REST APIs, reducing bandwidth usage by 30% and improving interoperability with third-party services.',
        'Designed and optimized CI/CD pipelines using Docker, Kubernetes, and Jenkins, cutting deployment time by 50% and accelerating software releases.',
        'Conducted regression testing for 100+ APIs, achieving 98% test coverage and resolving 20+ critical bugs, reducing post-deployment defects by 70%.',
        'Implemented Liquibase for database change management, reducing rollback time from 1-2 days to just 5-10 minutes, improving visibility into changes, and enabling seamless tracking of modiﬁcations by team members.'
    ];

    const projects = [
        {
            name: 'Algo Visualizer',
            technologies: 'Java, Spring Boot, Bash, Maven',
            description: 'I built an algorithm visualizer in my college as an inspirational project. It showcases sorting (Bubble, Insertion, Selection, Merge, Quick Sort), scheduling (FCFS, SJF, Priority, Round Robin), graph traversal (DFS, BFS, Dijkstra’s, Prim’s MST), N Queens, searching (Linear, Binary), BST operations, and stack/queue operations. It features step-by-step animations, speed control, and input customization for enhanced learning. This website was deployed on GitHub pages using GitHub Actions.',
            link: 'https://ashwin-athappan.github.io/algo-visualizer-deploy/'
        },
        {
            name: 'File Synchronization System',
            technologies: 'Java, Spring Boot, Bash, Maven',
            description: 'Developed a command-line tool for file upload, download, and deletion with fault tolerance, transaction tracking, and recovery to ensure seamless operation and consistency during client-server interactions.',
            link: 'https://github.com/ashwin-athappan/cse-5306-assignment1'
        },
        {
            name: 'Ecommerce Website',
            technologies: 'Next.js, Tailwind CSS, MongoDB',
            description: 'Developed a responsive e-commerce website using Next.js and Tailwind CSS, integrating MongoDB for efficient data storage and retrieval. Implemented features such as user authentication, product search, shopping cart functionality, and order processing, ensuring optimal performance and a seamless user experience. Focused on clean, reusable code and leveraging Next.js for enhanced SEO and dynamic routing.'
        },
        {
            name: 'eOrganDonor',
            technologies: 'Django, Python, HTML, CSS',
            description: 'Developed a web application using Django to facilitate organ donation and transplantation. Implemented features such as user registration, organ donation requests, donor matching, and donor-recipient communication. Ensured data security and privacy by integrating user authentication, authorization, and encryption protocols. Dockerized the application for scalability.',
            link: 'https://github.com/ashwin-athappan/e_Organ_Donor-Django'
        }
    ];

    const skills = [
        {
            name: 'Programming',
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript']
        },
        {
            name: 'Frameworks',
            skills: ['Spring Boot', 'React.js', 'Node.js']
        },
        {
            name: 'Databases',
            skills: ['MongoDB', 'MySQL', 'Oracle DB']
        },
        {
            name: 'Cloud & DevOps',
            skills: ['JIRA', 'GCP', 'Docker', 'Kubernetes']
        }
    ];

    return (
        <div className="min-h-screen bg-light-background dark:bg-dark-background py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ashwin Athappan</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">Software Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        ashwinathappank@gmail.com | Arlington, TX
                    </p>
                </header>

                {/* Experience */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-900 dark:border-gray-200 pb-2">Experience</h2>
                    <div className="space-y-4">
                        <div
                            className="bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Engineer</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Hughes Systique Corporation –
                                Bangalore, Karnataka, India</p>
                            <div
                                className="mt-3 space-y-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside">
                                {experiences.map((experience, index) => (
                                    <div className="flex" key={index}>
                                        <p className="mr-2">•</p>
                                        <p>{experience}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-900 dark:border-gray-200 pb-2">Education</h2>
                    <div className="space-y-6">
                        <div
                            className="bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">M.S. in Computer
                                Science</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">University of Texas at Arlington
                                (2024 - 2026)</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <span className="font-bold">Coursework: </span>
                                DSA, Data Modeling, Distributed Systems, Data Mining, Database Systems, Machine Learning
                            </p>
                        </div>
                        <div
                            className="bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">B.E. in Computer
                                Science</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">New Horizon College of Engineering
                                (2018 - 2022)</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Computer Architecture,
                                Operating Systems, Networks and Security, Object Oriented Design, Big Data, Cloud
                                Computing, Software Testing, Mobile Application Development, Data Structures.</p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-900 dark:border-gray-200 pb-2">Projects</h2>
                    <div className="space-y-6">
                        {projects.map((item, index) => (
                            <div key={index}
                                 className="bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.technologies}</p>
                                <p className="text-sm text-justify text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                                {item.link && (
                                    <div
                                        className="flex flex-col justify-center min-h-10 left-[-17px] top-7 items-start relative group">
                                        <LinkArrow link={item.link}
                                                   mounted={mounted} theme={theme} linkType={'external'}/>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>


                {/* Skills */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-900 dark:border-gray-200 pb-2">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((item, index) => (
                            <div key={index}
                                 className="bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-4 rounded-lg shadow-sm">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.name}</h3>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {item.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}