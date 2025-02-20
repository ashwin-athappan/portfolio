import React from "react";


export default function ResumeSection() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">Ashwin Athappan</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Software Developer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">ashwinathappank@gmail | 721 W Mitchell Cir,
                        Arlington, TX</p>
                </header>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-t-2 underline border-gray-300 dark:border-gray-700 mb-4 text-center">Experience</h2>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Software Engineer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Hughes Systique Corporation – Bangalore,
                            Karnataka, India</p>
                        <ul className="list-inside mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify">
                            <li className="list-disc">Led the transition from a monolithic to a microservices-based
                                architecture using Spring Boot and Node.js, improving system performance by 40% and
                                enabling future scalability.
                            </li>
                            <li className="list-disc">Migrated 100+ SOAP-based APIs to REST APIs, reducing bandwidth
                                usage by 30% and improving interoperability with third-party services.
                            </li>
                            <li className="list-disc">Designed and optimized CI/CD pipelines using Docker, Kubernetes,
                                and Jenkins, cutting deployment time by 50% and accelerating software releases.
                            </li>
                            <li className="list-disc">Conducted regression testing for 100+ APIs, achieving 98% test
                                coverage and resolving 20+ critical bugs, reducing post-deployment defects by 70%.
                            </li>
                            <li className="list-disc">Implemented Liquibase for database change management, reducing
                                rollback time from 1-2 days to just 5-10 minutes, improving visibility into changes, and
                                enabling seamless tracking of modifications by team members.
                            </li>
                            <li className="list-disc">Simplified technical documentation with tools like Excel and Word,
                                improving clarity and facilitating effective team communication.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-t-2 underline border-gray-300 dark:border-gray-700 mb-4 text-center">Education</h2>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Master of Science in
                            Computer Science</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">University of Texas at Arlington
                            (Expected Graduation: Aug 2026)</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Coursework: Design and Analysis of
                            Algorithms, Distributed Systems</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Bachelor of Engineering
                            in Computer Science</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">New Horizon College of Engineering
                            (Graduated July 2022)</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Coursework: Computer Organization, Operating Systems, Computer Networks, Big Data, Cloud
                            Computing,
                            Software Testing, Mobile Application Development.
                        </p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-t-2 underline border-gray-300 dark:border-gray-700 mb-4 text-center">Skills</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-sm text-gray-600 dark:text-gray-400">Programming: Java, Python, JavaScript,
                            TypeScript
                        </li>
                        <li className="text-sm text-gray-600 dark:text-gray-400">Frameworks: jQuery, Spring Boot,
                            React.js,
                            Node.js
                        </li>
                        <li className="text-sm text-gray-600 dark:text-gray-400">Databases: MongoDB, MySQL, Oracle DB
                        </li>
                        <li className="text-sm text-gray-600 dark:text-gray-400">Tools: Agile, JIRA, GCP, Pub/Sub,
                            JMeter, Docker, Kubernetes, REST API, Linux, Bash Scripting
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-t-2 underline border-gray-300 dark:border-gray-700 mb-4 text-center">Projects</h2>
                    <div className="mb-4">
                        <h3 className="text-md text-gray-800 dark:text-gray-200"><span className="inline text-lg font-semibold">Algo Visualizer -</span> (React.js, JavaScript, HTML/CSS, MongoDB, GraphQL)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            I built an algorithm visualizer in my college as an inspirational project. It showcases
                            sorting (Bubble, Insertion, Selection, Merge, Quick Sort), scheduling (FCFS, SJF, Priority,
                            Round Robin), graph traversal (DFS, BFS, Dijkstra’s, Prim’s MST), N Queens, searching
                            (Linear, Binary), BST operations, and stack/queue operations. It features step-by-step
                            animations, speed control, and input customization for enhanced learning. This website was
                            deployed on GitHub pages using GitHub Actions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md text-gray-800 dark:text-gray-200"><span
                            className="inline text-lg font-semibold">File Synchronization System -</span> (Java,
                            SpringBoot, Bash Scripting, Maven)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Developed a command-line tool for file upload, download, and deletion with fault tolerance,
                            transaction tracking, and recovery to ensure seamless operation and consistency during
                            client-server interactions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-md text-gray-800 dark:text-gray-200"><span
                            className="inline text-lg font-semibold">Ecommerce Website -</span> (Next.js,
                            Tailwind CSS, MongoDB)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Developed a responsive e-commerce website using Next.js and Tailwind CSS, integrating
                            MongoDB for efficient data storage and retrieval. Implemented features such as user
                            authentication, product search, shopping cart functionality, and order processing, ensuring
                            optimal performance and a seamless user experience. Focused on clean, reusable code and
                            leveraging Next.js for enhanced SEO and dynamic routing.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}