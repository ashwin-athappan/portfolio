'use client';

import Map from "@/app/components/Map/Map";
import Profile from "@/app/components/Profile/Profile";
import Techs from "@/app/components/Techs/Techs";
import GitHub from "@/app/components/GitHub/GitHub";
import LinkedIn from "@/app/components/LinkedIn/LinkedIn";
import YouTube from "@/app/components/YouTube/YouTube";
import ContactMe from "@/app/components/ContactMe/ContactMe";
import React from "react";
import Testimonials from "@/app/components/Testimonials/Testimonials";

export default function About() {
    return (
        <div className="home-canvas">
            {/* Dynamic grid: varied card sizes, visionOS-style layout */}
            <div className="container mt-6 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 p-4 px-6 xl:px-24 pb-16 content max-w-7xl">
                <Techs />
                <Map />
                <GitHub />
                <Profile />
                <LinkedIn />
                <YouTube />
                <ContactMe />
            </div>
            <div className="container mx-auto p-4 px-6 xl:px-24 pb-20 content max-w-7xl">
                <Testimonials />
            </div>
        </div>
    );
}
