import React from "react";

export default function ToolsSection() {

    const badges = [
        {
            id: "2a09b785-3b18-4f12-9e12-5a8ee98250ee",
            title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
            issuedBy: "OPSWAT Academy",
            link: "https://www.credly.com/badges/2a09b785-3b18-4f12-9e12-5a8ee98250ee/public_url",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="2a09b785-3b18-4f12-9e12-5a8ee98250ee"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["CIP", "Critical Infrastructure", "OPSWAT Academy"]
        },
        {
            id: "b8b552ab-c6e2-480e-89ab-79879659f9fd",
            title: "Cybersecurity Essentials",
            issuedBy: "Cisco Networking Academy",
            link: "https://www.credly.com/badges/b8b552ab-c6e2-480e-89ab-79879659f9fd/public_url",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="b8b552ab-c6e2-480e-89ab-79879659f9fd"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["Availability", "Confidentiality", "Encryption", "Integrity", "Network Security"]
        },
        {
            id: "b21fa50a-2658-4df5-88fd-ce6bf9c8d4b4",
            title: "Python Essentials 1",
            issuedBy: "Cisco Networking Academy",
            link: "https://www.credly.com/badges/b21fa50a-2658-4df5-88fd-ce6bf9c8d4b4/public_url",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="b21fa50a-2658-4df5-88fd-ce6bf9c8d4b4"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["Algorithmic Thinking", "Analytical Thinking", "Basic Python Programming", "Best Practices in Programming", "Computer Programming", "Design, Develop, and Debug Scripts", "Procedural Programming", "Python"]
        },
        {
            id: "8fae776a-44f9-4aef-be5d-8d015a773e76",
            title: "GitHub Foundations",
            issuedBy: "GitHub",
            link: "https://www.credly.com/badges/8fae776a-44f9-4aef-be5d-8d015a773e76/public_url",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="8fae776a-44f9-4aef-be5d-8d015a773e76"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["Build Pipeline", "Continuous Delivery", "Continuous Integration", "DevOps", "GitHub", "GitHub Actions", "Release Management"]
        },
        {
            id: "b4df55fa-5fc5-4015-914c-bcd29a294ebc",
            title: "Deploy Kubernetes Applications on Google Cloud Skill Badge",
            issuedBy: "Google Cloud",
            link: "https://www.credly.com/badges/b4df55fa-5fc5-4015-914c-bcd29a294ebc/public_url",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="b4df55fa-5fc5-4015-914c-bcd29a294ebc"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["Artifact Registry" ,"Container", "Docker", "GKE"]
        },
        {
            id: "3dd5d74f69aa",
            title: "React (Basic) Certificate",
            issuedBy: "Google Cloud",
            link: "https://www.hackerrank.com/certificates/3dd5d74f69aa",
            badge: <div data-iframe-width="150" data-iframe-height="270"
                        data-share-badge-id="b4df55fa-5fc5-4015-914c-bcd29a294ebc"
                        data-share-badge-host="https://www.credly.com"></div>,
            skills: ["Artifact Registry" ,"Container", "Docker", "GKE"]
        }
    ]

    return (
        <div className="p-4 ">
            <h1 className="text-lg text-jetBlack dark:text-white font-bold mb-4">Certifications</h1>
            <hr className="border-jetBlack dark:border-white rounded-lg mb-4"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                    <div key={index} className="dark:bg-jetBlack bg-white rounded-lg shadow-md p-4">
                        <div className="flex justify-center">
                            {badge.badge}
                        </div>
                        <hr className="border-jetBlack dark:border-white mb-4"/>
                        <a href={badge.link} target="_blank" rel="noopener noreferrer" className="block mb-2">
                            <h2 className="text-md font-semibold text-justify text-jetBlack dark:text-white hover:text-blue-600 dark:hover:text-blue-300">
                                {badge.title}
                            </h2>
                        </a>
                        <h2 className="block text-sm font-semibold text-justify text-jetBlack dark:text-white">
                            Skills:
                        </h2>
                        <hr className="border-jetBlack dark:border-white mb-4"/>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {badge.skills.map((skill, idx) => (
                                <span key={idx}
                                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        </div>
    );
}