'use client';

import React, {useEffect, useState} from 'react';
import LinkArrow from "@/app/components/LinkArrow/LinkArrow";
import {useTheme} from "next-themes";
import Link from "next/link";

export default function Resume(): React.JSX.Element {

    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const experiences = [
        {
            position: 'Graduate Teaching Assistant',
            company: 'University of Texas at Arlington',
            location: 'Arlington, TX',
            duration: 'Aug 2025 - Present',
            details: [
                'Instructed 60+ students through hands-on labs in Assembly and OS fundamentals (RISC-V/x86, Linux syscalls, processes/threads, memory, synchronization, GDB), improving average lab completion rate by 15%',
                'Evaluated and provided feedback on 100+ lab/programming assignments; facilitated office hours and exam prep sessions',
            ]
        },
        {
            position: 'Student Administrative Assistant',
            company: 'University of Texas at Arlington',
            location: 'Arlington, TX',
            duration: 'Jun 2025 - Aug 2025',
            details: [
                'Created Python scripts to construct a pipeline that managed day-to-day schedule updates reducing manual intervention by 90%',
                'Developed a barcode-based Asset Tracking App to log check-in/out activity, cutting manual data entry time by 70% and improving reporting accuracy',
                'Automated workflows using Power Automate, Office365 API, and Excel Script, streamlining admin processes',
                'Supervised and delegated tasks to a team of 20 student workers, ensuring efficient day-to-day operations'
            ]
        },
        {
            position: 'Backend Developer & DevOps Engineer',
            company: 'Hughes Systique Corporation',
            location: 'Bangalore, India',
            duration: 'Jan 2022 – Jul 2024',
            details: [
                'Migrated monoliths to Spring Boot/Node.js microservices, improving overall availability to 90%',
                'Replaced 100+ SOAP APIs with RESTful services, reducing network overheads and payload size by 30%',
                'Integrated Liquibase for DB changes, reducing rollback time from days to minutes',
                'Built CI/CD pipelines with Docker, Kubernetes, Jenkins, and GKE, reducing deployment time by 50%'
            ]
        },
    ];

    const projects = [
        {
          name: 'University Center Asset Management Dashboard',
            technologies: 'Next.js, Vercel, Tailwind CSS, Firestore, TypeScript',
            description: 'Built a web-based asset management dashboard for the University Center with integrated barcode scanning to streamline inventory tracking and reduce manual errors'
        },
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
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Bash']
        },
        {
            name: 'Frameworks',
            skills: ['Spring Boot', 'React.js', 'Node.js', 'Next.js', 'Django', 'Tailwind CSS'],
        },
        {
            name: 'Databases',
            skills: ['MongoDB', 'MySQL', 'Oracle DB', 'Redis']
        },
        {
            name: 'Cloud & DevOps',
            skills: ['Git', 'JIRA', 'GCP', 'AWS', 'Docker', 'Kubernetes', 'Linux']
        },
        {
            name: 'ML/AI',
            skills: ['Scikit-learn', 'Pandas', 'NumPy', 'PyTorch', 'Neural Networks', 'Regression Analysis']
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
                        {/*Map over the new experience array of objects*/}
                        {experiences.map(experience => (
                            <div key={experience.position + experience.company}
                                 className="bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{experience.position}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{experience.company} | {experience.location}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{experience.duration}</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                                    {experience.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b-2 border-gray-900 dark:border-gray-200 pb-2">Education</h2>
                    <div className="space-y-6">
                        <div
                            className="bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
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
                            className="bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
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
                                 className="bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
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
                                 className="bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-4 rounded-lg shadow-sm">
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
            <div className="flex justify-center">
                <Link href={'https://drive.google.com/file/d/1Kj2YU2u7dB23wOzq3VyJWMlYnQLsvHKa/view?usp=sharing'}
                      target={'_blank'}
                      className="text-dark-element dark:text-white rounded-2xl bg-[#6CB4EE] dark:bg-[#00308F] px-6 py-2 transition-all duration-700 ease-in-out">
                    Download
                </Link>
            </div>
        </div>
    );
}